import express from 'express'
import next from 'next'

const port = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()

    // serve favicon folder on root
    server.use(express.static('public/favicon'))
    server.use('/service-worker.js', express.static('.next/service-worker.js'))

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
