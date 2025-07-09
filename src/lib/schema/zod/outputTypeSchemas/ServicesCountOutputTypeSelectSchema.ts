import type { Prisma } from '@prisma/client'
import { z } from 'zod'

export const ServicesCountOutputTypeSelectSchema: z.ZodType<Prisma.ServicesCountOutputTypeSelect> =
	z
		.object({
			bills: z.boolean().optional(),
			appointments: z.boolean().optional(),
		})
		.strict()

export default ServicesCountOutputTypeSelectSchema
