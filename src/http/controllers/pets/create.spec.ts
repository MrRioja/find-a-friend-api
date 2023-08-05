import { app } from '@/app'
import request from 'supertest'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'

import { createAndAuthenticateOrganization } from '@/utils/test/create-and-authenticate-organization'

describe('Create Pet (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to create a pet', async () => {
    const { token } = await createAndAuthenticateOrganization(app)

    const response = await request(app.server)
      .post('/pets')
      .set('Authorization', `Bearer ${token}`)
      .send({
        age: 1,
        name: 'Dog',
        size: 'small',
        city: 'São Paulo',
        about: 'A small dog',
        energy_level: 'high',
        independence_level: 'low',
        environment: 'small environments',
        adoption_requirements: ['An adoption requirement'],
      })

    expect(response.statusCode).toEqual(201)
  })
})
