import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { StaffCreateManyUserInputSchema } from './StaffCreateManyUserInputSchema'

export const StaffCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.StaffCreateManyUserInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => StaffCreateManyUserInputSchema),
				z.lazy(() => StaffCreateManyUserInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict()

export default StaffCreateManyUserInputEnvelopeSchema
