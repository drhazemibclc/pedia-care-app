import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientCreateManyInputSchema } from '../inputTypeSchemas/PatientCreateManyInputSchema'

export const PatientCreateManyAndReturnArgsSchema: z.ZodType<Prisma.PatientCreateManyAndReturnArgs> =
	z
		.object({
			data: z.union([PatientCreateManyInputSchema, PatientCreateManyInputSchema.array()]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict()

export default PatientCreateManyAndReturnArgsSchema
