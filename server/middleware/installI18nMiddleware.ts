import { Express } from 'express'
import nextI18NextMiddleware from 'next-i18next/middleware'

import nextI18next from '../i18n'

export const installI18nMiddleware = (server: Express) => {
  server.use(nextI18NextMiddleware(nextI18next))
}
