import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { ServiceCategorySchema } from './ServiceCategorySchema'

export const NullableEnumServiceCategoryFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableEnumServiceCategoryFieldUpdateOperationsInput> =
	z
		.object({
			set: z
				.lazy(() => ServiceCategorySchema)
				.optional()
				.nullable(),
		})
		.strict()

export default NullableEnumServiceCategoryFieldUpdateOperationsInputSchema
