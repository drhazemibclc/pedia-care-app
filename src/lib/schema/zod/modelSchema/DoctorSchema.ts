import { z } from 'zod'

import { JOBTYPESchema } from '../inputTypeSchemas/JOBTYPESchema'
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
	DiagnosisOptionalDefaultsWithRelations,
	DiagnosisPartialWithRelations,
	DiagnosisWithRelations,
} from './DiagnosisSchema'
import {
	DiagnosisOptionalDefaultsWithRelationsSchema,
	DiagnosisPartialWithRelationsSchema,
	DiagnosisWithRelationsSchema,
} from './DiagnosisSchema'
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
	WorkingDaysOptionalDefaultsWithRelations,
	WorkingDaysPartialWithRelations,
	WorkingDaysWithRelations,
} from './WorkingDaysSchema'
import {
	WorkingDaysOptionalDefaultsWithRelationsSchema,
	WorkingDaysPartialWithRelationsSchema,
	WorkingDaysWithRelationsSchema,
} from './WorkingDaysSchema'

/////////////////////////////////////////
// DOCTOR SCHEMA
/////////////////////////////////////////

export const DoctorSchema = z.object({
	type: JOBTYPESchema,
	id: z.string(),
	email: z.string(),
	name: z.string(),
	userId: z.string(),
	specialization: z.string(),
	licenseNumber: z.string(),
	phone: z.string(),
	address: z.string(),
	department: z.string().nullish(),
	img: z.string().nullish(),
	colorCode: z.string().nullish(),
	availabilityStatus: z.string().nullish(),
	createdAt: z.coerce.date(),
	updatedAt: z.coerce.date(),
})

export type Doctor = z.infer<typeof DoctorSchema>

/////////////////////////////////////////
// DOCTOR PARTIAL SCHEMA
/////////////////////////////////////////

export const DoctorPartialSchema = DoctorSchema.partial()

export type DoctorPartial = z.infer<typeof DoctorPartialSchema>

/////////////////////////////////////////
// DOCTOR OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const DoctorOptionalDefaultsSchema = DoctorSchema.merge(
	z.object({
		type: JOBTYPESchema.optional(),
		createdAt: z.coerce.date().optional(),
		updatedAt: z.coerce.date().optional(),
	}),
)

export type DoctorOptionalDefaults = z.infer<typeof DoctorOptionalDefaultsSchema>

/////////////////////////////////////////
// DOCTOR RELATION SCHEMA
/////////////////////////////////////////

export type DoctorRelations = {
	user: UserWithRelations
	workingDays: WorkingDaysWithRelations[]
	appointments: AppointmentWithRelations[]
	ratings: RatingWithRelations[]
	diagnosis: DiagnosisWithRelations[]
	Prescription: PrescriptionWithRelations[]
}

export type DoctorWithRelations = z.infer<typeof DoctorSchema> & DoctorRelations

export const DoctorWithRelationsSchema: z.ZodType<DoctorWithRelations> = DoctorSchema.merge(
	z.object({
		user: z.lazy(() => UserWithRelationsSchema),
		workingDays: z.lazy(() => WorkingDaysWithRelationsSchema).array(),
		appointments: z.lazy(() => AppointmentWithRelationsSchema).array(),
		ratings: z.lazy(() => RatingWithRelationsSchema).array(),
		diagnosis: z.lazy(() => DiagnosisWithRelationsSchema).array(),
		Prescription: z.lazy(() => PrescriptionWithRelationsSchema).array(),
	}),
)

/////////////////////////////////////////
// DOCTOR OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type DoctorOptionalDefaultsRelations = {
	user: UserOptionalDefaultsWithRelations
	workingDays: WorkingDaysOptionalDefaultsWithRelations[]
	appointments: AppointmentOptionalDefaultsWithRelations[]
	ratings: RatingOptionalDefaultsWithRelations[]
	diagnosis: DiagnosisOptionalDefaultsWithRelations[]
	Prescription: PrescriptionOptionalDefaultsWithRelations[]
}

