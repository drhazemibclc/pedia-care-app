import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { MedicalRecordsCreateManyAppointmentInputSchema } from './MedicalRecordsCreateManyAppointmentInputSchema'

export const MedicalRecordsCreateManyAppointmentInputEnvelopeSchema: z.ZodType<Prisma.MedicalRecordsCreateManyAppointmentInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => MedicalRecordsCreateManyAppointmentInputSchema),
				z.lazy(() => MedicalRecordsCreateManyAppointmentInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict()

export default MedicalRecordsCreateManyAppointmentInputEnvelopeSchema
