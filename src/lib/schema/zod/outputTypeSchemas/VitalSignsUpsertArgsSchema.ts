import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'
import { VitalSignsCreateInputSchema } from '../inputTypeSchemas/VitalSignsCreateInputSchema'
import { VitalSignsUncheckedCreateInputSchema } from '../inputTypeSchemas/VitalSignsUncheckedCreateInputSchema'
import { VitalSignsUncheckedUpdateInputSchema } from '../inputTypeSchemas/VitalSignsUncheckedUpdateInputSchema'
import { VitalSignsUpdateInputSchema } from '../inputTypeSchemas/VitalSignsUpdateInputSchema'
import { VitalSignsWhereUniqueInputSchema } from '../inputTypeSchemas/VitalSignsWhereUniqueInputSchema'

export const VitalSignsUpsertArgsSchema: z.ZodType<
	Omit<Prisma.VitalSignsUpsertArgs, 'select' | 'include'>
> = z
	.object({
		where: VitalSignsWhereUniqueInputSchema,
		create: z.union([VitalSignsCreateInputSchema, VitalSignsUncheckedCreateInputSchema]),
		update: z.union([VitalSignsUpdateInputSchema, VitalSignsUncheckedUpdateInputSchema]),
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default VitalSignsUpsertArgsSchema
