import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PrescriptionWhereUniqueInputSchema } from '../inputTypeSchemas/PrescriptionWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const PrescriptionFindUniqueOrThrowArgsSchema: z.ZodType<
	Omit<Prisma.PrescriptionFindUniqueOrThrowArgs, 'select' | 'include'>
> = z
	.object({
		where: PrescriptionWhereUniqueInputSchema,
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default PrescriptionFindUniqueOrThrowArgsSchema
