import { z } from 'zod'

export const PaymentScalarFieldEnumSchema = z.enum([
	'id',
	'billId',
	'patientId',
	'appointmentId',
	'billDate',
	'paymentDate',
	'discount',
	'totalAmount',
	'amountPaid',
	'paymentMethod',
	'status',
	'receiptNumber',
	'createdAt',
	'updatedAt',
])

export default PaymentScalarFieldEnumSchema
