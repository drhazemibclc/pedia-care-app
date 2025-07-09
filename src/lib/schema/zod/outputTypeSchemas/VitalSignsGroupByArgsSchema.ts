import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { VitalSignsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/VitalSignsOrderByWithAggregationInputSchema'
import { VitalSignsScalarFieldEnumSchema } from '../inputTypeSchemas/VitalSignsScalarFieldEnumSchema'
import { VitalSignsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/VitalSignsScalarWhereWithAggregatesInputSchema'
import { VitalSignsWhereInputSchema } from '../inputTypeSchemas/VitalSignsWhereInputSchema'

export const VitalSignsGroupByArgsSchema: z.ZodType<Prisma.VitalSignsGroupByArgs> = z
	.object({
		where: VitalSignsWhereInputSchema.optional(),
		orderBy: z
			.union([
				VitalSignsOrderByWithAggregationInputSchema.array(),
				VitalSignsOrderByWithAggregationInputSchema,
			])
			.optional(),
		by: VitalSignsScalarFieldEnumSchema.array(),
		having: VitalSignsScalarWhereWithAggregatesInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict()

export default VitalSignsGroupByArgsSchema
