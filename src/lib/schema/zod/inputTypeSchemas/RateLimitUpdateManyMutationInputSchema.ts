import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { NullableBigIntFieldUpdateOperationsInputSchema } from './NullableBigIntFieldUpdateOperationsInputSchema'
import { NullableIntFieldUpdateOperationsInputSchema } from './NullableIntFieldUpdateOperationsInputSchema'
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'

export const RateLimitUpdateManyMutationInputSchema: z.ZodType<Prisma.RateLimitUpdateManyMutationInput> =
	z
		.object({
			id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			key: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			count: z
				.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			lastRequest: z
				.union([z.bigint(), z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
		})
		.strict()

export default RateLimitUpdateManyMutationInputSchema
