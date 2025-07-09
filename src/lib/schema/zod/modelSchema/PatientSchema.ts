import { z } from 'zod'

import { GenderSchema } from '../inputTypeSchemas/GenderSchema'
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
	PrescriptionOptionalDefaultsWithRelations,
	PrescriptionPartialWithRelations,
	PrescriptionWithRelations,
} from './PrescriptionSchema'
import {
	PrescriptionOptionalDefaultsWithRelationsSchema,
	PrescriptionPartialWithRelationsSchema,
	PrescriptionWithRelationsSchema,
} from './PrescriptionSchema'
import type {
	RatingOptionalDefaultsWithRelations,
	RatingPartialWithRelations,
	RatingWithRelations,
} from './RatingSchema'
import {
	RatingOptionalDefaultsWithRelationsSchema,
	RatingPartialWithRelationsSchema,
	RatingWithRelationsSchema,
} from './RatingSchema'
import type {
	UserOptionalDefaultsWithRelations,
	UserPartialWithRelations,
	UserWithRelations,
} from './UserSchema'
import {
	UserOptionalDefaultsWithRelationsSchema,
	UserPartialWithRelationsSchema,
	UserWithRelationsSchema,
} from './UserSchema'
import type {
	VaccinationOptionalDefaultsWithRelations,
	VaccinationPartialWithRelations,
	VaccinationWithRelations,
} from './VaccinationSchema'
import {
	VaccinationOptionalDefaultsWithRelationsSchema,
	VaccinationPartialWithRelationsSchema,
	VaccinationWithRelationsSchema,
} from './VaccinationSchema'

/////////////////////////////////////////
// PATIENT SCHEMA
/////////////////////////////////////////

export const PatientSchema = z.object({
	gender: GenderSchema,
	id: z.string(),
	firstName: z.string(),
	lastName: z.string(),
	userId: z.string(),
	dateOfBirth: z.coerce.date(),
	phone: z.string(),
	email: z.string(),
	maritalStatus: z.string(),
	nutritionalStatus: z.string(),
	address: z.string(),
	emergencyContactName: z.string(),
	emergencyContactNumber: z.string(),
	relation: z.string(),
	bloodGroup: z.string().nullish(),
	allergies: z.string().nullish(),
	medicalConditions: z.string().nullish(),
	medicalHistory: z.string().nullish(),
	insuranceProvider: z.string().nullish(),
	insuranceNumber: z.string().nullish(),
	privacyConsent: z.boolean(),
	serviceConsent: z.boolean(),
	medicalConsent: z.boolean(),
	img: z.string().nullish(),
	colorCode: z.string().nullish(),
	createdAt: z.coerce.date(),
	updatedAt: z.coerce.date(),
})

export type Patient = z.infer<typeof PatientSchema>

/////////////////////////////////////////
// PATIENT PARTIAL SCHEMA
/////////////////////////////////////////

export const PatientPartialSchema = PatientSchema.partial()

export type PatientPartial = z.infer<typeof PatientPartialSchema>

/////////////////////////////////////////
// PATIENT OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const PatientOptionalDefaultsSchema = PatientSchema.merge(
	z.object({
		gender: GenderSchema.optional(),
		createdAt: z.coerce.date().optional(),
		updatedAt: z.coerce.date().optional(),
	}),
)

export type PatientOptionalDefaults = z.infer<typeof PatientOptionalDefaultsSchema>

/////////////////////////////////////////
// PATIENT RELATION SCHEMA
/////////////////////////////////////////

export type PatientRelations = {
	user: UserWithRelations
	appointments: AppointmentWithRelations[]
	medical: MedicalRecordsWithRelations[]
	payments: PaymentWithRelations[]
	ratings: RatingWithRelations[]
	Prescription: PrescriptionWithRelations[]
	Vaccination: VaccinationWithRelations[]
}

export type PatientWithRelations = z.infer<typeof PatientSchema> & PatientRelations

export const PatientWithRelationsSchema: z.ZodType<PatientWithRelations> = PatientSchema.merge(
	z.object({
		user: z.lazy(() => UserWithRelationsSchema),
		appointments: z.lazy(() => AppointmentWithRelationsSchema).array(),
		medical: z.lazy(() => MedicalRecordsWithRelationsSchema).array(),
		payments: z.lazy(() => PaymentWithRelationsSchema).array(),
		ratings: z.lazy(() => RatingWithRelationsSchema).array(),
		Prescription: z.lazy(() => PrescriptionWithRelationsSchema).array(),
		Vaccination: z.lazy(() => VaccinationWithRelationsSchema).array(),
	}),
)

