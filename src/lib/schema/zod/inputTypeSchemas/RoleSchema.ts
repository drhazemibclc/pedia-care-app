import { z } from 'zod'

export const RoleSchema = z.enum([
	'ADMIN',
	'NURSE',
	'DOCTOR',
	'LAB_TECHNICIAN',
	'PATIENT',
	'CASHIER',
])

export type RoleType = `${z.infer<typeof RoleSchema>}`

export default RoleSchema
