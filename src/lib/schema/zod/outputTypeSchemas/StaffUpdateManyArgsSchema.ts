import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { StaffUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/StaffUncheckedUpdateManyInputSchema'
import { StaffUpdateManyMutationInputSchema } from '../inputTypeSchemas/StaffUpdateManyMutationInputSchema'
import { StaffWhereInputSchema } from '../inputTypeSchemas/StaffWhereInputSchema'

export const StaffUpdateManyArgsSchema: z.ZodType<Prisma.StaffUpdateManyArgs> = z
	.object({
		data: z.union([StaffUpdateManyMutationInputSchema, StaffUncheckedUpdateManyInputSchema]),
		where: StaffWhereInputSchema.optional(),
		limit: z.number().optional(),
	})
	.strict()

export default StaffUpdateManyArgsSchema
