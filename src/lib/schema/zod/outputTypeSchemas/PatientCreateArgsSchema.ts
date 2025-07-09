import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientCreateInputSchema } from '../inputTypeSchemas/PatientCreateInputSchema'
import { PatientUncheckedCreateInputSchema } from '../inputTypeSchemas/PatientUncheckedCreateInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const PatientCreateArgsSchema: z.ZodType<
	Omit<Prisma.PatientCreateArgs, 'select' | 'include'>
> = z
	.object({
		data: z.union([PatientCreateInputSchema, PatientUncheckedCreateInputSchema]),
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default PatientCreateArgsSchema
