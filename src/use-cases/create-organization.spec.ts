import { describe, it, expect, beforeEach } from 'vitest'

import { CreateOrganizationUseCase } from './create-organization'
import { UserAlreadyExistsError } from './errors/user-already-exists-error'
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

  it('should not be able to create two orgs with the same email', async () => {
    const email = 'org@email.com'

    await sut.execute({
      email,
      cep: '04848-515',
      password: '123456',
      whatsapp: '81 91234.5678',
      address: 'Avenida Paulista',
      responsible_name: 'Org Responsible',
    })

    await expect(() =>
      sut.execute({
        email,
        cep: '04848-515',
        password: '123456',
        whatsapp: '81 91234.5678',
        address: 'Avenida Paulista',
        responsible_name: 'Org Responsible',
      }),
    ).rejects.toBeInstanceOf(UserAlreadyExistsError)
  })
})
