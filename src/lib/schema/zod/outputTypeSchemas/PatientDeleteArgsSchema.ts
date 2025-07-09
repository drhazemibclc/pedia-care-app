import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientWhereUniqueInputSchema } from '../inputTypeSchemas/PatientWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const PatientDeleteArgsSchema: z.ZodType<
	Omit<Prisma.PatientDeleteArgs, 'select' | 'include'>
> = z
	.object({
		where: PatientWhereUniqueInputSchema,
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default PatientDeleteArgsSchema
