import type { Prisma } from '@prisma/client'
import { z } from 'zod'

export const UserCountOutputTypeSelectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = z
	.object({
		sessions: z.boolean().optional(),
		accounts: z.boolean().optional(),
		Staff: z.boolean().optional(),
		Doctor: z.boolean().optional(),
		Patient: z.boolean().optional(),
	})
	.strict()

export default UserCountOutputTypeSelectSchema
