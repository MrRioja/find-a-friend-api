import { describe, it, expect, beforeEach } from 'vitest'

import { CreateOrganizationUseCase } from './create-organization'
import { InMemoryOrganizationsRepository } from '@/repositories/in-memory/in-memory-organizations-repository'

let sut: CreateOrganizationUseCase
let organizationsRepository: InMemoryOrganizationsRepository

describe('Create Organization Use Case', () => {
  beforeEach(() => {
    organizationsRepository = new InMemoryOrganizationsRepository()
    sut = new CreateOrganizationUseCase(organizationsRepository)
  })

  it('should be able to create an organization', async () => {
    const { organization } = await sut.execute({
      cep: '04848-515',
      password: '123456',
      email: 'org@email.com',
      whatsapp: '81 91234.5678',
      address: 'Avenida Paulista',
      responsible_name: 'Org Responsible',
    })

    expect(organization.id).toEqual(expect.any(String))
  })
})
