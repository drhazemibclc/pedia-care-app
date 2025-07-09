import type { Prisma } from '@prisma/client'
import { z } from 'zod'

export const NullableBigIntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableBigIntFieldUpdateOperationsInput> =
	z
		.object({
			set: z.bigint().optional().nullable(),
			increment: z.bigint().optional(),
			decrement: z.bigint().optional(),
			multiply: z.bigint().optional(),
			divide: z.bigint().optional(),
		})
		.strict()

export default NullableBigIntFieldUpdateOperationsInputSchema
