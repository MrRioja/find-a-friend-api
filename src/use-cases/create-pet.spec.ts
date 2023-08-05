import { describe, it, expect, beforeEach } from 'vitest'

import { CreatePetUseCase } from './create-pet'
import { InMemoryPetsRepository } from '@/repositories/in-memory/in-memory-pets-repository'
import { InMemoryOrganizationsRepository } from '@/repositories/in-memory/in-memory-organizations-repository'

let sut: CreatePetUseCase
let petsRepository: InMemoryPetsRepository
let gymsRepository: InMemoryOrganizationsRepository

describe('Create Pet Use Case', () => {
  beforeEach(() => {
    gymsRepository = new InMemoryOrganizationsRepository()
    petsRepository = new InMemoryPetsRepository()
    sut = new CreatePetUseCase(petsRepository)
  })

  it('should be able to create a pet', async () => {
    const organization = await gymsRepository.create({
      cep: '04848-515',
      password: '123456',
      email: 'org@email.com',
      whatsapp: '81 91234.5678',
      address: 'Avenida Paulista',
      responsible_name: 'Org Responsible',
    })

    const { pet } = await sut.execute({
      age: 1,
      size: 'small',
      city: 'Recife',
      name: 'Small Pet',
      energy_level: 'low',
      about: 'A small Pet',
      independence_level: 'low',
      organization_id: organization.id,
      environment: 'small environments',
    })

    expect(pet.id).toEqual(expect.any(String))
  })
})
