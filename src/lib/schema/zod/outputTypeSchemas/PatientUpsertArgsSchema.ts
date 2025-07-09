import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientCreateInputSchema } from '../inputTypeSchemas/PatientCreateInputSchema'
import { PatientUncheckedCreateInputSchema } from '../inputTypeSchemas/PatientUncheckedCreateInputSchema'
import { PatientUncheckedUpdateInputSchema } from '../inputTypeSchemas/PatientUncheckedUpdateInputSchema'
import { PatientUpdateInputSchema } from '../inputTypeSchemas/PatientUpdateInputSchema'
import { PatientWhereUniqueInputSchema } from '../inputTypeSchemas/PatientWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const PatientUpsertArgsSchema: z.ZodType<
	Omit<Prisma.PatientUpsertArgs, 'select' | 'include'>
> = z
	.object({
		where: PatientWhereUniqueInputSchema,
		create: z.union([PatientCreateInputSchema, PatientUncheckedCreateInputSchema]),
		update: z.union([PatientUpdateInputSchema, PatientUncheckedUpdateInputSchema]),
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default PatientUpsertArgsSchema
