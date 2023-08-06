import { randomUUID } from 'crypto'
import { Prisma, Pet } from '@prisma/client'

import { FindData, ListData, PetsRepository } from '../pets-repository'

export class InMemoryPetsRepository implements PetsRepository {
  public items: Pet[] = []

  async create(data: Prisma.PetUncheckedCreateInput) {
    const pet: Pet = {
      age: data.age,
      city: data.city,
      name: data.name,
      size: data.size,
      id: randomUUID(),
      about: data.about,
      created_at: new Date(),
      environment: data.environment,
      energy_level: data.energy_level,
      organization_id: data.organization_id,
      independence_level: data.independence_level,
    }

    this.items.push(pet)

    return pet
  }

  async list(data: ListData) {
    const pets = this.items.filter((item) => {
      if (item.city !== data.city) {
        return false
      }

      if (
        (data.age !== undefined && item.age !== data.age) ||
        (data.size !== undefined && item.size !== data.size) ||
        (data.environment !== undefined &&
          item.environment !== data.environment) ||
        (data.energy_level !== undefined &&
          item.energy_level !== data.energy_level) ||
        (data.independence_level !== undefined &&
          item.independence_level !== data.independence_level)
      ) {
        return false
      }

      return true
    })

    return pets
  }

  async find(data: FindData) {
    const pet = this.items.find((item) => item.id === data.id)

    if (!pet) {
      return null
    }

    return pet
  }
}
