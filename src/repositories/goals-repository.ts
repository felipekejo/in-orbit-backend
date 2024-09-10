import { Goal, Prisma } from '@prisma/client'

export interface GoalsRepository {
  create(goal: Prisma.GoalCreateInput): Promise<Goal>
}
