import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'
import { StaffOrderByWithRelationInputSchema } from '../inputTypeSchemas/StaffOrderByWithRelationInputSchema'
import { StaffScalarFieldEnumSchema } from '../inputTypeSchemas/StaffScalarFieldEnumSchema'
import { StaffWhereInputSchema } from '../inputTypeSchemas/StaffWhereInputSchema'
import { StaffWhereUniqueInputSchema } from '../inputTypeSchemas/StaffWhereUniqueInputSchema'

export const StaffFindManyArgsSchema: z.ZodType<
	Omit<Prisma.StaffFindManyArgs, 'select' | 'include'>
> = z
	.object({
		where: StaffWhereInputSchema.optional(),
		orderBy: z
			.union([StaffOrderByWithRelationInputSchema.array(), StaffOrderByWithRelationInputSchema])
			.optional(),
		cursor: StaffWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z.union([StaffScalarFieldEnumSchema, StaffScalarFieldEnumSchema.array()]).optional(),
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default StaffFindManyArgsSchema
