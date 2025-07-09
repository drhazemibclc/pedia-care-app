import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema'
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema'
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'

export const LabTestScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.LabTestScalarWhereWithAggregatesInput> =
	z
		.object({
			AND: z
				.union([
					z.lazy(() => LabTestScalarWhereWithAggregatesInputSchema),
					z.lazy(() => LabTestScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			OR: z
				.lazy(() => LabTestScalarWhereWithAggregatesInputSchema)
				.array()
				.optional(),
			NOT: z
				.union([
					z.lazy(() => LabTestScalarWhereWithAggregatesInputSchema),
					z.lazy(() => LabTestScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
			recordId: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
			testDate: z
				.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()])
				.optional(),
			result: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			status: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			notes: z
				.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			serviceId: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
			createdAt: z
				.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()])
				.optional(),
			updatedAt: z
				.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()])
				.optional(),
		})
		.strict()

export default LabTestScalarWhereWithAggregatesInputSchema
