import { FindPetUseCase } from '../find-pet'
import { PrismaPetsRepository } from '@/repositories/prisma/prisma-pets-repository'

export function makeFindPetUseCase() {
  const petsRepository = new PrismaPetsRepository()
  const useCase = new FindPetUseCase(petsRepository)

  return useCase
}
