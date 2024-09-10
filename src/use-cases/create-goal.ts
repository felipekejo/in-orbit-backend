import { GoalsRepository } from '../repositories/goals-repository'

interface CreateGoalUseCaseRequest {
  title: string
  desiredWeeklyFrequency: number
}

export class CreateGoalUseCase {
  constructor(private goalsRepository: GoalsRepository) {}

  async execute({ title, desiredWeeklyFrequency }: CreateGoalUseCaseRequest) {
    const goal = await this.goalsRepository.create({
      title,
      desiredWeeklyFrequency,
    })

    return { goal }
  }
}
