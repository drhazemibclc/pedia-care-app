import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DiagnosisCreateManyInputSchema } from '../inputTypeSchemas/DiagnosisCreateManyInputSchema'

export const DiagnosisCreateManyAndReturnArgsSchema: z.ZodType<Prisma.DiagnosisCreateManyAndReturnArgs> =
	z
		.object({
			data: z.union([DiagnosisCreateManyInputSchema, DiagnosisCreateManyInputSchema.array()]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict()

export default DiagnosisCreateManyAndReturnArgsSchema
