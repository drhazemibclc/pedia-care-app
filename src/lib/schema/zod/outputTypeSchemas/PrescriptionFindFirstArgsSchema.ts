import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PrescriptionOrderByWithRelationInputSchema } from '../inputTypeSchemas/PrescriptionOrderByWithRelationInputSchema'
import { PrescriptionScalarFieldEnumSchema } from '../inputTypeSchemas/PrescriptionScalarFieldEnumSchema'
import { PrescriptionWhereInputSchema } from '../inputTypeSchemas/PrescriptionWhereInputSchema'
import { PrescriptionWhereUniqueInputSchema } from '../inputTypeSchemas/PrescriptionWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const PrescriptionFindFirstArgsSchema: z.ZodType<
	Omit<Prisma.PrescriptionFindFirstArgs, 'select' | 'include'>
> = z
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
		distinct: z
			.union([PrescriptionScalarFieldEnumSchema, PrescriptionScalarFieldEnumSchema.array()])
			.optional(),
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default PrescriptionFindFirstArgsSchema
