import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { LabTestOrderByWithAggregationInputSchema } from '../inputTypeSchemas/LabTestOrderByWithAggregationInputSchema'
import { LabTestScalarFieldEnumSchema } from '../inputTypeSchemas/LabTestScalarFieldEnumSchema'
import { LabTestScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/LabTestScalarWhereWithAggregatesInputSchema'
import { LabTestWhereInputSchema } from '../inputTypeSchemas/LabTestWhereInputSchema'

export const LabTestGroupByArgsSchema: z.ZodType<Prisma.LabTestGroupByArgs> = z
	.object({
		where: LabTestWhereInputSchema.optional(),
		orderBy: z
			.union([
				LabTestOrderByWithAggregationInputSchema.array(),
				LabTestOrderByWithAggregationInputSchema,
			])
			.optional(),
		by: LabTestScalarFieldEnumSchema.array(),
		having: LabTestScalarWhereWithAggregatesInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict()

export default LabTestGroupByArgsSchema
