import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientCreateManyUserInputSchema } from './PatientCreateManyUserInputSchema'

export const PatientCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.PatientCreateManyUserInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => PatientCreateManyUserInputSchema),
				z.lazy(() => PatientCreateManyUserInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict()

export default PatientCreateManyUserInputEnvelopeSchema
