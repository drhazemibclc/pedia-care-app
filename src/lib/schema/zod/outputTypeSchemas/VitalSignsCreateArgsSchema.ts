import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'
import { VitalSignsCreateInputSchema } from '../inputTypeSchemas/VitalSignsCreateInputSchema'
import { VitalSignsUncheckedCreateInputSchema } from '../inputTypeSchemas/VitalSignsUncheckedCreateInputSchema'

export const VitalSignsCreateArgsSchema: z.ZodType<
	Omit<Prisma.VitalSignsCreateArgs, 'select' | 'include'>
> = z
	.object({
		data: z.union([VitalSignsCreateInputSchema, VitalSignsUncheckedCreateInputSchema]),
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default VitalSignsCreateArgsSchema
