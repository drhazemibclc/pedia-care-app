import { z } from 'zod'

import type {
	AccountOptionalDefaultsWithRelations,
	AccountPartialWithRelations,
	AccountWithRelations,
} from './AccountSchema'
import {
	AccountOptionalDefaultsWithRelationsSchema,
	AccountPartialWithRelationsSchema,
	AccountWithRelationsSchema,
} from './AccountSchema'
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
import type {
	SessionOptionalDefaultsWithRelations,
	SessionPartialWithRelations,
	SessionWithRelations,
} from './SessionSchema'
import {
	SessionOptionalDefaultsWithRelationsSchema,
	SessionPartialWithRelationsSchema,
	SessionWithRelationsSchema,
} from './SessionSchema'
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
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
	id: z.string(),
	name: z.string(),
	email: z.string(),
	emailVerified: z.boolean(),
	image: z.string().nullish(),
	createdAt: z.coerce.date(),
	updatedAt: z.coerce.date(),
	role: z.string().nullish(),
	banned: z.boolean().nullish(),
	banReason: z.string().nullish(),
	banExpires: z.coerce.date().nullish(),
})

export type User = z.infer<typeof UserSchema>

/////////////////////////////////////////
// USER PARTIAL SCHEMA
/////////////////////////////////////////

export const UserPartialSchema = UserSchema.partial()

export type UserPartial = z.infer<typeof UserPartialSchema>

/////////////////////////////////////////
// USER OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const UserOptionalDefaultsSchema = UserSchema.merge(z.object({}))

export type UserOptionalDefaults = z.infer<typeof UserOptionalDefaultsSchema>

/////////////////////////////////////////
// USER RELATION SCHEMA
/////////////////////////////////////////

export type UserRelations = {
	sessions: SessionWithRelations[]
	accounts: AccountWithRelations[]
	Staff: StaffWithRelations[]
	Doctor: DoctorWithRelations[]
	Patient: PatientWithRelations[]
}

export type UserWithRelations = z.infer<typeof UserSchema> & UserRelations

export const UserWithRelationsSchema: z.ZodType<UserWithRelations> = UserSchema.merge(
	z.object({
		sessions: z.lazy(() => SessionWithRelationsSchema).array(),
		accounts: z.lazy(() => AccountWithRelationsSchema).array(),
		Staff: z.lazy(() => StaffWithRelationsSchema).array(),
		Doctor: z.lazy(() => DoctorWithRelationsSchema).array(),
		Patient: z.lazy(() => PatientWithRelationsSchema).array(),
	}),
)

/////////////////////////////////////////
// USER OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type UserOptionalDefaultsRelations = {
	sessions: SessionOptionalDefaultsWithRelations[]
	accounts: AccountOptionalDefaultsWithRelations[]
	Staff: StaffOptionalDefaultsWithRelations[]
	Doctor: DoctorOptionalDefaultsWithRelations[]
	Patient: PatientOptionalDefaultsWithRelations[]
}

export type UserOptionalDefaultsWithRelations = z.infer<typeof UserOptionalDefaultsSchema> &
	UserOptionalDefaultsRelations

export const UserOptionalDefaultsWithRelationsSchema: z.ZodType<UserOptionalDefaultsWithRelations> =
	UserOptionalDefaultsSchema.merge(
		z.object({
			sessions: z.lazy(() => SessionOptionalDefaultsWithRelationsSchema).array(),
			accounts: z.lazy(() => AccountOptionalDefaultsWithRelationsSchema).array(),
			Staff: z.lazy(() => StaffOptionalDefaultsWithRelationsSchema).array(),
			Doctor: z.lazy(() => DoctorOptionalDefaultsWithRelationsSchema).array(),
			Patient: z.lazy(() => PatientOptionalDefaultsWithRelationsSchema).array(),
		}),
	)

/////////////////////////////////////////
// USER PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type UserPartialRelations = {
	sessions?: SessionPartialWithRelations[]
	accounts?: AccountPartialWithRelations[]
	Staff?: StaffPartialWithRelations[]
	Doctor?: DoctorPartialWithRelations[]
	Patient?: PatientPartialWithRelations[]
}

export type UserPartialWithRelations = z.infer<typeof UserPartialSchema> & UserPartialRelations

export const UserPartialWithRelationsSchema: z.ZodType<UserPartialWithRelations> =
	UserPartialSchema.merge(
		z.object({
			sessions: z.lazy(() => SessionPartialWithRelationsSchema).array(),
			accounts: z.lazy(() => AccountPartialWithRelationsSchema).array(),
			Staff: z.lazy(() => StaffPartialWithRelationsSchema).array(),
			Doctor: z.lazy(() => DoctorPartialWithRelationsSchema).array(),
			Patient: z.lazy(() => PatientPartialWithRelationsSchema).array(),
		}),
	).partial()

export type UserOptionalDefaultsWithPartialRelations = z.infer<typeof UserOptionalDefaultsSchema> &
	UserPartialRelations

export const UserOptionalDefaultsWithPartialRelationsSchema: z.ZodType<UserOptionalDefaultsWithPartialRelations> =
	UserOptionalDefaultsSchema.merge(
		z
			.object({
				sessions: z.lazy(() => SessionPartialWithRelationsSchema).array(),
				accounts: z.lazy(() => AccountPartialWithRelationsSchema).array(),
				Staff: z.lazy(() => StaffPartialWithRelationsSchema).array(),
				Doctor: z.lazy(() => DoctorPartialWithRelationsSchema).array(),
				Patient: z.lazy(() => PatientPartialWithRelationsSchema).array(),
			})
			.partial(),
	)

export type UserWithPartialRelations = z.infer<typeof UserSchema> & UserPartialRelations

export const UserWithPartialRelationsSchema: z.ZodType<UserWithPartialRelations> = UserSchema.merge(
	z
		.object({
			sessions: z.lazy(() => SessionPartialWithRelationsSchema).array(),
			accounts: z.lazy(() => AccountPartialWithRelationsSchema).array(),
			Staff: z.lazy(() => StaffPartialWithRelationsSchema).array(),
			Doctor: z.lazy(() => DoctorPartialWithRelationsSchema).array(),
			Patient: z.lazy(() => PatientPartialWithRelationsSchema).array(),
		})
		.partial(),
)

export default UserSchema
