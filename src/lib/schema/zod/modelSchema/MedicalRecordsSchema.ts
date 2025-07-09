import { z } from 'zod'

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
	LabTestOptionalDefaultsWithRelations,
	LabTestPartialWithRelations,
	LabTestWithRelations,
} from './LabTestSchema'
import {
	LabTestOptionalDefaultsWithRelationsSchema,
	LabTestPartialWithRelationsSchema,
	LabTestWithRelationsSchema,
} from './LabTestSchema'
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
	VitalSignsOptionalDefaultsWithRelations,
	VitalSignsPartialWithRelations,
	VitalSignsWithRelations,
} from './VitalSignsSchema'
import {
	VitalSignsOptionalDefaultsWithRelationsSchema,
	VitalSignsPartialWithRelationsSchema,
	VitalSignsWithRelationsSchema,
} from './VitalSignsSchema'

/////////////////////////////////////////
// MEDICAL RECORDS SCHEMA
/////////////////////////////////////////

export const MedicalRecordsSchema = z.object({
	id: z.number().int(),
	patientId: z.string(),
	appointmentId: z.number().int(),
	doctorId: z.string(),
	treatmentPlan: z.string().nullish(),
	prescriptions: z.string().nullish(),
	labRequest: z.string().nullish(),
	notes: z.string().nullish(),
	createdAt: z.coerce.date(),
	updatedAt: z.coerce.date(),
})

export type MedicalRecords = z.infer<typeof MedicalRecordsSchema>

/////////////////////////////////////////
// MEDICAL RECORDS PARTIAL SCHEMA
/////////////////////////////////////////

export const MedicalRecordsPartialSchema = MedicalRecordsSchema.partial()

export type MedicalRecordsPartial = z.infer<typeof MedicalRecordsPartialSchema>

/////////////////////////////////////////
// MEDICAL RECORDS OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const MedicalRecordsOptionalDefaultsSchema = MedicalRecordsSchema.merge(
	z.object({
		id: z.number().int().optional(),
		createdAt: z.coerce.date().optional(),
		updatedAt: z.coerce.date().optional(),
	}),
)

export type MedicalRecordsOptionalDefaults = z.infer<typeof MedicalRecordsOptionalDefaultsSchema>

/////////////////////////////////////////
// MEDICAL RECORDS RELATION SCHEMA
/////////////////////////////////////////

export type MedicalRecordsRelations = {
	appointment: AppointmentWithRelations
	patient: PatientWithRelations
	labTest: LabTestWithRelations[]
	vitalSigns: VitalSignsWithRelations[]
	diagnosis: DiagnosisWithRelations[]
	Prescription: PrescriptionWithRelations[]
}

export type MedicalRecordsWithRelations = z.infer<typeof MedicalRecordsSchema> &
	MedicalRecordsRelations

export const MedicalRecordsWithRelationsSchema: z.ZodType<MedicalRecordsWithRelations> =
	MedicalRecordsSchema.merge(
		z.object({
			appointment: z.lazy(() => AppointmentWithRelationsSchema),
			patient: z.lazy(() => PatientWithRelationsSchema),
			labTest: z.lazy(() => LabTestWithRelationsSchema).array(),
			vitalSigns: z.lazy(() => VitalSignsWithRelationsSchema).array(),
			diagnosis: z.lazy(() => DiagnosisWithRelationsSchema).array(),
			Prescription: z.lazy(() => PrescriptionWithRelationsSchema).array(),
		}),
	)

/////////////////////////////////////////
// MEDICAL RECORDS OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type MedicalRecordsOptionalDefaultsRelations = {
	appointment: AppointmentOptionalDefaultsWithRelations
	patient: PatientOptionalDefaultsWithRelations
	labTest: LabTestOptionalDefaultsWithRelations[]
	vitalSigns: VitalSignsOptionalDefaultsWithRelations[]
	diagnosis: DiagnosisOptionalDefaultsWithRelations[]
	Prescription: PrescriptionOptionalDefaultsWithRelations[]
}

export type MedicalRecordsOptionalDefaultsWithRelations = z.infer<
	typeof MedicalRecordsOptionalDefaultsSchema
