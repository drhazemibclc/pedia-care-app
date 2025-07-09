import { z } from 'zod'

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
	StaffOptionalDefaultsWithRelations,
	StaffPartialWithRelations,
	StaffWithRelations,
} from './StaffSchema'
import {
	StaffOptionalDefaultsWithRelationsSchema,
	StaffPartialWithRelationsSchema,
	StaffWithRelationsSchema,
} from './StaffSchema'

/////////////////////////////////////////
// VACCINATION SCHEMA
/////////////////////////////////////////

export const VaccinationSchema = z.object({
	id: z.number().int(),
	patientId: z.string(),
	administeredBy: z.string().nullish(),
	vaccineName: z.string(),
	vaccineBatchNo: z.string().nullish(),
	administrationRoute: z.string().nullish(),
	siteOfInjection: z.string().nullish(),
	administeredDate: z.coerce.date(),
	nextDueDate: z.coerce.date().nullish(),
	notes: z.string().nullish(),
	createdAt: z.coerce.date(),
	updatedAt: z.coerce.date(),
})

export type Vaccination = z.infer<typeof VaccinationSchema>

/////////////////////////////////////////
// VACCINATION PARTIAL SCHEMA
/////////////////////////////////////////

export const VaccinationPartialSchema = VaccinationSchema.partial()

export type VaccinationPartial = z.infer<typeof VaccinationPartialSchema>

/////////////////////////////////////////
// VACCINATION OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const VaccinationOptionalDefaultsSchema = VaccinationSchema.merge(
	z.object({
		id: z.number().int().optional(),
		createdAt: z.coerce.date().optional(),
		updatedAt: z.coerce.date().optional(),
	}),
)

export type VaccinationOptionalDefaults = z.infer<typeof VaccinationOptionalDefaultsSchema>

/////////////////////////////////////////
// VACCINATION RELATION SCHEMA
/////////////////////////////////////////

export type VaccinationRelations = {
	patient: PatientWithRelations
	administeredByStaff?: StaffWithRelations | null
}

export type VaccinationWithRelations = z.infer<typeof VaccinationSchema> & VaccinationRelations

export const VaccinationWithRelationsSchema: z.ZodType<VaccinationWithRelations> =
	VaccinationSchema.merge(
		z.object({
			patient: z.lazy(() => PatientWithRelationsSchema),
			administeredByStaff: z.lazy(() => StaffWithRelationsSchema).nullish(),
		}),
	)

/////////////////////////////////////////
// VACCINATION OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type VaccinationOptionalDefaultsRelations = {
	patient: PatientOptionalDefaultsWithRelations
	administeredByStaff?: StaffOptionalDefaultsWithRelations | null
}

export type VaccinationOptionalDefaultsWithRelations = z.infer<
	typeof VaccinationOptionalDefaultsSchema
> &
	VaccinationOptionalDefaultsRelations

export const VaccinationOptionalDefaultsWithRelationsSchema: z.ZodType<VaccinationOptionalDefaultsWithRelations> =
	VaccinationOptionalDefaultsSchema.merge(
		z.object({
			patient: z.lazy(() => PatientOptionalDefaultsWithRelationsSchema),
			administeredByStaff: z.lazy(() => StaffOptionalDefaultsWithRelationsSchema).nullish(),
		}),
	)

/////////////////////////////////////////
// VACCINATION PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type VaccinationPartialRelations = {
	patient?: PatientPartialWithRelations
	administeredByStaff?: StaffPartialWithRelations | null
}

export type VaccinationPartialWithRelations = z.infer<typeof VaccinationPartialSchema> &
	VaccinationPartialRelations

export const VaccinationPartialWithRelationsSchema: z.ZodType<VaccinationPartialWithRelations> =
	VaccinationPartialSchema.merge(
		z.object({
			patient: z.lazy(() => PatientPartialWithRelationsSchema),
			administeredByStaff: z.lazy(() => StaffPartialWithRelationsSchema).nullish(),
		}),
	).partial()

export type VaccinationOptionalDefaultsWithPartialRelations = z.infer<
	typeof VaccinationOptionalDefaultsSchema
> &
	VaccinationPartialRelations

export const VaccinationOptionalDefaultsWithPartialRelationsSchema: z.ZodType<VaccinationOptionalDefaultsWithPartialRelations> =
	VaccinationOptionalDefaultsSchema.merge(
		z
			.object({
				patient: z.lazy(() => PatientPartialWithRelationsSchema),
				administeredByStaff: z.lazy(() => StaffPartialWithRelationsSchema).nullish(),
			})
			.partial(),
	)

export type VaccinationWithPartialRelations = z.infer<typeof VaccinationSchema> &
	VaccinationPartialRelations

export const VaccinationWithPartialRelationsSchema: z.ZodType<VaccinationWithPartialRelations> =
	VaccinationSchema.merge(
		z
			.object({
				patient: z.lazy(() => PatientPartialWithRelationsSchema),
				administeredByStaff: z.lazy(() => StaffPartialWithRelationsSchema).nullish(),
			})
			.partial(),
	)

export default VaccinationSchema
