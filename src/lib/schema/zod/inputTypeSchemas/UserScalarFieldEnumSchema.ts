import { z } from 'zod'

export const UserScalarFieldEnumSchema = z.enum([
	'id',
	'name',
	'email',
	'emailVerified',
	'image',
	'createdAt',
	'updatedAt',
	'role',
	'banned',
	'banReason',
	'banExpires',
])

export default UserScalarFieldEnumSchema
