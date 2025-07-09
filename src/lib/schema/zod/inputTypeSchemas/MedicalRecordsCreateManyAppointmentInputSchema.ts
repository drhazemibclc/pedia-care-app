import type { Prisma } from '@prisma/client'
import { z } from 'zod'

export const MedicalRecordsCreateManyAppointmentInputSchema: z.ZodType<Prisma.MedicalRecordsCreateManyAppointmentInput> =
	z
		.object({
			id: z.number().int().optional(),
			patientId: z.string(),
			doctorId: z.string(),
			treatmentPlan: z.string().optional().nullable(),
			prescriptions: z.string().optional().nullable(),
			labRequest: z.string().optional().nullable(),
			notes: z.string().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
		})
		.strict()

export default MedicalRecordsCreateManyAppointmentInputSchema
