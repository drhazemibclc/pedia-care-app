import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { VitalSignsCreateManyMedicalInputSchema } from './VitalSignsCreateManyMedicalInputSchema'

export const VitalSignsCreateManyMedicalInputEnvelopeSchema: z.ZodType<Prisma.VitalSignsCreateManyMedicalInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => VitalSignsCreateManyMedicalInputSchema),
				z.lazy(() => VitalSignsCreateManyMedicalInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict()

export default VitalSignsCreateManyMedicalInputEnvelopeSchema
