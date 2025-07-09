import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'
import { VerificationOrderByWithRelationInputSchema } from '../inputTypeSchemas/VerificationOrderByWithRelationInputSchema'
import { VerificationScalarFieldEnumSchema } from '../inputTypeSchemas/VerificationScalarFieldEnumSchema'
import { VerificationWhereInputSchema } from '../inputTypeSchemas/VerificationWhereInputSchema'
import { VerificationWhereUniqueInputSchema } from '../inputTypeSchemas/VerificationWhereUniqueInputSchema'

export const VerificationFindManyArgsSchema: z.ZodType<
	Omit<Prisma.VerificationFindManyArgs, 'select'>
> = z
	.object({
		where: VerificationWhereInputSchema.optional(),
		orderBy: z
			.union([
				VerificationOrderByWithRelationInputSchema.array(),
				VerificationOrderByWithRelationInputSchema,
			])
			.optional(),
		cursor: VerificationWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z
			.union([VerificationScalarFieldEnumSchema, VerificationScalarFieldEnumSchema.array()])
			.optional(),
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default VerificationFindManyArgsSchema
