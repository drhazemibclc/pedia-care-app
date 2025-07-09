import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { MedicalRecordsCreateManyInputSchema } from '../inputTypeSchemas/MedicalRecordsCreateManyInputSchema'

export const MedicalRecordsCreateManyArgsSchema: z.ZodType<Prisma.MedicalRecordsCreateManyArgs> = z
	.object({
		data: z.union([
			MedicalRecordsCreateManyInputSchema,
			MedicalRecordsCreateManyInputSchema.array(),
		]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict()

export default MedicalRecordsCreateManyArgsSchema
