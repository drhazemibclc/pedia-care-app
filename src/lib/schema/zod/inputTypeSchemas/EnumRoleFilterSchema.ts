import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { NestedEnumRoleFilterSchema } from './NestedEnumRoleFilterSchema'
import { RoleSchema } from './RoleSchema'

export const EnumRoleFilterSchema: z.ZodType<Prisma.EnumRoleFilter> = z
	.object({
		equals: z.lazy(() => RoleSchema).optional(),
		in: z
			.lazy(() => RoleSchema)
			.array()
			.optional(),
		notIn: z
			.lazy(() => RoleSchema)
			.array()
			.optional(),
		not: z.union([z.lazy(() => RoleSchema), z.lazy(() => NestedEnumRoleFilterSchema)]).optional(),
	})
	.strict()

export default EnumRoleFilterSchema
