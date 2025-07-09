import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { IntFilterSchema } from './IntFilterSchema'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'

export const LabTestScalarWhereInputSchema: z.ZodType<Prisma.LabTestScalarWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => LabTestScalarWhereInputSchema),
				z.lazy(() => LabTestScalarWhereInputSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => LabTestScalarWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => LabTestScalarWhereInputSchema),
				z.lazy(() => LabTestScalarWhereInputSchema).array(),
			])
			.optional(),
		id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
		recordId: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
		testDate: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		result: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		status: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		notes: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		serviceId: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
		createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
	})
	.strict()

export default LabTestScalarWhereInputSchema
