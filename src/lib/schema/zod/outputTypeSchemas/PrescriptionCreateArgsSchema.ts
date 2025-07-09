import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PrescriptionCreateInputSchema } from '../inputTypeSchemas/PrescriptionCreateInputSchema'
import { PrescriptionUncheckedCreateInputSchema } from '../inputTypeSchemas/PrescriptionUncheckedCreateInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const PrescriptionCreateArgsSchema: z.ZodType<
	Omit<Prisma.PrescriptionCreateArgs, 'select' | 'include'>
> = z
	.object({
		data: z.union([PrescriptionCreateInputSchema, PrescriptionUncheckedCreateInputSchema]),
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default PrescriptionCreateArgsSchema
