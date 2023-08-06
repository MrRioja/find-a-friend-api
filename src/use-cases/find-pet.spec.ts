import { describe, it, expect, beforeEach } from 'vitest'

import { FindPetUseCase } from './find-pet'
import { InMemoryPetsRepository } from '@/repositories/in-memory/in-memory-pets-repository'

let sut: FindPetUseCase
let petsRepository: InMemoryPetsRepository

describe('Find Pets Use Case', () => {
  beforeEach(() => {
    petsRepository = new InMemoryPetsRepository()
    sut = new FindPetUseCase(petsRepository)
  })

  it('should be able to find a pet', async () => {
    const petCreated = await petsRepository.create({
      age: 1,
      name: 'Dog',
      size: 'small',
      city: 'São Paulo',
      organization_id: '1',
      about: 'A small dog',
      energy_level: 'high',
      independence_level: 'low',
      environment: 'small environments',
    })

    const { pet } = await sut.execute({
      id: petCreated.id,
    })

    expect(pet).toEqual(
      expect.objectContaining({
        organization_id: '1',
        id: expect.any(String),
      }),
    )
  })
})
