import { FastifyInstance } from 'fastify'
import { createGoal } from './createGoal'
import { createGoalCompletion } from './createGoalCompletion'
import { getWeekPendingGoals } from './getWeekPendingGoals'

export async function routes(app: FastifyInstance) {
  app.post('/goals', createGoal)
  app.get('/goals', getWeekPendingGoals)
  app.post('/goalsCompletion', createGoalCompletion)
}
