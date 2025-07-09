import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientOrderByWithRelationInputSchema } from '../inputTypeSchemas/PatientOrderByWithRelationInputSchema'
import { PatientWhereInputSchema } from '../inputTypeSchemas/PatientWhereInputSchema'
import { PatientWhereUniqueInputSchema } from '../inputTypeSchemas/PatientWhereUniqueInputSchema'

export const PatientAggregateArgsSchema: z.ZodType<Prisma.PatientAggregateArgs> = z
	.object({
		where: PatientWhereInputSchema.optional(),
		orderBy: z
			.union([PatientOrderByWithRelationInputSchema.array(), PatientOrderByWithRelationInputSchema])
			.optional(),
		cursor: PatientWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict()

export default PatientAggregateArgsSchema
