import type { Prisma } from '@prisma/client'
import { z } from 'zod'

export const PatientCountOutputTypeSelectSchema: z.ZodType<Prisma.PatientCountOutputTypeSelect> = z
	.object({
		appointments: z.boolean().optional(),
		medical: z.boolean().optional(),
		payments: z.boolean().optional(),
		ratings: z.boolean().optional(),
		Prescription: z.boolean().optional(),
		Vaccination: z.boolean().optional(),
	})
	.strict()

export default PatientCountOutputTypeSelectSchema
