import { hash } from 'bcryptjs'
import { describe, it, expect, beforeEach } from 'vitest'

import { AuthenticateUseCase } from './authenticate'
import { InvalidCredentialsError } from './errors/invalid-credentials-error'
import { InMemoryOrganizationsRepository } from '@/repositories/in-memory/in-memory-organizations-repository'

let sut: AuthenticateUseCase
let organizationsRepository: InMemoryOrganizationsRepository

describe('Authenticate Use Case', () => {
  beforeEach(() => {
    organizationsRepository = new InMemoryOrganizationsRepository()
    sut = new AuthenticateUseCase(organizationsRepository)
  })

  it('should be able to authenticate', async () => {
    await organizationsRepository.create({
      cep: '04848-515',
      email: 'org@email.com',
      whatsapp: '81 91234.5678',
      address: 'Avenida Paulista',
      password: await hash('123456', 6),
      responsible_name: 'Org Responsible',
    })

    const { organization } = await sut.execute({
      password: '123456',
      email: 'org@email.com',
    })

    expect(organization.id).toEqual(expect.any(String))
  })

  it('should not be able to authenticate with wrong email', async () => {
    await expect(() =>
      sut.execute({
        password: '123456',
        email: 'johndoe@example.com',
      }),
    ).rejects.toBeInstanceOf(InvalidCredentialsError)
  })

  it('should not be able to authenticate with wrong password', async () => {
    await organizationsRepository.create({
      cep: '04848-515',
      email: 'org@email.com',
      whatsapp: '81 91234.5678',
      address: 'Avenida Paulista',
      password: await hash('123456', 6),
      responsible_name: 'Org Responsible',
    })

    await expect(() =>
      sut.execute({
        password: '654321',
        email: 'org@email.com',
      }),
    ).rejects.toBeInstanceOf(InvalidCredentialsError)
  })
})
