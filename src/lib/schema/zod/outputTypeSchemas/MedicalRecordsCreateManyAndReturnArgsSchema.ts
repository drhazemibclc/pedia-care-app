import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { MedicalRecordsCreateManyInputSchema } from '../inputTypeSchemas/MedicalRecordsCreateManyInputSchema'

export const MedicalRecordsCreateManyAndReturnArgsSchema: z.ZodType<Prisma.MedicalRecordsCreateManyAndReturnArgs> =
	z
		.object({
			data: z.union([
				MedicalRecordsCreateManyInputSchema,
				MedicalRecordsCreateManyInputSchema.array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict()

export default MedicalRecordsCreateManyAndReturnArgsSchema
