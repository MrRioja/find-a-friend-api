import { Prisma, Pet } from '@prisma/client'

export interface ListData {
  city: string
  age?: number
  size?: string
  environment?: string
  energy_level?: string
  independence_level?: string
  adoption_requirements?: string[]
}

export interface FindData {
  id: string
}

export interface PetsRepository {
  create(data: Prisma.PetUncheckedCreateInput): Promise<Pet>
  list(data: ListData): Promise<Pet[]>
  find(data: FindData): Promise<Pet | null>
}
