import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { WorkingDaysCreateManyDoctorInputSchema } from './WorkingDaysCreateManyDoctorInputSchema'

export const WorkingDaysCreateManyDoctorInputEnvelopeSchema: z.ZodType<Prisma.WorkingDaysCreateManyDoctorInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => WorkingDaysCreateManyDoctorInputSchema),
				z.lazy(() => WorkingDaysCreateManyDoctorInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict()

export default WorkingDaysCreateManyDoctorInputEnvelopeSchema
