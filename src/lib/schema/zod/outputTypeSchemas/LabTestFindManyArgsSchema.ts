import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { LabTestOrderByWithRelationInputSchema } from '../inputTypeSchemas/LabTestOrderByWithRelationInputSchema'
import { LabTestScalarFieldEnumSchema } from '../inputTypeSchemas/LabTestScalarFieldEnumSchema'
import { LabTestWhereInputSchema } from '../inputTypeSchemas/LabTestWhereInputSchema'
import { LabTestWhereUniqueInputSchema } from '../inputTypeSchemas/LabTestWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const LabTestFindManyArgsSchema: z.ZodType<
	Omit<Prisma.LabTestFindManyArgs, 'select' | 'include'>
> = z
	.object({
		where: LabTestWhereInputSchema.optional(),
		orderBy: z
			.union([LabTestOrderByWithRelationInputSchema.array(), LabTestOrderByWithRelationInputSchema])
			.optional(),
		cursor: LabTestWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z
			.union([LabTestScalarFieldEnumSchema, LabTestScalarFieldEnumSchema.array()])
			.optional(),
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default LabTestFindManyArgsSchema
