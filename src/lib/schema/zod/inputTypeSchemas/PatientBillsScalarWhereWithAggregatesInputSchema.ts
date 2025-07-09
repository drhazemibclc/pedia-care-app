import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema'
import { FloatWithAggregatesFilterSchema } from './FloatWithAggregatesFilterSchema'
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema'

export const PatientBillsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PatientBillsScalarWhereWithAggregatesInput> =
	z
		.object({
			AND: z
				.union([
					z.lazy(() => PatientBillsScalarWhereWithAggregatesInputSchema),
					z.lazy(() => PatientBillsScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			OR: z
				.lazy(() => PatientBillsScalarWhereWithAggregatesInputSchema)
				.array()
				.optional(),
			NOT: z
				.union([
					z.lazy(() => PatientBillsScalarWhereWithAggregatesInputSchema),
					z.lazy(() => PatientBillsScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
			billId: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
			serviceId: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
			serviceDate: z
				.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()])
				.optional(),
			quantity: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
			unitCost: z.union([z.lazy(() => FloatWithAggregatesFilterSchema), z.number()]).optional(),
			totalCost: z.union([z.lazy(() => FloatWithAggregatesFilterSchema), z.number()]).optional(),
			createdAt: z
				.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()])
				.optional(),
			updatedAt: z
				.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()])
				.optional(),
		})
		.strict()

export default PatientBillsScalarWhereWithAggregatesInputSchema
