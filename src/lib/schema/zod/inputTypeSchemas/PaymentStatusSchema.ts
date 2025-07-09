import { z } from 'zod'

export const PaymentStatusSchema = z.enum(['PAID', 'UNPAID', 'PARTIAL', 'REFUNDED'])

export type PaymentStatusType = `${z.infer<typeof PaymentStatusSchema>}`

export default PaymentStatusSchema
