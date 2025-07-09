import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PrescriptionCreateInputSchema } from '../inputTypeSchemas/PrescriptionCreateInputSchema'
import { PrescriptionUncheckedCreateInputSchema } from '../inputTypeSchemas/PrescriptionUncheckedCreateInputSchema'
import { PrescriptionUncheckedUpdateInputSchema } from '../inputTypeSchemas/PrescriptionUncheckedUpdateInputSchema'
import { PrescriptionUpdateInputSchema } from '../inputTypeSchemas/PrescriptionUpdateInputSchema'
import { PrescriptionWhereUniqueInputSchema } from '../inputTypeSchemas/PrescriptionWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const PrescriptionUpsertArgsSchema: z.ZodType<
	Omit<Prisma.PrescriptionUpsertArgs, 'select' | 'include'>
> = z
	.object({
		where: PrescriptionWhereUniqueInputSchema,
		create: z.union([PrescriptionCreateInputSchema, PrescriptionUncheckedCreateInputSchema]),
		update: z.union([PrescriptionUpdateInputSchema, PrescriptionUncheckedUpdateInputSchema]),
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default PrescriptionUpsertArgsSchema
