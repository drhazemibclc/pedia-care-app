import { z } from 'zod'

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

/////////////////////////////////////////
// ACCOUNT SCHEMA
/////////////////////////////////////////

export const AccountSchema = z.object({
	id: z.string(),
	accountId: z.string(),
	providerId: z.string(),
	userId: z.string(),
	accessToken: z.string().nullish(),
	refreshToken: z.string().nullish(),
	idToken: z.string().nullish(),
	accessTokenExpiresAt: z.coerce.date().nullish(),
	refreshTokenExpiresAt: z.coerce.date().nullish(),
	scope: z.string().nullish(),
	password: z.string().nullish(),
	createdAt: z.coerce.date(),
	updatedAt: z.coerce.date(),
})

export type Account = z.infer<typeof AccountSchema>

/////////////////////////////////////////
// ACCOUNT PARTIAL SCHEMA
/////////////////////////////////////////

export const AccountPartialSchema = AccountSchema.partial()

export type AccountPartial = z.infer<typeof AccountPartialSchema>

/////////////////////////////////////////
// ACCOUNT OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const AccountOptionalDefaultsSchema = AccountSchema.merge(z.object({}))

export type AccountOptionalDefaults = z.infer<typeof AccountOptionalDefaultsSchema>

/////////////////////////////////////////
// ACCOUNT RELATION SCHEMA
/////////////////////////////////////////

export type AccountRelations = {
	user: UserWithRelations
}

export type AccountWithRelations = z.infer<typeof AccountSchema> & AccountRelations

export const AccountWithRelationsSchema: z.ZodType<AccountWithRelations> = AccountSchema.merge(
	z.object({
		user: z.lazy(() => UserWithRelationsSchema),
	}),
)

/////////////////////////////////////////
// ACCOUNT OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type AccountOptionalDefaultsRelations = {
	user: UserOptionalDefaultsWithRelations
}

export type AccountOptionalDefaultsWithRelations = z.infer<typeof AccountOptionalDefaultsSchema> &
	AccountOptionalDefaultsRelations

export const AccountOptionalDefaultsWithRelationsSchema: z.ZodType<AccountOptionalDefaultsWithRelations> =
	AccountOptionalDefaultsSchema.merge(
		z.object({
			user: z.lazy(() => UserOptionalDefaultsWithRelationsSchema),
		}),
	)

/////////////////////////////////////////
// ACCOUNT PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type AccountPartialRelations = {
	user?: UserPartialWithRelations
}

export type AccountPartialWithRelations = z.infer<typeof AccountPartialSchema> &
	AccountPartialRelations

export const AccountPartialWithRelationsSchema: z.ZodType<AccountPartialWithRelations> =
	AccountPartialSchema.merge(
		z.object({
			user: z.lazy(() => UserPartialWithRelationsSchema),
		}),
	).partial()

export type AccountOptionalDefaultsWithPartialRelations = z.infer<
	typeof AccountOptionalDefaultsSchema
> &
	AccountPartialRelations

export const AccountOptionalDefaultsWithPartialRelationsSchema: z.ZodType<AccountOptionalDefaultsWithPartialRelations> =
	AccountOptionalDefaultsSchema.merge(
		z
			.object({
				user: z.lazy(() => UserPartialWithRelationsSchema),
			})
			.partial(),
	)

export type AccountWithPartialRelations = z.infer<typeof AccountSchema> & AccountPartialRelations

export const AccountWithPartialRelationsSchema: z.ZodType<AccountWithPartialRelations> =
	AccountSchema.merge(
		z
			.object({
				user: z.lazy(() => UserPartialWithRelationsSchema),
			})
			.partial(),
	)

export default AccountSchema
