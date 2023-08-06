import { Pet } from '@prisma/client'

import { PetsRepository } from '@/repositories/pets-repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

interface FindPetUseCaseRequest {
  id: string
}

interface FindPetUseCaseResponse {
  pet: Pet
}

export class FindPetUseCase {
  constructor(private petsRepository: PetsRepository) {}

  async execute({
    id,
  }: FindPetUseCaseRequest): Promise<FindPetUseCaseResponse> {
    const pet = await this.petsRepository.find({
      id,
    })

    if (!pet) {
      throw new ResourceNotFoundError()
    }

    return { pet }
  }
}
