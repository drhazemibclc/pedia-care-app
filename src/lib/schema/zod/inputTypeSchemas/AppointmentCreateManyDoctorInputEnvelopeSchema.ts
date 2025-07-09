import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentCreateManyDoctorInputSchema } from './AppointmentCreateManyDoctorInputSchema'

export const AppointmentCreateManyDoctorInputEnvelopeSchema: z.ZodType<Prisma.AppointmentCreateManyDoctorInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => AppointmentCreateManyDoctorInputSchema),
				z.lazy(() => AppointmentCreateManyDoctorInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict()

export default AppointmentCreateManyDoctorInputEnvelopeSchema
