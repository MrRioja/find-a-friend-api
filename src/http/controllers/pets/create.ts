import z from 'zod'
import { FastifyReply, FastifyRequest } from 'fastify'
import { makeCreatePetUseCase } from '@/use-cases/factories/make-create-pet-use-case'

export async function create(req: FastifyRequest, reply: FastifyReply) {
  const createPetBodySchema = z.object({
    age: z.number(),
    name: z.string(),
    city: z.string(),
    size: z.string(),
    about: z.string(),
    environment: z.string(),
    energy_level: z.string(),
    independence_level: z.string(),
    adoption_requirements: z.array(z.string()).optional(),
  })

  const {
    age,
    name,
    size,
    city,
    about,
    environment,
    energy_level,
    independence_level,
    adoption_requirements,
  } = createPetBodySchema.parse(req.body)

  const createPetUseCase = makeCreatePetUseCase()

  await createPetUseCase.execute({
    age,
    size,
    name,
    city,
    about,
    environment,
    energy_level,
    independence_level,
    adoption_requirements,
    organization_id: req.user.sign.sub,
  })

  return reply.status(201).send()
}
