import { Pet } from '@prisma/client'

import { PetsRepository } from '@/repositories/pets-repository'

interface ListPetsUseCaseRequest {
  city: string
  age?: number
  size?: string
  environment?: string
  energy_level?: string
  independence_level?: string
}

interface ListPetsUseCaseResponse {
  pets: Pet[]
}

export class ListPetsUseCase {
  constructor(private petsRepository: PetsRepository) {}

  async execute({
    age,
    city,
    size,
    environment,
    energy_level,
    independence_level,
  }: ListPetsUseCaseRequest): Promise<ListPetsUseCaseResponse> {
    const pets = await this.petsRepository.list({
      age,
      city,
      size,
      environment,
      energy_level,
      independence_level,
    })

    return { pets }
  }
}
