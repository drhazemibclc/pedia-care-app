import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DoctorCreateManyUserInputSchema } from './DoctorCreateManyUserInputSchema'

export const DoctorCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.DoctorCreateManyUserInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => DoctorCreateManyUserInputSchema),
				z.lazy(() => DoctorCreateManyUserInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict()

export default DoctorCreateManyUserInputEnvelopeSchema
