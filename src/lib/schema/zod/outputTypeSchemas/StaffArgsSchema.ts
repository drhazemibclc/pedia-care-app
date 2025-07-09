import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { StaffIncludeSchema } from '../inputTypeSchemas/StaffIncludeSchema'
import { StaffSelectSchema } from '../inputTypeSchemas/StaffSelectSchema'

export const StaffArgsSchema: z.ZodType<Prisma.StaffDefaultArgs> = z
	.object({
		select: z.lazy(() => StaffSelectSchema).optional(),
		include: z.lazy(() => StaffIncludeSchema).optional(),
	})
	.strict()

export default StaffArgsSchema
