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

/////////////////////////////////////////
// WORKING DAYS SCHEMA
/////////////////////////////////////////

export const WorkingDaysSchema = z.object({
	id: z.number().int(),
	doctorId: z.string(),
	day: z.string(),
	startTime: z.string(),
	closeTime: z.string(),
	createdAt: z.coerce.date(),
	updatedAt: z.coerce.date(),
})

export type WorkingDays = z.infer<typeof WorkingDaysSchema>

/////////////////////////////////////////
// WORKING DAYS PARTIAL SCHEMA
/////////////////////////////////////////

export const WorkingDaysPartialSchema = WorkingDaysSchema.partial()

export type WorkingDaysPartial = z.infer<typeof WorkingDaysPartialSchema>

/////////////////////////////////////////
// WORKING DAYS OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const WorkingDaysOptionalDefaultsSchema = WorkingDaysSchema.merge(
	z.object({
		id: z.number().int().optional(),
		createdAt: z.coerce.date().optional(),
		updatedAt: z.coerce.date().optional(),
	}),
)

export type WorkingDaysOptionalDefaults = z.infer<typeof WorkingDaysOptionalDefaultsSchema>

/////////////////////////////////////////
// WORKING DAYS RELATION SCHEMA
/////////////////////////////////////////

export type WorkingDaysRelations = {
	doctor: DoctorWithRelations
}

export type WorkingDaysWithRelations = z.infer<typeof WorkingDaysSchema> & WorkingDaysRelations

export const WorkingDaysWithRelationsSchema: z.ZodType<WorkingDaysWithRelations> =
	WorkingDaysSchema.merge(
		z.object({
			doctor: z.lazy(() => DoctorWithRelationsSchema),
		}),
	)

/////////////////////////////////////////
// WORKING DAYS OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type WorkingDaysOptionalDefaultsRelations = {
	doctor: DoctorOptionalDefaultsWithRelations
}

export type WorkingDaysOptionalDefaultsWithRelations = z.infer<
	typeof WorkingDaysOptionalDefaultsSchema
> &
	WorkingDaysOptionalDefaultsRelations

export const WorkingDaysOptionalDefaultsWithRelationsSchema: z.ZodType<WorkingDaysOptionalDefaultsWithRelations> =
	WorkingDaysOptionalDefaultsSchema.merge(
		z.object({
			doctor: z.lazy(() => DoctorOptionalDefaultsWithRelationsSchema),
		}),
	)

/////////////////////////////////////////
// WORKING DAYS PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type WorkingDaysPartialRelations = {
	doctor?: DoctorPartialWithRelations
}

export type WorkingDaysPartialWithRelations = z.infer<typeof WorkingDaysPartialSchema> &
	WorkingDaysPartialRelations

export const WorkingDaysPartialWithRelationsSchema: z.ZodType<WorkingDaysPartialWithRelations> =
	WorkingDaysPartialSchema.merge(
		z.object({
			doctor: z.lazy(() => DoctorPartialWithRelationsSchema),
		}),
	).partial()

export type WorkingDaysOptionalDefaultsWithPartialRelations = z.infer<
	typeof WorkingDaysOptionalDefaultsSchema
> &
	WorkingDaysPartialRelations

export const WorkingDaysOptionalDefaultsWithPartialRelationsSchema: z.ZodType<WorkingDaysOptionalDefaultsWithPartialRelations> =
	WorkingDaysOptionalDefaultsSchema.merge(
		z
			.object({
				doctor: z.lazy(() => DoctorPartialWithRelationsSchema),
			})
			.partial(),
	)

export type WorkingDaysWithPartialRelations = z.infer<typeof WorkingDaysSchema> &
	WorkingDaysPartialRelations

export const WorkingDaysWithPartialRelationsSchema: z.ZodType<WorkingDaysWithPartialRelations> =
	WorkingDaysSchema.merge(
		z
			.object({
				doctor: z.lazy(() => DoctorPartialWithRelationsSchema),
			})
			.partial(),
	)

export default WorkingDaysSchema
