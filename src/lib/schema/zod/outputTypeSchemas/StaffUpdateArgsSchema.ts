import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'
import { StaffUncheckedUpdateInputSchema } from '../inputTypeSchemas/StaffUncheckedUpdateInputSchema'
import { StaffUpdateInputSchema } from '../inputTypeSchemas/StaffUpdateInputSchema'
import { StaffWhereUniqueInputSchema } from '../inputTypeSchemas/StaffWhereUniqueInputSchema'

export const StaffUpdateArgsSchema: z.ZodType<Omit<Prisma.StaffUpdateArgs, 'select' | 'include'>> =
	z
		.object({
			data: z.union([StaffUpdateInputSchema, StaffUncheckedUpdateInputSchema]),
			where: StaffWhereUniqueInputSchema,
			relationLoadStrategy: RelationLoadStrategySchema.optional(),
		})
		.strict()

export default StaffUpdateArgsSchema
