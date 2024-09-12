import { Prisma } from '@prisma/client'
import dayjs from 'dayjs'
import { prisma } from '../../lib/prisma'
import { GoalsRepository } from '../goals-repository'

export class PrismaGoalsRepository implements GoalsRepository {
  async create({ title, desiredWeeklyFrequency }: Prisma.GoalCreateInput) {
    const goal = await prisma.goal.create({
      data: {
        title,
        desiredWeeklyFrequency,
      },
    })

    return goal
  }

  async fetchAll() {
    const lastDayWeek = dayjs().endOf('week').toDate()
    const firstDayWeek = dayjs().startOf('week').toDate()

    const goals = await prisma.goal.findMany({
      where: {
        createdAt: {
          lte: lastDayWeek,
        },
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

    return { goals }
  }
}
