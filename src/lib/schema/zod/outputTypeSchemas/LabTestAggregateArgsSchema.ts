import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { LabTestOrderByWithRelationInputSchema } from '../inputTypeSchemas/LabTestOrderByWithRelationInputSchema'
import { LabTestWhereInputSchema } from '../inputTypeSchemas/LabTestWhereInputSchema'
import { LabTestWhereUniqueInputSchema } from '../inputTypeSchemas/LabTestWhereUniqueInputSchema'

export const LabTestAggregateArgsSchema: z.ZodType<Prisma.LabTestAggregateArgs> = z
	.object({
		where: LabTestWhereInputSchema.optional(),
		orderBy: z
			.union([LabTestOrderByWithRelationInputSchema.array(), LabTestOrderByWithRelationInputSchema])
			.optional(),
		cursor: LabTestWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict()

export default LabTestAggregateArgsSchema
