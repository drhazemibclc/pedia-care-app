import { z } from 'zod'

import { AppointmentStatusSchema } from '../inputTypeSchemas/AppointmentStatusSchema'
import type {
	DoctorOptionalDefaultsWithRelations,
	DoctorPartialWithRelations,
	DoctorWithRelations,
} from './DoctorSchema'
import {
	DoctorOptionalDefaultsWithRelationsSchema,
	DoctorPartialWithRelationsSchema,
	DoctorWithRelationsSchema,
} from './DoctorSchema'
import type {
	MedicalRecordsOptionalDefaultsWithRelations,
	MedicalRecordsPartialWithRelations,
	MedicalRecordsWithRelations,
} from './MedicalRecordsSchema'
import {
	MedicalRecordsOptionalDefaultsWithRelationsSchema,
	MedicalRecordsPartialWithRelationsSchema,
	MedicalRecordsWithRelationsSchema,
} from './MedicalRecordsSchema'
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
// APPOINTMENT SCHEMA
/////////////////////////////////////////

export const AppointmentSchema = z.object({
	status: AppointmentStatusSchema,
	id: z.number().int(),
	patientId: z.string(),
	doctorId: z.string(),
	serviceId: z.number().int().nullish(),
	appointmentDate: z.coerce.date(),
	time: z.string(),
	type: z.string(),
	note: z.string().nullish(),
	reason: z.string().nullish(),
	createdAt: z.coerce.date(),
	updatedAt: z.coerce.date(),
})

export type Appointment = z.infer<typeof AppointmentSchema>

/////////////////////////////////////////
// APPOINTMENT PARTIAL SCHEMA
/////////////////////////////////////////

export const AppointmentPartialSchema = AppointmentSchema.partial()

export type AppointmentPartial = z.infer<typeof AppointmentPartialSchema>

/////////////////////////////////////////
// APPOINTMENT OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const AppointmentOptionalDefaultsSchema = AppointmentSchema.merge(
	z.object({
		status: AppointmentStatusSchema.optional(),
		id: z.number().int().optional(),
		createdAt: z.coerce.date().optional(),
		updatedAt: z.coerce.date().optional(),
	}),
)

export type AppointmentOptionalDefaults = z.infer<typeof AppointmentOptionalDefaultsSchema>

/////////////////////////////////////////
// APPOINTMENT RELATION SCHEMA
/////////////////////////////////////////

export type AppointmentRelations = {
	patient: PatientWithRelations
	doctor: DoctorWithRelations
	service?: ServicesWithRelations | null
	bills: PaymentWithRelations[]
	medical: MedicalRecordsWithRelations[]
}

export type AppointmentWithRelations = z.infer<typeof AppointmentSchema> & AppointmentRelations

export const AppointmentWithRelationsSchema: z.ZodType<AppointmentWithRelations> =
	AppointmentSchema.merge(
		z.object({
			patient: z.lazy(() => PatientWithRelationsSchema),
			doctor: z.lazy(() => DoctorWithRelationsSchema),
			service: z.lazy(() => ServicesWithRelationsSchema).nullish(),
			bills: z.lazy(() => PaymentWithRelationsSchema).array(),
			medical: z.lazy(() => MedicalRecordsWithRelationsSchema).array(),
		}),
	)

/////////////////////////////////////////
// APPOINTMENT OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type AppointmentOptionalDefaultsRelations = {
	patient: PatientOptionalDefaultsWithRelations
	doctor: DoctorOptionalDefaultsWithRelations
	service?: ServicesOptionalDefaultsWithRelations | null
	bills: PaymentOptionalDefaultsWithRelations[]
	medical: MedicalRecordsOptionalDefaultsWithRelations[]
}

export type AppointmentOptionalDefaultsWithRelations = z.infer<
	typeof AppointmentOptionalDefaultsSchema
> &
	AppointmentOptionalDefaultsRelations

export const AppointmentOptionalDefaultsWithRelationsSchema: z.ZodType<AppointmentOptionalDefaultsWithRelations> =
	AppointmentOptionalDefaultsSchema.merge(
		z.object({
			patient: z.lazy(() => PatientOptionalDefaultsWithRelationsSchema),
			doctor: z.lazy(() => DoctorOptionalDefaultsWithRelationsSchema),
			service: z.lazy(() => ServicesOptionalDefaultsWithRelationsSchema).nullish(),
			bills: z.lazy(() => PaymentOptionalDefaultsWithRelationsSchema).array(),
			medical: z.lazy(() => MedicalRecordsOptionalDefaultsWithRelationsSchema).array(),
		}),
	)

/////////////////////////////////////////
// APPOINTMENT PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type AppointmentPartialRelations = {
	patient?: PatientPartialWithRelations
	doctor?: DoctorPartialWithRelations
	service?: ServicesPartialWithRelations | null
	bills?: PaymentPartialWithRelations[]
	medical?: MedicalRecordsPartialWithRelations[]
}

export type AppointmentPartialWithRelations = z.infer<typeof AppointmentPartialSchema> &
	AppointmentPartialRelations

export const AppointmentPartialWithRelationsSchema: z.ZodType<AppointmentPartialWithRelations> =
	AppointmentPartialSchema.merge(
		z.object({
			patient: z.lazy(() => PatientPartialWithRelationsSchema),
			doctor: z.lazy(() => DoctorPartialWithRelationsSchema),
			service: z.lazy(() => ServicesPartialWithRelationsSchema).nullish(),
			bills: z.lazy(() => PaymentPartialWithRelationsSchema).array(),
			medical: z.lazy(() => MedicalRecordsPartialWithRelationsSchema).array(),
		}),
	).partial()

export type AppointmentOptionalDefaultsWithPartialRelations = z.infer<
	typeof AppointmentOptionalDefaultsSchema
> &
	AppointmentPartialRelations

export const AppointmentOptionalDefaultsWithPartialRelationsSchema: z.ZodType<AppointmentOptionalDefaultsWithPartialRelations> =
	AppointmentOptionalDefaultsSchema.merge(
		z
			.object({
				patient: z.lazy(() => PatientPartialWithRelationsSchema),
				doctor: z.lazy(() => DoctorPartialWithRelationsSchema),
				service: z.lazy(() => ServicesPartialWithRelationsSchema).nullish(),
				bills: z.lazy(() => PaymentPartialWithRelationsSchema).array(),
				medical: z.lazy(() => MedicalRecordsPartialWithRelationsSchema).array(),
			})
			.partial(),
	)

export type AppointmentWithPartialRelations = z.infer<typeof AppointmentSchema> &
	AppointmentPartialRelations

export const AppointmentWithPartialRelationsSchema: z.ZodType<AppointmentWithPartialRelations> =
	AppointmentSchema.merge(
		z
			.object({
				patient: z.lazy(() => PatientPartialWithRelationsSchema),
				doctor: z.lazy(() => DoctorPartialWithRelationsSchema),
				service: z.lazy(() => ServicesPartialWithRelationsSchema).nullish(),
				bills: z.lazy(() => PaymentPartialWithRelationsSchema).array(),
				medical: z.lazy(() => MedicalRecordsPartialWithRelationsSchema).array(),
			})
			.partial(),
	)

export default AppointmentSchema
