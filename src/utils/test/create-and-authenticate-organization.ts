import request from 'supertest'
import { hash } from 'bcryptjs'
import { FastifyInstance } from 'fastify'

import { prisma } from '@/lib/prisma'

export async function createAndAuthenticateOrganization(app: FastifyInstance) {
  await prisma.organization.create({
    data: {
      cep: '04848-515',
      email: 'org@email.com',
      whatsapp: '81 91234.5678',
      address: 'Avenida Paulista',
      password: await hash('123456', 6),
      responsible_name: 'Org Responsible',
    },
  })

  const authResponse = await request(app.server).post('/sessions').send({
    password: '123456',
    email: 'org@email.com',
  })

  const { token } = authResponse.body

  return { token }
}
