import dayjs from 'dayjs'
import { prisma } from '../../lib/prisma'
import { GoalsCompletionRepository } from '../goal-completion-repository'

export class PrismaGoalsCompletionRepository
  implements GoalsCompletionRepository
{
  async create(goalId: string) {
    const lastDayWeek = dayjs().endOf('week').toDate()
    const firstDayWeek = dayjs().startOf('week').toDate()

    const goal = await prisma.goal.findMany({
      where: {
        AND: [
          {
            id: goalId,
          },
          {
            createdAt: {
              lte: lastDayWeek,
            },
          },
        ],
      },
      include: {
        _count: {
          select: {
            goalCompletion: {
              where: {
                createdAt: {
                  gte: firstDayWeek,
                  lte: lastDayWeek,
                },
              },
            },
          },
        },
      },
    })

    if (goal[0]._count.goalCompletion >= goal[0].desiredWeeklyFrequency) {
      throw new Error('Goal already completed')
    }

    const goalCompletion = await prisma.goalCompletion.create({
      data: {
        goalId,
      },
    })

    return goalCompletion
  }
}
