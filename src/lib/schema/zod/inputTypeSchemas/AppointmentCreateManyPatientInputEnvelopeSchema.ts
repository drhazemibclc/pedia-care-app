import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentCreateManyPatientInputSchema } from './AppointmentCreateManyPatientInputSchema'

export const AppointmentCreateManyPatientInputEnvelopeSchema: z.ZodType<Prisma.AppointmentCreateManyPatientInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => AppointmentCreateManyPatientInputSchema),
				z.lazy(() => AppointmentCreateManyPatientInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict()

export default AppointmentCreateManyPatientInputEnvelopeSchema
