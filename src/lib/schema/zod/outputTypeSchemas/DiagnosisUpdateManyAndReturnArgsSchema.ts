import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DiagnosisUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/DiagnosisUncheckedUpdateManyInputSchema'
import { DiagnosisUpdateManyMutationInputSchema } from '../inputTypeSchemas/DiagnosisUpdateManyMutationInputSchema'
import { DiagnosisWhereInputSchema } from '../inputTypeSchemas/DiagnosisWhereInputSchema'

export const DiagnosisUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.DiagnosisUpdateManyAndReturnArgs> =
	z
		.object({
			data: z.union([
				DiagnosisUpdateManyMutationInputSchema,
				DiagnosisUncheckedUpdateManyInputSchema,
			]),
			where: DiagnosisWhereInputSchema.optional(),
			limit: z.number().optional(),
		})
		.strict()

export default DiagnosisUpdateManyAndReturnArgsSchema
