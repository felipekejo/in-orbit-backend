import fastify from 'fastify'
import { createGoal } from './controllers/createGoal'

const app = fastify()

app.post('/goals', createGoal)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server running on 3333')
  })
