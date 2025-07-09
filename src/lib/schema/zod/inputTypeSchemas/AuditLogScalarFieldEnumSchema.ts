import { z } from 'zod'

export const AuditLogScalarFieldEnumSchema = z.enum([
	'id',
	'userId',
	'recordId',
	'action',
	'details',
	'model',
	'createdAt',
	'updatedAt',
])

export default AuditLogScalarFieldEnumSchema
