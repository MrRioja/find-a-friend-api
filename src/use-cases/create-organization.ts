import { hash } from 'bcryptjs'
import { Organization } from '@prisma/client'

import { UserAlreadyExistsError } from './errors/user-already-exists-error'
import { OrganizationsRepository } from '@/repositories/organizations-repository'

interface CreateOrganizationUseCaseRequest {
  cep: string
  email: string
  address: string
  whatsapp: string
  password: string
  responsible_name: string
}

interface CreateOrganizationUseCaseResponse {
  organization: Organization
}

export class CreateOrganizationUseCase {
  constructor(private organizationsRepository: OrganizationsRepository) {}

  async execute({
    cep,
    email,
    address,
    password,
    whatsapp,
    responsible_name,
  }: CreateOrganizationUseCaseRequest): Promise<CreateOrganizationUseCaseResponse> {
    const password_hash = await hash(password, 6)

    const org = await this.organizationsRepository.findByEmail(email)

    if (org) {
      throw new UserAlreadyExistsError()
    }

    const organization = await this.organizationsRepository.create({
      cep,
      email,
      address,
      whatsapp,
      responsible_name,
      password: password_hash,
    })

    return { organization }
  }
}
