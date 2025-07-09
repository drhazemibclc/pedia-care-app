import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { LabTestWhereUniqueInputSchema } from '../inputTypeSchemas/LabTestWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const LabTestFindUniqueOrThrowArgsSchema: z.ZodType<
	Omit<Prisma.LabTestFindUniqueOrThrowArgs, 'select' | 'include'>
> = z
	.object({
		where: LabTestWhereUniqueInputSchema,
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default LabTestFindUniqueOrThrowArgsSchema