export type DoctorOptionalDefaultsWithRelations = z.infer<typeof DoctorOptionalDefaultsSchema> &
	DoctorOptionalDefaultsRelations

export const DoctorOptionalDefaultsWithRelationsSchema: z.ZodType<DoctorOptionalDefaultsWithRelations> =
	DoctorOptionalDefaultsSchema.merge(
		z.object({
			user: z.lazy(() => UserOptionalDefaultsWithRelationsSchema),
			workingDays: z.lazy(() => WorkingDaysOptionalDefaultsWithRelationsSchema).array(),
			appointments: z.lazy(() => AppointmentOptionalDefaultsWithRelationsSchema).array(),
			ratings: z.lazy(() => RatingOptionalDefaultsWithRelationsSchema).array(),
			diagnosis: z.lazy(() => DiagnosisOptionalDefaultsWithRelationsSchema).array(),
			Prescription: z.lazy(() => PrescriptionOptionalDefaultsWithRelationsSchema).array(),
		}),
	)

/////////////////////////////////////////
// DOCTOR PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type DoctorPartialRelations = {
	user?: UserPartialWithRelations
	workingDays?: WorkingDaysPartialWithRelations[]
	appointments?: AppointmentPartialWithRelations[]
	ratings?: RatingPartialWithRelations[]
	diagnosis?: DiagnosisPartialWithRelations[]
	Prescription?: PrescriptionPartialWithRelations[]
}

export type DoctorPartialWithRelations = z.infer<typeof DoctorPartialSchema> &
	DoctorPartialRelations

export const DoctorPartialWithRelationsSchema: z.ZodType<DoctorPartialWithRelations> =
	DoctorPartialSchema.merge(
		z.object({
			user: z.lazy(() => UserPartialWithRelationsSchema),
			workingDays: z.lazy(() => WorkingDaysPartialWithRelationsSchema).array(),
			appointments: z.lazy(() => AppointmentPartialWithRelationsSchema).array(),
			ratings: z.lazy(() => RatingPartialWithRelationsSchema).array(),
			diagnosis: z.lazy(() => DiagnosisPartialWithRelationsSchema).array(),
			Prescription: z.lazy(() => PrescriptionPartialWithRelationsSchema).array(),
		}),
	).partial()

export type DoctorOptionalDefaultsWithPartialRelations = z.infer<
	typeof DoctorOptionalDefaultsSchema
> &
	DoctorPartialRelations

export const DoctorOptionalDefaultsWithPartialRelationsSchema: z.ZodType<DoctorOptionalDefaultsWithPartialRelations> =
	DoctorOptionalDefaultsSchema.merge(
		z
			.object({
				user: z.lazy(() => UserPartialWithRelationsSchema),
				workingDays: z.lazy(() => WorkingDaysPartialWithRelationsSchema).array(),
				appointments: z.lazy(() => AppointmentPartialWithRelationsSchema).array(),
				ratings: z.lazy(() => RatingPartialWithRelationsSchema).array(),
				diagnosis: z.lazy(() => DiagnosisPartialWithRelationsSchema).array(),
				Prescription: z.lazy(() => PrescriptionPartialWithRelationsSchema).array(),
			})
			.partial(),
	)

export type DoctorWithPartialRelations = z.infer<typeof DoctorSchema> & DoctorPartialRelations

export const DoctorWithPartialRelationsSchema: z.ZodType<DoctorWithPartialRelations> =
	DoctorSchema.merge(
		z
			.object({
				user: z.lazy(() => UserPartialWithRelationsSchema),
				workingDays: z.lazy(() => WorkingDaysPartialWithRelationsSchema).array(),
				appointments: z.lazy(() => AppointmentPartialWithRelationsSchema).array(),
				ratings: z.lazy(() => RatingPartialWithRelationsSchema).array(),
				diagnosis: z.lazy(() => DiagnosisPartialWithRelationsSchema).array(),
				Prescription: z.lazy(() => PrescriptionPartialWithRelationsSchema).array(),
			})
			.partial(),
	)

export default DoctorSchema
