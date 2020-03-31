import cookieParser from 'cookie-parser'
import express, { Express } from 'express'

export const installExpressMiddleware = (server: Express) => {
  // serve favicon folder on root
  server.use(express.static('public/favicon'))
  server.use('/service-worker.js', express.static('.next/service-worker.js'))
  server.use(cookieParser())
}
