import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { StaffWhereInputSchema } from '../inputTypeSchemas/StaffWhereInputSchema'

export const StaffDeleteManyArgsSchema: z.ZodType<Prisma.StaffDeleteManyArgs> = z
	.object({
		where: StaffWhereInputSchema.optional(),
		limit: z.number().optional(),
	})
	.strict()

export default StaffDeleteManyArgsSchema
