import { Pet } from '@prisma/client'

import { prisma } from '@/lib/prisma'
import { PetsRepository } from '@/repositories/pets-repository'

interface CreatePetUseCaseRequest {
  age: number
  name: string
  size: string
  city: string
  about: string
  environment: string
  energy_level: string
  organization_id: string
  independence_level: string
  adoption_requirements?: string[]
}

interface CreatePetUseCaseResponse {
  pet: Pet
}

export class CreatePetUseCase {
  constructor(private petsRepository: PetsRepository) {}

  async execute({
    age,
    name,
    size,
    city,
    about,
    environment,
    energy_level,
    organization_id,
    independence_level,
    adoption_requirements,
  }: CreatePetUseCaseRequest): Promise<CreatePetUseCaseResponse> {
    const pet = await this.petsRepository.create({
      name,
      size,
      city,
      about,
      environment,
      energy_level,
      organization_id,
      age: Number(age),
      independence_level,
    })

    if (adoption_requirements) {
      const requirements = adoption_requirements.map((requirement) => {
        return { pet_id: pet.id, description: requirement }
      })

      await prisma.adoptionRequirements.createMany({
        data: requirements,
      })
    }

    return { pet }
  }
}
