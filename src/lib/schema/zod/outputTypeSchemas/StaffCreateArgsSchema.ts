import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'
import { StaffCreateInputSchema } from '../inputTypeSchemas/StaffCreateInputSchema'
import { StaffUncheckedCreateInputSchema } from '../inputTypeSchemas/StaffUncheckedCreateInputSchema'

export const StaffCreateArgsSchema: z.ZodType<Omit<Prisma.StaffCreateArgs, 'select' | 'include'>> =
	z
		.object({
			data: z.union([StaffCreateInputSchema, StaffUncheckedCreateInputSchema]),
			relationLoadStrategy: RelationLoadStrategySchema.optional(),
		})
		.strict()

export default StaffCreateArgsSchema
