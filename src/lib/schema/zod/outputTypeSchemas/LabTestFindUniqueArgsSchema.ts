import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { LabTestWhereUniqueInputSchema } from '../inputTypeSchemas/LabTestWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const LabTestFindUniqueArgsSchema: z.ZodType<
	Omit<Prisma.LabTestFindUniqueArgs, 'select' | 'include'>
> = z
	.object({
		where: LabTestWhereUniqueInputSchema,
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default LabTestFindUniqueArgsSchema
