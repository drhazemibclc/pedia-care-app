import { z } from 'zod'

export const AppointmentStatusSchema = z.enum(['PENDING', 'SCHEDULED', 'CANCELLED', 'COMPLETED'])

export type AppointmentStatusType = `${z.infer<typeof AppointmentStatusSchema>}`

export default AppointmentStatusSchema
