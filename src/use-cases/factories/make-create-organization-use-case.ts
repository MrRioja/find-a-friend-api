import { CreateOrganizationUseCase } from '../create-organization'
import { PrismaOrganizationsRepository } from '@/repositories/prisma/prisma-organizations-repository'

export function makeCreateOrganizationUseCase() {
  const organizationsRepository = new PrismaOrganizationsRepository()
  const useCase = new CreateOrganizationUseCase(organizationsRepository)

  return useCase
}
