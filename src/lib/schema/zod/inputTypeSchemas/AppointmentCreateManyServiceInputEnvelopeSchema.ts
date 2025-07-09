import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentCreateManyServiceInputSchema } from './AppointmentCreateManyServiceInputSchema'

export const AppointmentCreateManyServiceInputEnvelopeSchema: z.ZodType<Prisma.AppointmentCreateManyServiceInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => AppointmentCreateManyServiceInputSchema),
				z.lazy(() => AppointmentCreateManyServiceInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict()

export default AppointmentCreateManyServiceInputEnvelopeSchema
