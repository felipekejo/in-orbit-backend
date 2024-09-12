import { Goal, Prisma } from '@prisma/client'

export interface WeekPendingGoal {
  goals: {
    _count: {
      goalCompletion: number
    }
    id: string
    title: string
    desiredWeeklyFrequency: number
    createdAt: Date
    updatedAt: Date | null
  }[]
}

export interface GoalsRepository {
  create(goal: Prisma.GoalCreateInput): Promise<Goal>
  fetchAll(): Promise<WeekPendingGoal>
}
