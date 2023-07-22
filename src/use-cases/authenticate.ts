import { compare } from 'bcryptjs'
import { Organization } from '@prisma/client'

import { InvalidCredentialsError } from './errors/invalid-credentials-error'
import { OrganizationsRepository } from '@/repositories/organizations-repository'

interface AuthenticateUseCaseRequest {
  email: string
  password: string
}

interface AuthenticateUseCaseResponse {
  organization: Organization
}
export class AuthenticateUseCase {
  constructor(private organizationsRepository: OrganizationsRepository) {}

  async execute({
    email,
    password,
  }: AuthenticateUseCaseRequest): Promise<AuthenticateUseCaseResponse> {
    const organization = await this.organizationsRepository.findByEmail(email)

    if (!organization) {
      throw new InvalidCredentialsError()
    }

    const doesPasswordMatches = await compare(password, organization.password)

    if (!doesPasswordMatches) {
      throw new InvalidCredentialsError()
    }

    return { organization }
  }
}
