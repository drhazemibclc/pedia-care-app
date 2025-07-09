import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PrescriptionUncheckedUpdateInputSchema } from '../inputTypeSchemas/PrescriptionUncheckedUpdateInputSchema'
import { PrescriptionUpdateInputSchema } from '../inputTypeSchemas/PrescriptionUpdateInputSchema'
import { PrescriptionWhereUniqueInputSchema } from '../inputTypeSchemas/PrescriptionWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const PrescriptionUpdateArgsSchema: z.ZodType<
	Omit<Prisma.PrescriptionUpdateArgs, 'select' | 'include'>
> = z
	.object({
		data: z.union([PrescriptionUpdateInputSchema, PrescriptionUncheckedUpdateInputSchema]),
		where: PrescriptionWhereUniqueInputSchema,
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default PrescriptionUpdateArgsSchema
