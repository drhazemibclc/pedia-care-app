import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { VitalSignsOrderByWithRelationInputSchema } from '../inputTypeSchemas/VitalSignsOrderByWithRelationInputSchema'
import { VitalSignsWhereInputSchema } from '../inputTypeSchemas/VitalSignsWhereInputSchema'
import { VitalSignsWhereUniqueInputSchema } from '../inputTypeSchemas/VitalSignsWhereUniqueInputSchema'

export const VitalSignsAggregateArgsSchema: z.ZodType<Prisma.VitalSignsAggregateArgs> = z
	.object({
		where: VitalSignsWhereInputSchema.optional(),
		orderBy: z
			.union([
				VitalSignsOrderByWithRelationInputSchema.array(),
				VitalSignsOrderByWithRelationInputSchema,
			])
			.optional(),
		cursor: VitalSignsWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict()

export default VitalSignsAggregateArgsSchema
