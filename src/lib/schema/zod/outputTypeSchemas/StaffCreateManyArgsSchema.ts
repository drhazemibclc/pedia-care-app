import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { StaffCreateManyInputSchema } from '../inputTypeSchemas/StaffCreateManyInputSchema'

export const StaffCreateManyArgsSchema: z.ZodType<Prisma.StaffCreateManyArgs> = z
	.object({
		data: z.union([StaffCreateManyInputSchema, StaffCreateManyInputSchema.array()]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict()

export default StaffCreateManyArgsSchema
