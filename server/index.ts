import express from 'express'
import next from 'next'

import { installExpressMiddleware, installI18nMiddleware } from './middleware'

const port = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()

    installI18nMiddleware(server)

    installExpressMiddleware(server)

    server.get('*', (req, res) => handle(req, res))
    server.listen(port, (err?: Error) => {
      if (err) {
        throw err
      }
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })
