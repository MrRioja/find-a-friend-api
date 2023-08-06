import { FastifyInstance } from 'fastify'

import { list } from './list'
import { find } from './find'
import { create } from './create'
import { verifyJWT } from '@/http/middlewares/verify-jwt'

export async function petsRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJWT)

  app.post('/pets', create)
  app.get('/pets', list)
  app.get('/pets/:id', find)
}
