import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentArgsSchema } from '../outputTypeSchemas/AppointmentArgsSchema'
import { PatientArgsSchema } from '../outputTypeSchemas/PatientArgsSchema'
import { PatientBillsFindManyArgsSchema } from '../outputTypeSchemas/PatientBillsFindManyArgsSchema'
import { PaymentCountOutputTypeArgsSchema } from '../outputTypeSchemas/PaymentCountOutputTypeArgsSchema'

export const PaymentIncludeSchema: z.ZodType<Prisma.PaymentInclude> = z
	.object({
		appointment: z.union([z.boolean(), z.lazy(() => AppointmentArgsSchema)]).optional(),
		patient: z.union([z.boolean(), z.lazy(() => PatientArgsSchema)]).optional(),
		bills: z.union([z.boolean(), z.lazy(() => PatientBillsFindManyArgsSchema)]).optional(),
		_count: z.union([z.boolean(), z.lazy(() => PaymentCountOutputTypeArgsSchema)]).optional(),
	})
	.strict()

export default PaymentIncludeSchema
