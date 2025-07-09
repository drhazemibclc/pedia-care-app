import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'
import { VitalSignsUncheckedUpdateInputSchema } from '../inputTypeSchemas/VitalSignsUncheckedUpdateInputSchema'
import { VitalSignsUpdateInputSchema } from '../inputTypeSchemas/VitalSignsUpdateInputSchema'
import { VitalSignsWhereUniqueInputSchema } from '../inputTypeSchemas/VitalSignsWhereUniqueInputSchema'

export const VitalSignsUpdateArgsSchema: z.ZodType<
	Omit<Prisma.VitalSignsUpdateArgs, 'select' | 'include'>
> = z
	.object({
		data: z.union([VitalSignsUpdateInputSchema, VitalSignsUncheckedUpdateInputSchema]),
		where: VitalSignsWhereUniqueInputSchema,
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default VitalSignsUpdateArgsSchema
