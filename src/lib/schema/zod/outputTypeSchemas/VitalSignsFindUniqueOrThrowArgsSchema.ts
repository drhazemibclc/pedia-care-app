import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'
import { VitalSignsWhereUniqueInputSchema } from '../inputTypeSchemas/VitalSignsWhereUniqueInputSchema'

export const VitalSignsFindUniqueOrThrowArgsSchema: z.ZodType<
	Omit<Prisma.VitalSignsFindUniqueOrThrowArgs, 'select' | 'include'>
> = z
	.object({
		where: VitalSignsWhereUniqueInputSchema,
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default VitalSignsFindUniqueOrThrowArgsSchema
