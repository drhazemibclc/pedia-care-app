import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PrescriptionOrderByWithRelationInputSchema } from '../inputTypeSchemas/PrescriptionOrderByWithRelationInputSchema'
import { PrescriptionWhereInputSchema } from '../inputTypeSchemas/PrescriptionWhereInputSchema'
import { PrescriptionWhereUniqueInputSchema } from '../inputTypeSchemas/PrescriptionWhereUniqueInputSchema'

export const PrescriptionAggregateArgsSchema: z.ZodType<Prisma.PrescriptionAggregateArgs> = z
	.object({
		where: PrescriptionWhereInputSchema.optional(),
		orderBy: z
			.union([
				PrescriptionOrderByWithRelationInputSchema.array(),
				PrescriptionOrderByWithRelationInputSchema,
			])
			.optional(),
		cursor: PrescriptionWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict()

export default PrescriptionAggregateArgsSchema
