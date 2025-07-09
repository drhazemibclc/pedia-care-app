import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { JOBTYPESchema } from './JOBTYPESchema'
import { NestedEnumJOBTYPEFilterSchema } from './NestedEnumJOBTYPEFilterSchema'

export const EnumJOBTYPEFilterSchema: z.ZodType<Prisma.EnumJOBTYPEFilter> = z
	.object({
		equals: z.lazy(() => JOBTYPESchema).optional(),
		in: z
			.lazy(() => JOBTYPESchema)
			.array()
			.optional(),
		notIn: z
			.lazy(() => JOBTYPESchema)
			.array()
			.optional(),
		not: z
			.union([z.lazy(() => JOBTYPESchema), z.lazy(() => NestedEnumJOBTYPEFilterSchema)])
			.optional(),
	})
	.strict()

export default EnumJOBTYPEFilterSchema
