import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RatingCreateManyDoctorInputSchema } from './RatingCreateManyDoctorInputSchema'

export const RatingCreateManyDoctorInputEnvelopeSchema: z.ZodType<Prisma.RatingCreateManyDoctorInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => RatingCreateManyDoctorInputSchema),
				z.lazy(() => RatingCreateManyDoctorInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict()

export default RatingCreateManyDoctorInputEnvelopeSchema
