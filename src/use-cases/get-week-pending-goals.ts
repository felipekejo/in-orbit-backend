import { GoalsRepository } from '../repositories/goals-repository'

export class GetWeekPendingGoalsUseCase {
  constructor(private goalsRepository: GoalsRepository) {}

  async execute() {
    const goals = await this.goalsRepository.fetchAll()

    return goals
  }
}
