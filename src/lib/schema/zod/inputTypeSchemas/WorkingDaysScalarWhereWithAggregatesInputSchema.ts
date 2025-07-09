import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema'
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'

export const WorkingDaysScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.WorkingDaysScalarWhereWithAggregatesInput> =
	z
		.object({
			AND: z
				.union([
					z.lazy(() => WorkingDaysScalarWhereWithAggregatesInputSchema),
					z.lazy(() => WorkingDaysScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			OR: z
				.lazy(() => WorkingDaysScalarWhereWithAggregatesInputSchema)
				.array()
				.optional(),
			NOT: z
				.union([
					z.lazy(() => WorkingDaysScalarWhereWithAggregatesInputSchema),
					z.lazy(() => WorkingDaysScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
			doctorId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			day: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			startTime: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			closeTime: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			createdAt: z
				.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()])
				.optional(),
			updatedAt: z
				.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()])
				.optional(),
		})
		.strict()

export default WorkingDaysScalarWhereWithAggregatesInputSchema
