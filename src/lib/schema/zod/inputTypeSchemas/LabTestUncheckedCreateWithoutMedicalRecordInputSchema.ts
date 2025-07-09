import type { Prisma } from '@prisma/client'
import { z } from 'zod'

export const LabTestUncheckedCreateWithoutMedicalRecordInputSchema: z.ZodType<Prisma.LabTestUncheckedCreateWithoutMedicalRecordInput> =
	z
		.object({
			id: z.number().int().optional(),
			testDate: z.coerce.date(),
			result: z.string(),
			status: z.string(),
			notes: z.string().optional().nullable(),
			serviceId: z.number().int(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
		})
		.strict()

export default LabTestUncheckedCreateWithoutMedicalRecordInputSchema
