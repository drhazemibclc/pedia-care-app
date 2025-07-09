import { z } from 'zod'

/////////////////////////////////////////
// AUDIT LOG SCHEMA
/////////////////////////////////////////

export const AuditLogSchema = z.object({
	id: z.number().int(),
	userId: z.string(),
	recordId: z.string(),
	action: z.string(),
	details: z.string().nullish(),
	model: z.string(),
	createdAt: z.coerce.date(),
	updatedAt: z.coerce.date(),
})

export type AuditLog = z.infer<typeof AuditLogSchema>

/////////////////////////////////////////
// AUDIT LOG PARTIAL SCHEMA
/////////////////////////////////////////

export const AuditLogPartialSchema = AuditLogSchema.partial()

export type AuditLogPartial = z.infer<typeof AuditLogPartialSchema>

/////////////////////////////////////////
// AUDIT LOG OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const AuditLogOptionalDefaultsSchema = AuditLogSchema.merge(
	z.object({
		id: z.number().int().optional(),
		createdAt: z.coerce.date().optional(),
		updatedAt: z.coerce.date().optional(),
	}),
)

export type AuditLogOptionalDefaults = z.infer<typeof AuditLogOptionalDefaultsSchema>

export default AuditLogSchema
