import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'
import { StaffCreateInputSchema } from '../inputTypeSchemas/StaffCreateInputSchema'
import { StaffUncheckedCreateInputSchema } from '../inputTypeSchemas/StaffUncheckedCreateInputSchema'
import { StaffUncheckedUpdateInputSchema } from '../inputTypeSchemas/StaffUncheckedUpdateInputSchema'
import { StaffUpdateInputSchema } from '../inputTypeSchemas/StaffUpdateInputSchema'
import { StaffWhereUniqueInputSchema } from '../inputTypeSchemas/StaffWhereUniqueInputSchema'

export const StaffUpsertArgsSchema: z.ZodType<Omit<Prisma.StaffUpsertArgs, 'select' | 'include'>> =
	z
		.object({
			where: StaffWhereUniqueInputSchema,
			create: z.union([StaffCreateInputSchema, StaffUncheckedCreateInputSchema]),
			update: z.union([StaffUpdateInputSchema, StaffUncheckedUpdateInputSchema]),
			relationLoadStrategy: RelationLoadStrategySchema.optional(),
		})
		.strict()

export default StaffUpsertArgsSchema
