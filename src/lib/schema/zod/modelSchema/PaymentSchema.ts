import { z } from 'zod'

import { PaymentMethodSchema } from '../inputTypeSchemas/PaymentMethodSchema'
import { PaymentStatusSchema } from '../inputTypeSchemas/PaymentStatusSchema'
import type {
	AppointmentOptionalDefaultsWithRelations,
	AppointmentPartialWithRelations,
	AppointmentWithRelations,
} from './AppointmentSchema'
import {
	AppointmentOptionalDefaultsWithRelationsSchema,
	AppointmentPartialWithRelationsSchema,
	AppointmentWithRelationsSchema,
} from './AppointmentSchema'
import type {
	PatientBillsOptionalDefaultsWithRelations,
	PatientBillsPartialWithRelations,
	PatientBillsWithRelations,
} from './PatientBillsSchema'
import {
	PatientBillsOptionalDefaultsWithRelationsSchema,
	PatientBillsPartialWithRelationsSchema,
	PatientBillsWithRelationsSchema,
} from './PatientBillsSchema'
import type {
	PatientOptionalDefaultsWithRelations,
	PatientPartialWithRelations,
	PatientWithRelations,
} from './PatientSchema'
import {
	PatientOptionalDefaultsWithRelationsSchema,
	PatientPartialWithRelationsSchema,
	PatientWithRelationsSchema,
} from './PatientSchema'

/////////////////////////////////////////
// PAYMENT SCHEMA
/////////////////////////////////////////

export const PaymentSchema = z.object({
	paymentMethod: PaymentMethodSchema,
	status: PaymentStatusSchema,
	id: z.number().int(),
	billId: z.number().int().nullish(),
	patientId: z.string(),
	appointmentId: z.number().int(),
	billDate: z.coerce.date(),
	paymentDate: z.coerce.date(),
	discount: z.number(),
	totalAmount: z.number(),
	amountPaid: z.number(),
	receiptNumber: z.number().int(),
	createdAt: z.coerce.date(),
	updatedAt: z.coerce.date(),
})

export type Payment = z.infer<typeof PaymentSchema>

/////////////////////////////////////////
// PAYMENT PARTIAL SCHEMA
/////////////////////////////////////////

export const PaymentPartialSchema = PaymentSchema.partial()

export type PaymentPartial = z.infer<typeof PaymentPartialSchema>

/////////////////////////////////////////
// PAYMENT OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const PaymentOptionalDefaultsSchema = PaymentSchema.merge(
	z.object({
		paymentMethod: PaymentMethodSchema.optional(),
		status: PaymentStatusSchema.optional(),
		id: z.number().int().optional(),
		receiptNumber: z.number().int().optional(),
		createdAt: z.coerce.date().optional(),
		updatedAt: z.coerce.date().optional(),
	}),
)

export type PaymentOptionalDefaults = z.infer<typeof PaymentOptionalDefaultsSchema>

/////////////////////////////////////////
// PAYMENT RELATION SCHEMA
/////////////////////////////////////////

export type PaymentRelations = {
	appointment: AppointmentWithRelations
	patient: PatientWithRelations
	bills: PatientBillsWithRelations[]
}

export type PaymentWithRelations = z.infer<typeof PaymentSchema> & PaymentRelations

export const PaymentWithRelationsSchema: z.ZodType<PaymentWithRelations> = PaymentSchema.merge(
	z.object({
		appointment: z.lazy(() => AppointmentWithRelationsSchema),
		patient: z.lazy(() => PatientWithRelationsSchema),
		bills: z.lazy(() => PatientBillsWithRelationsSchema).array(),
	}),
)

/////////////////////////////////////////
// PAYMENT OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type PaymentOptionalDefaultsRelations = {
	appointment: AppointmentOptionalDefaultsWithRelations
	patient: PatientOptionalDefaultsWithRelations
	bills: PatientBillsOptionalDefaultsWithRelations[]
}

export type PaymentOptionalDefaultsWithRelations = z.infer<typeof PaymentOptionalDefaultsSchema> &
	PaymentOptionalDefaultsRelations

export const PaymentOptionalDefaultsWithRelationsSchema: z.ZodType<PaymentOptionalDefaultsWithRelations> =
	PaymentOptionalDefaultsSchema.merge(
		z.object({
			appointment: z.lazy(() => AppointmentOptionalDefaultsWithRelationsSchema),
			patient: z.lazy(() => PatientOptionalDefaultsWithRelationsSchema),
			bills: z.lazy(() => PatientBillsOptionalDefaultsWithRelationsSchema).array(),
		}),
	)

/////////////////////////////////////////
// PAYMENT PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type PaymentPartialRelations = {
	appointment?: AppointmentPartialWithRelations
	patient?: PatientPartialWithRelations
	bills?: PatientBillsPartialWithRelations[]
}

export type PaymentPartialWithRelations = z.infer<typeof PaymentPartialSchema> &
	PaymentPartialRelations

export const PaymentPartialWithRelationsSchema: z.ZodType<PaymentPartialWithRelations> =
	PaymentPartialSchema.merge(
		z.object({
			appointment: z.lazy(() => AppointmentPartialWithRelationsSchema),
			patient: z.lazy(() => PatientPartialWithRelationsSchema),
			bills: z.lazy(() => PatientBillsPartialWithRelationsSchema).array(),
		}),
	).partial()

export type PaymentOptionalDefaultsWithPartialRelations = z.infer<
	typeof PaymentOptionalDefaultsSchema
> &
	PaymentPartialRelations

export const PaymentOptionalDefaultsWithPartialRelationsSchema: z.ZodType<PaymentOptionalDefaultsWithPartialRelations> =
	PaymentOptionalDefaultsSchema.merge(
		z
			.object({
				appointment: z.lazy(() => AppointmentPartialWithRelationsSchema),
				patient: z.lazy(() => PatientPartialWithRelationsSchema),
				bills: z.lazy(() => PatientBillsPartialWithRelationsSchema).array(),
			})
			.partial(),
	)

export type PaymentWithPartialRelations = z.infer<typeof PaymentSchema> & PaymentPartialRelations

export const PaymentWithPartialRelationsSchema: z.ZodType<PaymentWithPartialRelations> =
	PaymentSchema.merge(
		z
			.object({
				appointment: z.lazy(() => AppointmentPartialWithRelationsSchema),
				patient: z.lazy(() => PatientPartialWithRelationsSchema),
				bills: z.lazy(() => PatientBillsPartialWithRelationsSchema).array(),
			})
			.partial(),
	)

export default PaymentSchema
