import fastify from 'fastify'
import { routes } from './controllers/routes'

const app = fastify()

app.register(routes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server running on 3333')
  })
