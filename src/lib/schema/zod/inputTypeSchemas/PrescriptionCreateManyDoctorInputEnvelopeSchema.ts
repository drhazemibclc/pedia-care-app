import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PrescriptionCreateManyDoctorInputSchema } from './PrescriptionCreateManyDoctorInputSchema'

export const PrescriptionCreateManyDoctorInputEnvelopeSchema: z.ZodType<Prisma.PrescriptionCreateManyDoctorInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => PrescriptionCreateManyDoctorInputSchema),
				z.lazy(() => PrescriptionCreateManyDoctorInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict()

export default PrescriptionCreateManyDoctorInputEnvelopeSchema
