import { app } from '@/app'
import request from 'supertest'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'

describe('Refresh Token (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to refresh token', async () => {
    await request(app.server).post('/orgs').send({
      cep: '04848-515',
      password: '123456',
      email: 'org@email.com',
      whatsapp: '81 91234.5678',
      address: 'Avenida Paulista',
      responsible_name: 'Org Responsible',
    })

    const authResponse = await request(app.server).post('/sessions').send({
      password: '123456',
      email: 'org@email.com',
    })

    const cookies = authResponse.get('Set-Cookie')

    const response = await request(app.server)
      .patch('/token/refresh')
      .set('Cookie', cookies)
      .send()

    expect(response.statusCode).toEqual(200)
    expect(response.body).toEqual({
      token: expect.any(String),
    })
    expect(response.get('Set-Cookie')).toEqual([
      expect.stringContaining('refreshToken='),
    ])
  })
})
