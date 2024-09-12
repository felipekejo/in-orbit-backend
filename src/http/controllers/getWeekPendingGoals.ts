import { FastifyReply, FastifyRequest } from 'fastify'
import { PrismaGoalsRepository } from '../../repositories/prisma/prisma-goals-repository'
import { GetWeekPendingGoalsUseCase } from '../../use-cases/get-week-pending-goals'

export async function getWeekPendingGoals(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const prismaGoalsRepository = new PrismaGoalsRepository()

    const createdGoalUseCase = new GetWeekPendingGoalsUseCase(
      prismaGoalsRepository,
    )

    const goals = await createdGoalUseCase.execute()
    return reply.status(201).send(goals)
  } catch (error) {
    console.log(error)
    return reply.status(409).send({
      message: error.message,
    })
  }
}
