import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DoctorOrderByWithRelationInputSchema } from '../inputTypeSchemas/DoctorOrderByWithRelationInputSchema'
import { DoctorScalarFieldEnumSchema } from '../inputTypeSchemas/DoctorScalarFieldEnumSchema'
import { DoctorWhereInputSchema } from '../inputTypeSchemas/DoctorWhereInputSchema'
import { DoctorWhereUniqueInputSchema } from '../inputTypeSchemas/DoctorWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const DoctorFindFirstArgsSchema: z.ZodType<
	Omit<Prisma.DoctorFindFirstArgs, 'select' | 'include'>
> = z
	.object({
		where: DoctorWhereInputSchema.optional(),
		orderBy: z
			.union([DoctorOrderByWithRelationInputSchema.array(), DoctorOrderByWithRelationInputSchema])
			.optional(),
		cursor: DoctorWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z
			.union([DoctorScalarFieldEnumSchema, DoctorScalarFieldEnumSchema.array()])
			.optional(),
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default DoctorFindFirstArgsSchema
