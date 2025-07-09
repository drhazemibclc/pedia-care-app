import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientUncheckedUpdateInputSchema } from '../inputTypeSchemas/PatientUncheckedUpdateInputSchema'
import { PatientUpdateInputSchema } from '../inputTypeSchemas/PatientUpdateInputSchema'
import { PatientWhereUniqueInputSchema } from '../inputTypeSchemas/PatientWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const PatientUpdateArgsSchema: z.ZodType<
	Omit<Prisma.PatientUpdateArgs, 'select' | 'include'>
> = z
	.object({
		data: z.union([PatientUpdateInputSchema, PatientUncheckedUpdateInputSchema]),
		where: PatientWhereUniqueInputSchema,
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default PatientUpdateArgsSchema
