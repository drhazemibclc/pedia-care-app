import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DiagnosisUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/DiagnosisUncheckedUpdateManyInputSchema'
import { DiagnosisUpdateManyMutationInputSchema } from '../inputTypeSchemas/DiagnosisUpdateManyMutationInputSchema'
import { DiagnosisWhereInputSchema } from '../inputTypeSchemas/DiagnosisWhereInputSchema'

export const DiagnosisUpdateManyArgsSchema: z.ZodType<Prisma.DiagnosisUpdateManyArgs> = z
	.object({
		data: z.union([
			DiagnosisUpdateManyMutationInputSchema,
			DiagnosisUncheckedUpdateManyInputSchema,
		]),
		where: DiagnosisWhereInputSchema.optional(),
		limit: z.number().optional(),
	})
	.strict()

export default DiagnosisUpdateManyArgsSchema
