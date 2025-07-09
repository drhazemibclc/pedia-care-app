import { z } from 'zod'

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

/////////////////////////////////////////
// PRESCRIPTION SCHEMA
/////////////////////////////////////////

export const PrescriptionSchema = z.object({
	id: z.number().int(),
	medicalRecordId: z.number().int(),
	doctorId: z.string().nullish(),
	patientId: z.string(),
	medicationName: z.string(),
	dosage: z.string(),
	frequency: z.string(),
	duration: z.string(),
	instructions: z.string().nullish(),
	issuedDate: z.coerce.date(),
	endDate: z.coerce.date().nullish(),
	status: z.string(),
	createdAt: z.coerce.date(),
	updatedAt: z.coerce.date(),
})

export type Prescription = z.infer<typeof PrescriptionSchema>

/////////////////////////////////////////
// PRESCRIPTION PARTIAL SCHEMA
/////////////////////////////////////////

export const PrescriptionPartialSchema = PrescriptionSchema.partial()

export type PrescriptionPartial = z.infer<typeof PrescriptionPartialSchema>

/////////////////////////////////////////
// PRESCRIPTION OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const PrescriptionOptionalDefaultsSchema = PrescriptionSchema.merge(
	z.object({
		id: z.number().int().optional(),
		issuedDate: z.coerce.date().optional(),
		status: z.string().optional(),
		createdAt: z.coerce.date().optional(),
		updatedAt: z.coerce.date().optional(),
	}),
)

export type PrescriptionOptionalDefaults = z.infer<typeof PrescriptionOptionalDefaultsSchema>

/////////////////////////////////////////
// PRESCRIPTION RELATION SCHEMA
/////////////////////////////////////////

export type PrescriptionRelations = {
	medicalRecord: MedicalRecordsWithRelations
	doctor?: DoctorWithRelations | null
	patient: PatientWithRelations
}

export type PrescriptionWithRelations = z.infer<typeof PrescriptionSchema> & PrescriptionRelations

export const PrescriptionWithRelationsSchema: z.ZodType<PrescriptionWithRelations> =
	PrescriptionSchema.merge(
		z.object({
			medicalRecord: z.lazy(() => MedicalRecordsWithRelationsSchema),
			doctor: z.lazy(() => DoctorWithRelationsSchema).nullish(),
			patient: z.lazy(() => PatientWithRelationsSchema),
		}),
	)

/////////////////////////////////////////
// PRESCRIPTION OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type PrescriptionOptionalDefaultsRelations = {
	medicalRecord: MedicalRecordsOptionalDefaultsWithRelations
	doctor?: DoctorOptionalDefaultsWithRelations | null
	patient: PatientOptionalDefaultsWithRelations
}

export type PrescriptionOptionalDefaultsWithRelations = z.infer<
	typeof PrescriptionOptionalDefaultsSchema
> &
	PrescriptionOptionalDefaultsRelations

export const PrescriptionOptionalDefaultsWithRelationsSchema: z.ZodType<PrescriptionOptionalDefaultsWithRelations> =
	PrescriptionOptionalDefaultsSchema.merge(
		z.object({
			medicalRecord: z.lazy(() => MedicalRecordsOptionalDefaultsWithRelationsSchema),
			doctor: z.lazy(() => DoctorOptionalDefaultsWithRelationsSchema).nullish(),
			patient: z.lazy(() => PatientOptionalDefaultsWithRelationsSchema),
		}),
	)

/////////////////////////////////////////
// PRESCRIPTION PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type PrescriptionPartialRelations = {
	medicalRecord?: MedicalRecordsPartialWithRelations
	doctor?: DoctorPartialWithRelations | null
	patient?: PatientPartialWithRelations
}

export type PrescriptionPartialWithRelations = z.infer<typeof PrescriptionPartialSchema> &
	PrescriptionPartialRelations

export const PrescriptionPartialWithRelationsSchema: z.ZodType<PrescriptionPartialWithRelations> =
	PrescriptionPartialSchema.merge(
		z.object({
			medicalRecord: z.lazy(() => MedicalRecordsPartialWithRelationsSchema),
			doctor: z.lazy(() => DoctorPartialWithRelationsSchema).nullish(),
			patient: z.lazy(() => PatientPartialWithRelationsSchema),
		}),
	).partial()

export type PrescriptionOptionalDefaultsWithPartialRelations = z.infer<
	typeof PrescriptionOptionalDefaultsSchema
> &
	PrescriptionPartialRelations

export const PrescriptionOptionalDefaultsWithPartialRelationsSchema: z.ZodType<PrescriptionOptionalDefaultsWithPartialRelations> =
	PrescriptionOptionalDefaultsSchema.merge(
		z
			.object({
				medicalRecord: z.lazy(() => MedicalRecordsPartialWithRelationsSchema),
				doctor: z.lazy(() => DoctorPartialWithRelationsSchema).nullish(),
				patient: z.lazy(() => PatientPartialWithRelationsSchema),
			})
			.partial(),
	)

export type PrescriptionWithPartialRelations = z.infer<typeof PrescriptionSchema> &
	PrescriptionPartialRelations

export const PrescriptionWithPartialRelationsSchema: z.ZodType<PrescriptionWithPartialRelations> =
	PrescriptionSchema.merge(
		z
			.object({
				medicalRecord: z.lazy(() => MedicalRecordsPartialWithRelationsSchema),
				doctor: z.lazy(() => DoctorPartialWithRelationsSchema).nullish(),
				patient: z.lazy(() => PatientPartialWithRelationsSchema),
			})
			.partial(),
	)

export default PrescriptionSchema
