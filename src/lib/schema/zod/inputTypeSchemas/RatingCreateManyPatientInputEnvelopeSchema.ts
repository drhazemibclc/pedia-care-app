import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RatingCreateManyPatientInputSchema } from './RatingCreateManyPatientInputSchema'

export const RatingCreateManyPatientInputEnvelopeSchema: z.ZodType<Prisma.RatingCreateManyPatientInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => RatingCreateManyPatientInputSchema),
				z.lazy(() => RatingCreateManyPatientInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict()

export default RatingCreateManyPatientInputEnvelopeSchema
