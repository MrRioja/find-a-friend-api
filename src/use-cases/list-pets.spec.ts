import { describe, it, expect, beforeEach } from 'vitest'

import { ListPetsUseCase } from './list-pets'
import { InMemoryPetsRepository } from '@/repositories/in-memory/in-memory-pets-repository'

let sut: ListPetsUseCase
let petsRepository: InMemoryPetsRepository

describe('List Pets Use Case', () => {
  beforeEach(() => {
    petsRepository = new InMemoryPetsRepository()
    sut = new ListPetsUseCase(petsRepository)
  })

  it('should be able to list pets by city', async () => {
    await petsRepository.create({
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

    const { pets } = await sut.execute({
      city: 'São Paulo',
    })

    expect(pets).toHaveLength(1)
    expect(pets).toEqual([
      expect.objectContaining({
        organization_id: '1',
        id: expect.any(String),
      }),
    ])
  })

  it('should be able to list pets by city and pet characteristics', async () => {
    await petsRepository.create({
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

    await petsRepository.create({
      age: 1,
      name: 'Dog',
      size: 'small',
      city: 'São Paulo',
      organization_id: '1',
      about: 'A small dog',
      energy_level: 'low',
      independence_level: 'low',
      environment: 'small environments',
    })

    await petsRepository.create({
      age: 1,
      name: 'Dog',
      size: 'medium',
      city: 'São Paulo',
      energy_level: 'low',
      organization_id: '1',
      about: 'A small dog',
      independence_level: 'low',
      environment: 'small environments',
    })

    const { pets } = await sut.execute({
      size: 'medium',
      city: 'São Paulo',
      energy_level: 'low',
    })

    expect(pets).toHaveLength(1)
    expect(pets).toEqual([
      expect.objectContaining({
        organization_id: '1',
        id: expect.any(String),
      }),
    ])
  })
})
