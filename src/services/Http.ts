import fetch from 'isomorphic-fetch'
import wretch, { Wretcher, WretcherError } from 'wretch'

export interface HttpErrorInput {
  message: string
  statusCode: number
  response?: Response
  body?: any
}

export type AbortFunction = () => void
type Token = string | undefined
type RequestFn = <T = any, I = any>(url: string, data: I, config?: RequestConfig) => Promise<T>
type RequestGetFn = <T = any, I = any>(url: string, data?: I, config?: RequestConfig) => Promise<T>
type BeforeHook = (client: HttpClient) => Promise<void> | void
type ErrorHook = <T = any>(err: WretcherError, request: () => Promise<T>) => any
type HttpClientInit = RequestInit & {
  baseUrl?: string
  returnType?: 'json' | 'text' | 'blob'
  /**  This function is called before every request. This is where you would check if your token is still valid */
  beforeHook?: BeforeHook
  /** Function that is called if an error occurs */
  onError?: ErrorHook
}
type RequestConfig = HttpClientInit & {
  createAbort?: (abortFunction: AbortFunction) => void
}

type Method = 'post' | 'put' | 'patch' | 'delete'

interface RequestProps<T> {
  method: 'get' | Method
  url: string
  data?: T
  requestConfig?: RequestConfig
}

/**
 * Wrapper around fetch
 */
export class HttpClient {
  private defaultConfig: RequestConfig = {}
  private config: RequestConfig = {}
  private token: Token
  private wretcher: Wretcher

  constructor(config: HttpClientInit = {}) {
    this.config = {
      ...this.defaultConfig,
      ...config,
    }

    this.wretcher = wretch()
      .polyfills({
        fetch,
      })
      .url(config.baseUrl || '')
  }

  private createRequest(method: 'get'): RequestGetFn
  private createRequest(method: Method): RequestFn
  private createRequest(method: 'get' | Method): RequestFn {
    return (url, data, config) =>
      this.request({
        method,
        url,
        data,
        requestConfig: config,
      })
  }

  public get = this.createRequest('get')
  public post = this.createRequest('post')
  public put = this.createRequest('put')
  public patch = this.createRequest('patch')
  public delete = this.createRequest('delete')

  public setToken = (token: Token) => (this.token = token)

  private getAuth() {
    // if authenticated set bearer token
    return this.token ? `Bearer ${this.token}` : ''
  }

  private getQuery(method: 'get' | Method, data: any) {
    return method === 'get' ? data : ''
  }

  public async request<T, I>({ url, method, data, requestConfig = {} }: RequestProps<I>) {
    const { beforeHook } = this.config

    const config: RequestConfig = {
      ...this.config,
      ...requestConfig,
    }

    const { createAbort } = config

    if (beforeHook) {
      await beforeHook(this)
    }

    const [controller, wretch] = this.wretcher
      .auth(this.getAuth())
      .options(config)
      .query(this.getQuery(method, data))
      .url(url)
      [method](data)
      .onAbort(() => console.log('Aborted !'))
      .controller()

    if (createAbort) {
      createAbort(controller.abort.bind(controller))
    }

    return wretch
      .badRequest((err: WretcherError) => console.log(err.status))
      .unauthorized((err: WretcherError) => console.log(err.status))
      .forbidden((err: WretcherError) => console.log(err.status))
      .notFound((err: WretcherError) => console.log(err.status))
      .timeout((err: WretcherError) => console.log(err.status))
      .internalError((err: WretcherError) => console.log(err.status))
      .fetchError((error: WretcherError) => {
        this.onError(error, () => this.request({ url, method, requestConfig }))
      })
      .res(res => this.handleSuccess(res, config) as Promise<T>)
  }

  private handleSuccess(res: Response, config: RequestConfig) {
    const { returnType = 'json' } = config

    if (res.status === 204 || res.status === 201) {
      return res
    }

    return res[returnType]()
  }

  private async onError<T>(err: WretcherError, requestFn: () => Promise<T>) {
    const { onError } = this.config

    if (onError) {
      return onError(err, requestFn)
    }

    throw err
  }
}
