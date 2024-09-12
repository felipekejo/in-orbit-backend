import { FastifyReply, FastifyRequest } from 'fastify'
import z from 'zod'
import { PrismaGoalsCompletionRepository } from '../../repositories/prisma/prisma-goals-completion-repository'
import { CreateGoalCompletionUseCase } from '../../use-cases/create-coal-completion'

export async function createGoalCompletion(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const createGoalCompletionBodySchema = z.object({
    goalId: z.string(),
  })

  const { goalId } = createGoalCompletionBodySchema.parse(request.body)

  try {
    const prismaGoalsCompletionRepository =
      new PrismaGoalsCompletionRepository()

    const createdGoalCompletionUseCase = new CreateGoalCompletionUseCase(
      prismaGoalsCompletionRepository,
    )

    const goalCompletion = await createdGoalCompletionUseCase.execute({
      goalId,
    })
    return reply.status(201).send(goalCompletion)
  } catch (error) {
    return reply.status(500).send()
  }
}