/////////////////////////////////////////
// PATIENT OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type PatientOptionalDefaultsRelations = {
	user: UserOptionalDefaultsWithRelations
	appointments: AppointmentOptionalDefaultsWithRelations[]
	medical: MedicalRecordsOptionalDefaultsWithRelations[]
	payments: PaymentOptionalDefaultsWithRelations[]
	ratings: RatingOptionalDefaultsWithRelations[]
	Prescription: PrescriptionOptionalDefaultsWithRelations[]
	Vaccination: VaccinationOptionalDefaultsWithRelations[]
}

export type PatientOptionalDefaultsWithRelations = z.infer<typeof PatientOptionalDefaultsSchema> &
	PatientOptionalDefaultsRelations

export const PatientOptionalDefaultsWithRelationsSchema: z.ZodType<PatientOptionalDefaultsWithRelations> =
	PatientOptionalDefaultsSchema.merge(
		z.object({
			user: z.lazy(() => UserOptionalDefaultsWithRelationsSchema),
			appointments: z.lazy(() => AppointmentOptionalDefaultsWithRelationsSchema).array(),
			medical: z.lazy(() => MedicalRecordsOptionalDefaultsWithRelationsSchema).array(),
			payments: z.lazy(() => PaymentOptionalDefaultsWithRelationsSchema).array(),
			ratings: z.lazy(() => RatingOptionalDefaultsWithRelationsSchema).array(),
			Prescription: z.lazy(() => PrescriptionOptionalDefaultsWithRelationsSchema).array(),
			Vaccination: z.lazy(() => VaccinationOptionalDefaultsWithRelationsSchema).array(),
		}),
	)

/////////////////////////////////////////
// PATIENT PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type PatientPartialRelations = {
	user?: UserPartialWithRelations
	appointments?: AppointmentPartialWithRelations[]
	medical?: MedicalRecordsPartialWithRelations[]
	payments?: PaymentPartialWithRelations[]
	ratings?: RatingPartialWithRelations[]
	Prescription?: PrescriptionPartialWithRelations[]
	Vaccination?: VaccinationPartialWithRelations[]
}

export type PatientPartialWithRelations = z.infer<typeof PatientPartialSchema> &
	PatientPartialRelations

export const PatientPartialWithRelationsSchema: z.ZodType<PatientPartialWithRelations> =
	PatientPartialSchema.merge(
		z.object({
			user: z.lazy(() => UserPartialWithRelationsSchema),
			appointments: z.lazy(() => AppointmentPartialWithRelationsSchema).array(),
			medical: z.lazy(() => MedicalRecordsPartialWithRelationsSchema).array(),
			payments: z.lazy(() => PaymentPartialWithRelationsSchema).array(),
			ratings: z.lazy(() => RatingPartialWithRelationsSchema).array(),
			Prescription: z.lazy(() => PrescriptionPartialWithRelationsSchema).array(),
			Vaccination: z.lazy(() => VaccinationPartialWithRelationsSchema).array(),
		}),
	).partial()

export type PatientOptionalDefaultsWithPartialRelations = z.infer<
	typeof PatientOptionalDefaultsSchema
> &
	PatientPartialRelations

export const PatientOptionalDefaultsWithPartialRelationsSchema: z.ZodType<PatientOptionalDefaultsWithPartialRelations> =
	PatientOptionalDefaultsSchema.merge(
		z
			.object({
				user: z.lazy(() => UserPartialWithRelationsSchema),
				appointments: z.lazy(() => AppointmentPartialWithRelationsSchema).array(),
				medical: z.lazy(() => MedicalRecordsPartialWithRelationsSchema).array(),
				payments: z.lazy(() => PaymentPartialWithRelationsSchema).array(),
				ratings: z.lazy(() => RatingPartialWithRelationsSchema).array(),
				Prescription: z.lazy(() => PrescriptionPartialWithRelationsSchema).array(),
				Vaccination: z.lazy(() => VaccinationPartialWithRelationsSchema).array(),
			})
			.partial(),
	)

export type PatientWithPartialRelations = z.infer<typeof PatientSchema> & PatientPartialRelations

export const PatientWithPartialRelationsSchema: z.ZodType<PatientWithPartialRelations> =
	PatientSchema.merge(
		z
			.object({
				user: z.lazy(() => UserPartialWithRelationsSchema),
				appointments: z.lazy(() => AppointmentPartialWithRelationsSchema).array(),
				medical: z.lazy(() => MedicalRecordsPartialWithRelationsSchema).array(),
				payments: z.lazy(() => PaymentPartialWithRelationsSchema).array(),
				ratings: z.lazy(() => RatingPartialWithRelationsSchema).array(),
				Prescription: z.lazy(() => PrescriptionPartialWithRelationsSchema).array(),
				Vaccination: z.lazy(() => VaccinationPartialWithRelationsSchema).array(),
			})
			.partial(),
	)

export default PatientSchema
