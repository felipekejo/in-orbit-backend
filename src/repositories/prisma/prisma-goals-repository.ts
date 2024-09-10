import { Prisma } from '@prisma/client'
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
}
