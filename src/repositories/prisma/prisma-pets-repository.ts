import { Prisma } from '@prisma/client'

import { prisma } from '@/lib/prisma'
import { FindData, ListData, PetsRepository } from '../pets-repository'

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

  async find(data: FindData) {
    const pet = await prisma.pet.findUniqueOrThrow({
      where: {
        ...data,
      },
      select: {
        id: true,
        name: true,
        age: true,
        size: true,
        city: true,
        about: true,
        energy_level: true,
        environment: true,
        independence_level: true,
        created_at: true,
        organization_id: true,
        organization: {
          select: {
            email: true,
            responsible_name: true,
            cep: true,
            address: true,
            whatsapp: true,
          },
        },
        adoptionRequirements: {
          select: {
            id: true,
            description: true,
          },
        },
      },
    })

    return pet
  }
}
