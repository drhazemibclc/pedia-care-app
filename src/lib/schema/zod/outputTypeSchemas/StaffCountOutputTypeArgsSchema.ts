import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { StaffCountOutputTypeSelectSchema } from './StaffCountOutputTypeSelectSchema'

export const StaffCountOutputTypeArgsSchema: z.ZodType<Prisma.StaffCountOutputTypeDefaultArgs> = z
	.object({
		select: z.lazy(() => StaffCountOutputTypeSelectSchema).nullish(),
	})
	.strict()

export default StaffCountOutputTypeSelectSchema
