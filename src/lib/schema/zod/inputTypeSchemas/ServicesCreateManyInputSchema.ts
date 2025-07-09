import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { ServiceCategorySchema } from './ServiceCategorySchema'

export const ServicesCreateManyInputSchema: z.ZodType<Prisma.ServicesCreateManyInput> = z
	.object({
		id: z.number().int().optional(),
		serviceName: z.string(),
		description: z.string(),
		price: z.number(),
		category: z
			.lazy(() => ServiceCategorySchema)
			.optional()
			.nullable(),
		duration: z.number().int().optional().nullable(),
		isAvailable: z.boolean().optional(),
		createdAt: z.coerce.date().optional(),
		updatedAt: z.coerce.date().optional(),
	})
	.strict()

export default ServicesCreateManyInputSchema
