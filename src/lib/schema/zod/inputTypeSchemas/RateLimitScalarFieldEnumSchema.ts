import { z } from 'zod'

export const RateLimitScalarFieldEnumSchema = z.enum(['id', 'key', 'count', 'lastRequest'])

export default RateLimitScalarFieldEnumSchema
