import z from 'zod'
import { FastifyReply, FastifyRequest } from 'fastify'
import { makeListPetsUseCase } from '@/use-cases/factories/make-list-pets-use-case'

export async function list(req: FastifyRequest, reply: FastifyReply) {
  const listPetsQueryParamsSchema = z.object({
    city: z.string().nonempty(),
    size: z.string().optional(),
    age: z.coerce.number().optional(),
    environment: z.string().optional(),
    energy_level: z.string().optional(),
    independence_level: z.string().optional(),
  })

  const { city, age, energy_level, environment, independence_level, size } =
    listPetsQueryParamsSchema.parse(req.query)

  const listPetsUseCase = makeListPetsUseCase()

  const { pets } = await listPetsUseCase.execute({
    age,
    city,
    size,
    environment,
    energy_level,
    independence_level,
  })

  return reply.status(200).send(pets)
}
