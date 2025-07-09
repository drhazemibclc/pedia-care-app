import { z } from 'zod'

export const StatusSchema = z.enum(['ACTIVE', 'INACTIVE', 'DORMANT'])

export type StatusType = `${z.infer<typeof StatusSchema>}`

export default StatusSchema
