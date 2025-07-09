import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientBillsScalarWhereInputSchema } from './PatientBillsScalarWhereInputSchema'
import { PatientBillsUncheckedUpdateManyWithoutPaymentInputSchema } from './PatientBillsUncheckedUpdateManyWithoutPaymentInputSchema'
import { PatientBillsUpdateManyMutationInputSchema } from './PatientBillsUpdateManyMutationInputSchema'

export const PatientBillsUpdateManyWithWhereWithoutPaymentInputSchema: z.ZodType<Prisma.PatientBillsUpdateManyWithWhereWithoutPaymentInput> =
	z
		.object({
			where: z.lazy(() => PatientBillsScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => PatientBillsUpdateManyMutationInputSchema),
				z.lazy(() => PatientBillsUncheckedUpdateManyWithoutPaymentInputSchema),
			]),
		})
		.strict()

export default PatientBillsUpdateManyWithWhereWithoutPaymentInputSchema
