import z from 'zod'
import { FastifyReply, FastifyRequest } from 'fastify'
import { makeCreateOrganizationUseCase } from '@/use-cases/factories/make-create-organization-use-case'

export async function create(req: FastifyRequest, reply: FastifyReply) {
  const createOrgBodySchema = z.object({
    cep: z.string(),
    address: z.string(),
    whatsapp: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
    responsible_name: z.string(),
  })

  const { responsible_name, email, cep, address, whatsapp, password } =
    createOrgBodySchema.parse(req.body)

  const createOrganizationUseCase = makeCreateOrganizationUseCase()

  await createOrganizationUseCase.execute({
    cep,
    email,
    address,
    whatsapp,
    password,
    responsible_name,
  })

  return reply.status(201).send()
}
