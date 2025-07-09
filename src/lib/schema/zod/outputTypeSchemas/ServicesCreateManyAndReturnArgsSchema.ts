import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { ServicesCreateManyInputSchema } from '../inputTypeSchemas/ServicesCreateManyInputSchema'

export const ServicesCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ServicesCreateManyAndReturnArgs> =
	z
		.object({
			data: z.union([ServicesCreateManyInputSchema, ServicesCreateManyInputSchema.array()]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict()

export default ServicesCreateManyAndReturnArgsSchema
