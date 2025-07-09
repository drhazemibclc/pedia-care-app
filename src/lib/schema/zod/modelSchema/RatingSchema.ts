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
// RATING SCHEMA
/////////////////////////////////////////

export const RatingSchema = z.object({
	id: z.number().int(),
	staffId: z.string(),
	patientId: z.string(),
	rating: z.number().int(),
	comment: z.string().nullish(),
	createdAt: z.coerce.date(),
	updatedAt: z.coerce.date(),
})

export type Rating = z.infer<typeof RatingSchema>

/////////////////////////////////////////
// RATING PARTIAL SCHEMA
/////////////////////////////////////////

export const RatingPartialSchema = RatingSchema.partial()

export type RatingPartial = z.infer<typeof RatingPartialSchema>

/////////////////////////////////////////
// RATING OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const RatingOptionalDefaultsSchema = RatingSchema.merge(
	z.object({
		id: z.number().int().optional(),
		createdAt: z.coerce.date().optional(),
		updatedAt: z.coerce.date().optional(),
	}),
)

export type RatingOptionalDefaults = z.infer<typeof RatingOptionalDefaultsSchema>

/////////////////////////////////////////
// RATING RELATION SCHEMA
/////////////////////////////////////////

export type RatingRelations = {
	doctor: DoctorWithRelations
	patient: PatientWithRelations
}

export type RatingWithRelations = z.infer<typeof RatingSchema> & RatingRelations

export const RatingWithRelationsSchema: z.ZodType<RatingWithRelations> = RatingSchema.merge(
	z.object({
		doctor: z.lazy(() => DoctorWithRelationsSchema),
		patient: z.lazy(() => PatientWithRelationsSchema),
	}),
)

/////////////////////////////////////////
// RATING OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type RatingOptionalDefaultsRelations = {
	doctor: DoctorOptionalDefaultsWithRelations
	patient: PatientOptionalDefaultsWithRelations
}

export type RatingOptionalDefaultsWithRelations = z.infer<typeof RatingOptionalDefaultsSchema> &
	RatingOptionalDefaultsRelations

export const RatingOptionalDefaultsWithRelationsSchema: z.ZodType<RatingOptionalDefaultsWithRelations> =
	RatingOptionalDefaultsSchema.merge(
		z.object({
			doctor: z.lazy(() => DoctorOptionalDefaultsWithRelationsSchema),
			patient: z.lazy(() => PatientOptionalDefaultsWithRelationsSchema),
		}),
	)

/////////////////////////////////////////
// RATING PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type RatingPartialRelations = {
	doctor?: DoctorPartialWithRelations
	patient?: PatientPartialWithRelations
}

export type RatingPartialWithRelations = z.infer<typeof RatingPartialSchema> &
	RatingPartialRelations

export const RatingPartialWithRelationsSchema: z.ZodType<RatingPartialWithRelations> =
	RatingPartialSchema.merge(
		z.object({
			doctor: z.lazy(() => DoctorPartialWithRelationsSchema),
			patient: z.lazy(() => PatientPartialWithRelationsSchema),
		}),
	).partial()

export type RatingOptionalDefaultsWithPartialRelations = z.infer<
	typeof RatingOptionalDefaultsSchema
> &
	RatingPartialRelations

export const RatingOptionalDefaultsWithPartialRelationsSchema: z.ZodType<RatingOptionalDefaultsWithPartialRelations> =
	RatingOptionalDefaultsSchema.merge(
		z
			.object({
				doctor: z.lazy(() => DoctorPartialWithRelationsSchema),
				patient: z.lazy(() => PatientPartialWithRelationsSchema),
			})
			.partial(),
	)

export type RatingWithPartialRelations = z.infer<typeof RatingSchema> & RatingPartialRelations

export const RatingWithPartialRelationsSchema: z.ZodType<RatingWithPartialRelations> =
	RatingSchema.merge(
		z
			.object({
				doctor: z.lazy(() => DoctorPartialWithRelationsSchema),
				patient: z.lazy(() => PatientPartialWithRelationsSchema),
			})
			.partial(),
	)

export default RatingSchema
