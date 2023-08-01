import z from 'zod'
import { FastifyReply, FastifyRequest } from 'fastify'
import { makeCreatePetUseCase } from '@/use-cases/factories/make-create-pet-use-case'

export async function create(req: FastifyRequest, reply: FastifyReply) {
  const createPetBodySchema = z.object({
    age: z.number(),
    name: z.string(),
    size: z.string(),
    about: z.string(),
    environment: z.string(),
    energy_level: z.string(),
    independence_level: z.string(),
  })

  const {
    age,
    name,
    size,
    about,
    environment,
    energy_level,
    independence_level,
  } = createPetBodySchema.parse(req.body)

  const createPetUseCase = makeCreatePetUseCase()

  await createPetUseCase.execute({
    age,
    size,
    name,
    about,
    environment,
    energy_level,
    independence_level,
    organization_id: req.user.sign.sub,
  })

  return reply.status(201).send()
}
