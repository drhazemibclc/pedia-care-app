import { z } from 'zod'

/////////////////////////////////////////
// RATE LIMIT SCHEMA
/////////////////////////////////////////

export const RateLimitSchema = z.object({
	id: z.string(),
	key: z.string().nullish(),
	count: z.number().int().nullish(),
	lastRequest: z.bigint().nullish(),
})

export type RateLimit = z.infer<typeof RateLimitSchema>

/////////////////////////////////////////
// RATE LIMIT PARTIAL SCHEMA
/////////////////////////////////////////

export const RateLimitPartialSchema = RateLimitSchema.partial()

export type RateLimitPartial = z.infer<typeof RateLimitPartialSchema>

/////////////////////////////////////////
// RATE LIMIT OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const RateLimitOptionalDefaultsSchema = RateLimitSchema.merge(z.object({}))

export type RateLimitOptionalDefaults = z.infer<typeof RateLimitOptionalDefaultsSchema>

export default RateLimitSchema
