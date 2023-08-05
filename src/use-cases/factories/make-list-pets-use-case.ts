import { ListPetsUseCase } from '../list-pets'
import { PrismaPetsRepository } from '@/repositories/prisma/prisma-pets-repository'

export function makeListPetsUseCase() {
  const petsRepository = new PrismaPetsRepository()
  const useCase = new ListPetsUseCase(petsRepository)

  return useCase
}
