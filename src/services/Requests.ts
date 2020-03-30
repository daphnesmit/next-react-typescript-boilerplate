import { HttpClient } from './Http'

export const Requests = (Http: HttpClient) => ({
  getGithubUser: () => Http.get<any>('https://api.github.com/users/daphnesmit'),
})
