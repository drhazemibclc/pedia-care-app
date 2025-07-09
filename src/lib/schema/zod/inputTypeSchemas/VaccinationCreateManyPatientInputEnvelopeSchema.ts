import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { VaccinationCreateManyPatientInputSchema } from './VaccinationCreateManyPatientInputSchema'

export const VaccinationCreateManyPatientInputEnvelopeSchema: z.ZodType<Prisma.VaccinationCreateManyPatientInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => VaccinationCreateManyPatientInputSchema),
				z.lazy(() => VaccinationCreateManyPatientInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict()

export default VaccinationCreateManyPatientInputEnvelopeSchema
