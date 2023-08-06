import { app } from '@/app'
import request from 'supertest'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'

import { prisma } from '@/lib/prisma'
import { createAndAuthenticateOrganization } from '@/utils/test/create-and-authenticate-organization'

describe('Find Pet (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to find a pet', async () => {
    const { token } = await createAndAuthenticateOrganization(app)

    const organization = await prisma.organization.findFirstOrThrow()

    const pet = await prisma.pet.create({
      data: {
        age: 1,
        name: 'Dog',
        size: 'small',
        city: 'São Paulo',
        about: 'A small dog',
        energy_level: 'high',
        independence_level: 'low',
        organization_id: organization.id,
        environment: 'small environments',
        adoptionRequirements: {
          createMany: {
            data: [
              { description: 'Adoption requirement 1' },
              { description: 'Adoption requirement 2' },
            ],
          },
        },
      },
    })

    const response = await request(app.server)
      .get(`/pets/${pet.id}`)
      .set('Authorization', `Bearer ${token}`)
      .query({
        city: 'São Paulo',
      })
      .send()

    expect(response.statusCode).toEqual(200)
    expect(response.body).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        organization_id: organization.id,
        organization: expect.objectContaining({
          email: expect.any(String),
          whatsapp: expect.any(String),
        }),
        adoptionRequirements: expect.arrayContaining([
          expect.objectContaining({
            description: expect.any(String),
          }),
          expect.objectContaining({
            description: expect.any(String),
          }),
        ]),
      }),
    )
  })
})
