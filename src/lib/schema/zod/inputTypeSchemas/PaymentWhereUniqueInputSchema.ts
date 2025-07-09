import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentScalarRelationFilterSchema } from './AppointmentScalarRelationFilterSchema'
import { AppointmentWhereInputSchema } from './AppointmentWhereInputSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { EnumPaymentMethodFilterSchema } from './EnumPaymentMethodFilterSchema'
import { EnumPaymentStatusFilterSchema } from './EnumPaymentStatusFilterSchema'
import { FloatFilterSchema } from './FloatFilterSchema'
import { IntFilterSchema } from './IntFilterSchema'
import { IntNullableFilterSchema } from './IntNullableFilterSchema'
import { PatientBillsListRelationFilterSchema } from './PatientBillsListRelationFilterSchema'
import { PatientScalarRelationFilterSchema } from './PatientScalarRelationFilterSchema'
import { PatientWhereInputSchema } from './PatientWhereInputSchema'
import { PaymentMethodSchema } from './PaymentMethodSchema'
import { PaymentStatusSchema } from './PaymentStatusSchema'
import { PaymentWhereInputSchema } from './PaymentWhereInputSchema'
import { StringFilterSchema } from './StringFilterSchema'

export const PaymentWhereUniqueInputSchema: z.ZodType<Prisma.PaymentWhereUniqueInput> = z
	.union([
		z.object({
			id: z.number().int(),
			appointmentId: z.number().int(),
		}),
		z.object({
			id: z.number().int(),
		}),
		z.object({
			appointmentId: z.number().int(),
		}),
	])
	.and(
		z
			.object({
				id: z.number().int().optional(),
				appointmentId: z.number().int().optional(),
				AND: z
					.union([
						z.lazy(() => PaymentWhereInputSchema),
						z.lazy(() => PaymentWhereInputSchema).array(),
					])
					.optional(),
				OR: z
					.lazy(() => PaymentWhereInputSchema)
					.array()
					.optional(),
				NOT: z
					.union([
						z.lazy(() => PaymentWhereInputSchema),
						z.lazy(() => PaymentWhereInputSchema).array(),
					])
					.optional(),
				billId: z
					.union([z.lazy(() => IntNullableFilterSchema), z.number().int()])
					.optional()
					.nullable(),
				patientId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
				billDate: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
				paymentDate: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
				discount: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
				totalAmount: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
				amountPaid: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
				paymentMethod: z
					.union([z.lazy(() => EnumPaymentMethodFilterSchema), z.lazy(() => PaymentMethodSchema)])
					.optional(),
				status: z
					.union([z.lazy(() => EnumPaymentStatusFilterSchema), z.lazy(() => PaymentStatusSchema)])
					.optional(),
				receiptNumber: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
				createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
				updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
				appointment: z
					.union([
						z.lazy(() => AppointmentScalarRelationFilterSchema),
						z.lazy(() => AppointmentWhereInputSchema),
					])
					.optional(),
				patient: z
					.union([
						z.lazy(() => PatientScalarRelationFilterSchema),
						z.lazy(() => PatientWhereInputSchema),
					])
					.optional(),
				bills: z.lazy(() => PatientBillsListRelationFilterSchema).optional(),
			})
			.strict(),
	)

export default PaymentWhereUniqueInputSchema
