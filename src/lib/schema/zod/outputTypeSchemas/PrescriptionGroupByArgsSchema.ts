import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PrescriptionOrderByWithAggregationInputSchema } from '../inputTypeSchemas/PrescriptionOrderByWithAggregationInputSchema'
import { PrescriptionScalarFieldEnumSchema } from '../inputTypeSchemas/PrescriptionScalarFieldEnumSchema'
import { PrescriptionScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/PrescriptionScalarWhereWithAggregatesInputSchema'
import { PrescriptionWhereInputSchema } from '../inputTypeSchemas/PrescriptionWhereInputSchema'

export const PrescriptionGroupByArgsSchema: z.ZodType<Prisma.PrescriptionGroupByArgs> = z
	.object({
		where: PrescriptionWhereInputSchema.optional(),
		orderBy: z
			.union([
				PrescriptionOrderByWithAggregationInputSchema.array(),
				PrescriptionOrderByWithAggregationInputSchema,
			])
			.optional(),
		by: PrescriptionScalarFieldEnumSchema.array(),
		having: PrescriptionScalarWhereWithAggregatesInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict()

export default PrescriptionGroupByArgsSchema
