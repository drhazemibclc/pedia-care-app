import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'
import { VitalSignsOrderByWithRelationInputSchema } from '../inputTypeSchemas/VitalSignsOrderByWithRelationInputSchema'
import { VitalSignsScalarFieldEnumSchema } from '../inputTypeSchemas/VitalSignsScalarFieldEnumSchema'
import { VitalSignsWhereInputSchema } from '../inputTypeSchemas/VitalSignsWhereInputSchema'
import { VitalSignsWhereUniqueInputSchema } from '../inputTypeSchemas/VitalSignsWhereUniqueInputSchema'

export const VitalSignsFindFirstArgsSchema: z.ZodType<
	Omit<Prisma.VitalSignsFindFirstArgs, 'select' | 'include'>
> = z
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
		distinct: z
			.union([VitalSignsScalarFieldEnumSchema, VitalSignsScalarFieldEnumSchema.array()])
			.optional(),
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default VitalSignsFindFirstArgsSchema
