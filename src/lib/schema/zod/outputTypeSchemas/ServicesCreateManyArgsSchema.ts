import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { ServicesCreateManyInputSchema } from '../inputTypeSchemas/ServicesCreateManyInputSchema'

export const ServicesCreateManyArgsSchema: z.ZodType<Prisma.ServicesCreateManyArgs> = z
	.object({
		data: z.union([ServicesCreateManyInputSchema, ServicesCreateManyInputSchema.array()]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict()

export default ServicesCreateManyArgsSchema
