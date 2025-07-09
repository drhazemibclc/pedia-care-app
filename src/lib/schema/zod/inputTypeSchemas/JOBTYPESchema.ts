import { z } from 'zod'

export const JOBTYPESchema = z.enum(['FULL', 'PART'])

export type JOBTYPEType = `${z.infer<typeof JOBTYPESchema>}`

export default JOBTYPESchema
