import { GoalsCompletionRepository } from '../repositories/goal-completion-repository'

interface CreateGoalCompletionUseCaseRequest {
  goalId: string
}

export class CreateGoalCompletionUseCase {
  constructor(private goalsCompletionRepository: GoalsCompletionRepository) {}

  async execute({ goalId }: CreateGoalCompletionUseCaseRequest) {
    const goalCompletion = await this.goalsCompletionRepository.create(goalId)

    return { goalCompletion }
  }
}