> &
	MedicalRecordsOptionalDefaultsRelations

export const MedicalRecordsOptionalDefaultsWithRelationsSchema: z.ZodType<MedicalRecordsOptionalDefaultsWithRelations> =
	MedicalRecordsOptionalDefaultsSchema.merge(
		z.object({
			appointment: z.lazy(() => AppointmentOptionalDefaultsWithRelationsSchema),
			patient: z.lazy(() => PatientOptionalDefaultsWithRelationsSchema),
			labTest: z.lazy(() => LabTestOptionalDefaultsWithRelationsSchema).array(),
			vitalSigns: z.lazy(() => VitalSignsOptionalDefaultsWithRelationsSchema).array(),
			diagnosis: z.lazy(() => DiagnosisOptionalDefaultsWithRelationsSchema).array(),
			Prescription: z.lazy(() => PrescriptionOptionalDefaultsWithRelationsSchema).array(),
		}),
	)

/////////////////////////////////////////
// MEDICAL RECORDS PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type MedicalRecordsPartialRelations = {
	appointment?: AppointmentPartialWithRelations
	patient?: PatientPartialWithRelations
	labTest?: LabTestPartialWithRelations[]
	vitalSigns?: VitalSignsPartialWithRelations[]
	diagnosis?: DiagnosisPartialWithRelations[]
	Prescription?: PrescriptionPartialWithRelations[]
}

export type MedicalRecordsPartialWithRelations = z.infer<typeof MedicalRecordsPartialSchema> &
	MedicalRecordsPartialRelations

export const MedicalRecordsPartialWithRelationsSchema: z.ZodType<MedicalRecordsPartialWithRelations> =
	MedicalRecordsPartialSchema.merge(
		z.object({
			appointment: z.lazy(() => AppointmentPartialWithRelationsSchema),
			patient: z.lazy(() => PatientPartialWithRelationsSchema),
			labTest: z.lazy(() => LabTestPartialWithRelationsSchema).array(),
			vitalSigns: z.lazy(() => VitalSignsPartialWithRelationsSchema).array(),
			diagnosis: z.lazy(() => DiagnosisPartialWithRelationsSchema).array(),
			Prescription: z.lazy(() => PrescriptionPartialWithRelationsSchema).array(),
		}),
	).partial()

export type MedicalRecordsOptionalDefaultsWithPartialRelations = z.infer<
	typeof MedicalRecordsOptionalDefaultsSchema
> &
	MedicalRecordsPartialRelations

export const MedicalRecordsOptionalDefaultsWithPartialRelationsSchema: z.ZodType<MedicalRecordsOptionalDefaultsWithPartialRelations> =
	MedicalRecordsOptionalDefaultsSchema.merge(
		z
			.object({
				appointment: z.lazy(() => AppointmentPartialWithRelationsSchema),
				patient: z.lazy(() => PatientPartialWithRelationsSchema),
				labTest: z.lazy(() => LabTestPartialWithRelationsSchema).array(),
				vitalSigns: z.lazy(() => VitalSignsPartialWithRelationsSchema).array(),
				diagnosis: z.lazy(() => DiagnosisPartialWithRelationsSchema).array(),
				Prescription: z.lazy(() => PrescriptionPartialWithRelationsSchema).array(),
			})
			.partial(),
	)

export type MedicalRecordsWithPartialRelations = z.infer<typeof MedicalRecordsSchema> &
	MedicalRecordsPartialRelations

export const MedicalRecordsWithPartialRelationsSchema: z.ZodType<MedicalRecordsWithPartialRelations> =
	MedicalRecordsSchema.merge(
		z
			.object({
				appointment: z.lazy(() => AppointmentPartialWithRelationsSchema),
				patient: z.lazy(() => PatientPartialWithRelationsSchema),
				labTest: z.lazy(() => LabTestPartialWithRelationsSchema).array(),
				vitalSigns: z.lazy(() => VitalSignsPartialWithRelationsSchema).array(),
				diagnosis: z.lazy(() => DiagnosisPartialWithRelationsSchema).array(),
				Prescription: z.lazy(() => PrescriptionPartialWithRelationsSchema).array(),
			})
			.partial(),
	)

export default MedicalRecordsSchema
