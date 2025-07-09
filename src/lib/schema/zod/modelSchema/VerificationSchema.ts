import { z } from 'zod'

/////////////////////////////////////////
// VERIFICATION SCHEMA
/////////////////////////////////////////

export const VerificationSchema = z.object({
	id: z.string(),
	identifier: z.string(),
	value: z.string(),
	expiresAt: z.coerce.date(),
	createdAt: z.coerce.date().nullish(),
	updatedAt: z.coerce.date().nullish(),
})

export type Verification = z.infer<typeof VerificationSchema>

/////////////////////////////////////////
// VERIFICATION PARTIAL SCHEMA
/////////////////////////////////////////

export const VerificationPartialSchema = VerificationSchema.partial()

export type VerificationPartial = z.infer<typeof VerificationPartialSchema>

/////////////////////////////////////////
// VERIFICATION OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const VerificationOptionalDefaultsSchema = VerificationSchema.merge(z.object({}))

export type VerificationOptionalDefaults = z.infer<typeof VerificationOptionalDefaultsSchema>

export default VerificationSchema
