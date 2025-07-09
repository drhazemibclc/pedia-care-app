import { z } from 'zod'

import type {
	PaymentOptionalDefaultsWithRelations,
	PaymentPartialWithRelations,
	PaymentWithRelations,
} from './PaymentSchema'
import {
	PaymentOptionalDefaultsWithRelationsSchema,
	PaymentPartialWithRelationsSchema,
	PaymentWithRelationsSchema,
} from './PaymentSchema'
import type {
	ServicesOptionalDefaultsWithRelations,
	ServicesPartialWithRelations,
	ServicesWithRelations,
} from './ServicesSchema'
import {
	ServicesOptionalDefaultsWithRelationsSchema,
	ServicesPartialWithRelationsSchema,
	ServicesWithRelationsSchema,
} from './ServicesSchema'

/////////////////////////////////////////
// PATIENT BILLS SCHEMA
/////////////////////////////////////////

export const PatientBillsSchema = z.object({
	id: z.number().int(),
	billId: z.number().int(),
	serviceId: z.number().int(),
	serviceDate: z.coerce.date(),
	quantity: z.number().int(),
	unitCost: z.number(),
	totalCost: z.number(),
	createdAt: z.coerce.date(),
	updatedAt: z.coerce.date(),
})

export type PatientBills = z.infer<typeof PatientBillsSchema>

/////////////////////////////////////////
// PATIENT BILLS PARTIAL SCHEMA
/////////////////////////////////////////

export const PatientBillsPartialSchema = PatientBillsSchema.partial()

export type PatientBillsPartial = z.infer<typeof PatientBillsPartialSchema>

/////////////////////////////////////////
// PATIENT BILLS OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const PatientBillsOptionalDefaultsSchema = PatientBillsSchema.merge(
	z.object({
		id: z.number().int().optional(),
		createdAt: z.coerce.date().optional(),
		updatedAt: z.coerce.date().optional(),
	}),
)

export type PatientBillsOptionalDefaults = z.infer<typeof PatientBillsOptionalDefaultsSchema>

/////////////////////////////////////////
// PATIENT BILLS RELATION SCHEMA
/////////////////////////////////////////

export type PatientBillsRelations = {
	service: ServicesWithRelations
	payment: PaymentWithRelations
}

export type PatientBillsWithRelations = z.infer<typeof PatientBillsSchema> & PatientBillsRelations

export const PatientBillsWithRelationsSchema: z.ZodType<PatientBillsWithRelations> =
	PatientBillsSchema.merge(
		z.object({
			service: z.lazy(() => ServicesWithRelationsSchema),
			payment: z.lazy(() => PaymentWithRelationsSchema),
		}),
	)

/////////////////////////////////////////
// PATIENT BILLS OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type PatientBillsOptionalDefaultsRelations = {
	service: ServicesOptionalDefaultsWithRelations
	payment: PaymentOptionalDefaultsWithRelations
}

export type PatientBillsOptionalDefaultsWithRelations = z.infer<
	typeof PatientBillsOptionalDefaultsSchema
> &
	PatientBillsOptionalDefaultsRelations

export const PatientBillsOptionalDefaultsWithRelationsSchema: z.ZodType<PatientBillsOptionalDefaultsWithRelations> =
	PatientBillsOptionalDefaultsSchema.merge(
		z.object({
			service: z.lazy(() => ServicesOptionalDefaultsWithRelationsSchema),
			payment: z.lazy(() => PaymentOptionalDefaultsWithRelationsSchema),
		}),
	)

/////////////////////////////////////////
// PATIENT BILLS PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type PatientBillsPartialRelations = {
	service?: ServicesPartialWithRelations
	payment?: PaymentPartialWithRelations
}

export type PatientBillsPartialWithRelations = z.infer<typeof PatientBillsPartialSchema> &
	PatientBillsPartialRelations

export const PatientBillsPartialWithRelationsSchema: z.ZodType<PatientBillsPartialWithRelations> =
	PatientBillsPartialSchema.merge(
		z.object({
			service: z.lazy(() => ServicesPartialWithRelationsSchema),
			payment: z.lazy(() => PaymentPartialWithRelationsSchema),
		}),
	).partial()

export type PatientBillsOptionalDefaultsWithPartialRelations = z.infer<
	typeof PatientBillsOptionalDefaultsSchema
> &
	PatientBillsPartialRelations

export const PatientBillsOptionalDefaultsWithPartialRelationsSchema: z.ZodType<PatientBillsOptionalDefaultsWithPartialRelations> =
	PatientBillsOptionalDefaultsSchema.merge(
		z
			.object({
				service: z.lazy(() => ServicesPartialWithRelationsSchema),
				payment: z.lazy(() => PaymentPartialWithRelationsSchema),
			})
			.partial(),
	)

export type PatientBillsWithPartialRelations = z.infer<typeof PatientBillsSchema> &
	PatientBillsPartialRelations

export const PatientBillsWithPartialRelationsSchema: z.ZodType<PatientBillsWithPartialRelations> =
	PatientBillsSchema.merge(
		z
			.object({
				service: z.lazy(() => ServicesPartialWithRelationsSchema),
				payment: z.lazy(() => PaymentPartialWithRelationsSchema),
			})
			.partial(),
	)

export default PatientBillsSchema
