import { GoalCompletion } from '@prisma/client'

export interface GoalsCompletionRepository {
  create(goalId: string): Promise<GoalCompletion>
}
