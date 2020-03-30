import { HttpClient } from './Http'
import { Requests } from './Requests'

export const Http = new HttpClient()
export const Api = Requests(Http)
