import { z } from 'zod'

import { RoleSchema } from '../inputTypeSchemas/RoleSchema'
import { StatusSchema } from '../inputTypeSchemas/StatusSchema'
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
// STAFF SCHEMA
/////////////////////////////////////////

export const StaffSchema = z.object({
	role: RoleSchema,
	status: StatusSchema,
	id: z.string(),
	email: z.string(),
	name: z.string(),
	phone: z.string(),
	userId: z.string(),
	address: z.string(),
	department: z.string().nullish(),
	img: z.string().nullish(),
	licenseNumber: z.string().nullish(),
	colorCode: z.string().nullish(),
	hireDate: z.coerce.date(),
	salary: z.number().nullish(),
	createdAt: z.coerce.date(),
	updatedAt: z.coerce.date(),
})

export type Staff = z.infer<typeof StaffSchema>

/////////////////////////////////////////
// STAFF PARTIAL SCHEMA
/////////////////////////////////////////

export const StaffPartialSchema = StaffSchema.partial()

export type StaffPartial = z.infer<typeof StaffPartialSchema>

/////////////////////////////////////////
// STAFF OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const StaffOptionalDefaultsSchema = StaffSchema.merge(
	z.object({
		status: StatusSchema.optional(),
		hireDate: z.coerce.date().optional(),
		createdAt: z.coerce.date().optional(),
		updatedAt: z.coerce.date().optional(),
	}),
)

export type StaffOptionalDefaults = z.infer<typeof StaffOptionalDefaultsSchema>

/////////////////////////////////////////
// STAFF RELATION SCHEMA
/////////////////////////////////////////

export type StaffRelations = {
	user: UserWithRelations
	Vaccination: VaccinationWithRelations[]
}

export type StaffWithRelations = z.infer<typeof StaffSchema> & StaffRelations

export const StaffWithRelationsSchema: z.ZodType<StaffWithRelations> = StaffSchema.merge(
	z.object({
		user: z.lazy(() => UserWithRelationsSchema),
		Vaccination: z.lazy(() => VaccinationWithRelationsSchema).array(),
	}),
)

/////////////////////////////////////////
// STAFF OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type StaffOptionalDefaultsRelations = {
	user: UserOptionalDefaultsWithRelations
	Vaccination: VaccinationOptionalDefaultsWithRelations[]
}

export type StaffOptionalDefaultsWithRelations = z.infer<typeof StaffOptionalDefaultsSchema> &
	StaffOptionalDefaultsRelations

export const StaffOptionalDefaultsWithRelationsSchema: z.ZodType<StaffOptionalDefaultsWithRelations> =
	StaffOptionalDefaultsSchema.merge(
		z.object({
			user: z.lazy(() => UserOptionalDefaultsWithRelationsSchema),
			Vaccination: z.lazy(() => VaccinationOptionalDefaultsWithRelationsSchema).array(),
		}),
	)

/////////////////////////////////////////
// STAFF PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type StaffPartialRelations = {
	user?: UserPartialWithRelations
	Vaccination?: VaccinationPartialWithRelations[]
}

export type StaffPartialWithRelations = z.infer<typeof StaffPartialSchema> & StaffPartialRelations

export const StaffPartialWithRelationsSchema: z.ZodType<StaffPartialWithRelations> =
	StaffPartialSchema.merge(
		z.object({
			user: z.lazy(() => UserPartialWithRelationsSchema),
			Vaccination: z.lazy(() => VaccinationPartialWithRelationsSchema).array(),
		}),
	).partial()

export type StaffOptionalDefaultsWithPartialRelations = z.infer<
	typeof StaffOptionalDefaultsSchema
> &
	StaffPartialRelations

export const StaffOptionalDefaultsWithPartialRelationsSchema: z.ZodType<StaffOptionalDefaultsWithPartialRelations> =
	StaffOptionalDefaultsSchema.merge(
		z
			.object({
				user: z.lazy(() => UserPartialWithRelationsSchema),
				Vaccination: z.lazy(() => VaccinationPartialWithRelationsSchema).array(),
			})
			.partial(),
	)

export type StaffWithPartialRelations = z.infer<typeof StaffSchema> & StaffPartialRelations

export const StaffWithPartialRelationsSchema: z.ZodType<StaffWithPartialRelations> =
	StaffSchema.merge(
		z
			.object({
				user: z.lazy(() => UserPartialWithRelationsSchema),
				Vaccination: z.lazy(() => VaccinationPartialWithRelationsSchema).array(),
			})
			.partial(),
	)

export default StaffSchema
