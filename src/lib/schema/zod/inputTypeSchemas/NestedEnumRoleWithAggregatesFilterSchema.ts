import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { NestedEnumRoleFilterSchema } from './NestedEnumRoleFilterSchema'
import { NestedIntFilterSchema } from './NestedIntFilterSchema'
import { RoleSchema } from './RoleSchema'

export const NestedEnumRoleWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumRoleWithAggregatesFilter> =
	z
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
			not: z
				.union([z.lazy(() => RoleSchema), z.lazy(() => NestedEnumRoleWithAggregatesFilterSchema)])
				.optional(),
			_count: z.lazy(() => NestedIntFilterSchema).optional(),
			_min: z.lazy(() => NestedEnumRoleFilterSchema).optional(),
			_max: z.lazy(() => NestedEnumRoleFilterSchema).optional(),
		})
		.strict()

export default NestedEnumRoleWithAggregatesFilterSchema
