import { z } from 'zod'

export const PaymentMethodSchema = z.enum(['CASH', 'CARD', 'MOBILE'])

export type PaymentMethodType = `${z.infer<typeof PaymentMethodSchema>}`

export default PaymentMethodSchema
