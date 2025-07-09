import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { FloatFilterSchema } from './FloatFilterSchema'
import { IntFilterSchema } from './IntFilterSchema'
import { PaymentScalarRelationFilterSchema } from './PaymentScalarRelationFilterSchema'
import { PaymentWhereInputSchema } from './PaymentWhereInputSchema'
import { ServicesScalarRelationFilterSchema } from './ServicesScalarRelationFilterSchema'
import { ServicesWhereInputSchema } from './ServicesWhereInputSchema'

export const PatientBillsWhereInputSchema: z.ZodType<Prisma.PatientBillsWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => PatientBillsWhereInputSchema),
				z.lazy(() => PatientBillsWhereInputSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => PatientBillsWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => PatientBillsWhereInputSchema),
				z.lazy(() => PatientBillsWhereInputSchema).array(),
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
		service: z
			.union([
				z.lazy(() => ServicesScalarRelationFilterSchema),
				z.lazy(() => ServicesWhereInputSchema),
			])
			.optional(),
		payment: z
			.union([
				z.lazy(() => PaymentScalarRelationFilterSchema),
				z.lazy(() => PaymentWhereInputSchema),
			])
			.optional(),
	})
	.strict()

export default PatientBillsWhereInputSchema
