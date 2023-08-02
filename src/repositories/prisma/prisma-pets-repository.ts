import { Prisma } from '@prisma/client'

import { prisma } from '@/lib/prisma'
import { ListData, PetsRepository } from '../pets-repository'

export class PrismaPetsRepository implements PetsRepository {
  async create(data: Prisma.PetUncheckedCreateInput) {
    const pet = await prisma.pet.create({
      data,
    })

    return pet
  }

  async list(data: ListData) {
    const pets = await prisma.pet.findMany({
      where: {
        ...data,
      },
    })

    return pets
  }
}
