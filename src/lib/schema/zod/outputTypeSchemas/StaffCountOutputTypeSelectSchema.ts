import type { Prisma } from '@prisma/client'
import { z } from 'zod'

export const StaffCountOutputTypeSelectSchema: z.ZodType<Prisma.StaffCountOutputTypeSelect> = z
	.object({
		Vaccination: z.boolean().optional(),
	})
	.strict()

export default StaffCountOutputTypeSelectSchema
