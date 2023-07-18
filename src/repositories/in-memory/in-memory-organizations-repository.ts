import { randomUUID } from 'node:crypto'
import { Prisma, Organization } from '@prisma/client'

import { OrganizationsRepository } from '../organizations-repository'

export class InMemoryOrganizationsRepository
  implements OrganizationsRepository
{
  public items: Organization[] = []

  async create(data: Prisma.OrganizationCreateInput) {
    const organization = {
      id: randomUUID(),
      cep: data.cep,
      email: data.email,
      address: data.address,
      password: data.password,
      whatsapp: data.whatsapp,
      responsible_name: data.responsible_name,
      created_at: new Date(),
    }

    this.items.push(organization)

    return organization
  }

  async findByEmail(email: string) {
    const organization = this.items.find((item) => item.email === email)

    if (!organization) {
      return null
    }

    return organization
  }
}
