import z from 'zod'
import { FastifyReply, FastifyRequest } from 'fastify'
import { makeFindPetUseCase } from '@/use-cases/factories/make-find-pet-use-case'

export async function find(req: FastifyRequest, reply: FastifyReply) {
  const findPetParamsSchema = z.object({
    id: z.string(),
  })

  const { id } = findPetParamsSchema.parse(req.params)

  const findPetUseCase = makeFindPetUseCase()

  const { pet } = await findPetUseCase.execute({
    id,
  })

  return reply.status(200).send(pet)
}
