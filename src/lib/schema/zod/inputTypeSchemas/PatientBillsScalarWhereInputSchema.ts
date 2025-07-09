import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { FloatFilterSchema } from './FloatFilterSchema'
import { IntFilterSchema } from './IntFilterSchema'

export const PatientBillsScalarWhereInputSchema: z.ZodType<Prisma.PatientBillsScalarWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => PatientBillsScalarWhereInputSchema),
				z.lazy(() => PatientBillsScalarWhereInputSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => PatientBillsScalarWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => PatientBillsScalarWhereInputSchema),
				z.lazy(() => PatientBillsScalarWhereInputSchema).array(),
			])
			.optional(),
		id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
		billId: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
		serviceId: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
		serviceDate: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		quantity: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
		unitCost: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
		totalCost: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
		createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
	})
	.strict()

export default PatientBillsScalarWhereInputSchema
