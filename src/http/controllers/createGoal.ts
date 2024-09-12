import { FastifyReply, FastifyRequest } from 'fastify'
import z from 'zod'
import { PrismaGoalsRepository } from '../../repositories/prisma/prisma-goals-repository'
import { CreateGoalUseCase } from '../../use-cases/create-goal'

export async function createGoal(request: FastifyRequest, reply: FastifyReply) {
  const createGoalBodySchema = z.object({
    title: z.string(),
    desiredWeeklyFrequency: z.number().int().min(1).max(7),
  })

  const { title, desiredWeeklyFrequency } = createGoalBodySchema.parse(
    request.body,
  )

  try {
    const prismaGoalsRepository = new PrismaGoalsRepository()

    const createdGoalUseCase = new CreateGoalUseCase(prismaGoalsRepository)

    const goal = await createdGoalUseCase.execute({
      title,
      desiredWeeklyFrequency,
    })
    return reply.status(201).send(goal)
  } catch (error) {
    return reply.status(500).send()
  }
}
