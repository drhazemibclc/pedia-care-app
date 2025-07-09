import type { Prisma } from '@prisma/client'
import { z } from 'zod'

export const MedicalRecordsCountOutputTypeSelectSchema: z.ZodType<Prisma.MedicalRecordsCountOutputTypeSelect> =
	z
		.object({
			labTest: z.boolean().optional(),
			vitalSigns: z.boolean().optional(),
			diagnosis: z.boolean().optional(),
			Prescription: z.boolean().optional(),
		})
		.strict()

export default MedicalRecordsCountOutputTypeSelectSchema
