import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'
import { VitalSignsWhereUniqueInputSchema } from '../inputTypeSchemas/VitalSignsWhereUniqueInputSchema'

export const VitalSignsFindUniqueArgsSchema: z.ZodType<
	Omit<Prisma.VitalSignsFindUniqueArgs, 'select' | 'include'>
> = z
	.object({
		where: VitalSignsWhereUniqueInputSchema,
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default VitalSignsFindUniqueArgsSchema
