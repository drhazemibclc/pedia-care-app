import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientBillsScalarWhereInputSchema } from './PatientBillsScalarWhereInputSchema'
import { PatientBillsUncheckedUpdateManyWithoutServiceInputSchema } from './PatientBillsUncheckedUpdateManyWithoutServiceInputSchema'
import { PatientBillsUpdateManyMutationInputSchema } from './PatientBillsUpdateManyMutationInputSchema'

export const PatientBillsUpdateManyWithWhereWithoutServiceInputSchema: z.ZodType<Prisma.PatientBillsUpdateManyWithWhereWithoutServiceInput> =
	z
		.object({
			where: z.lazy(() => PatientBillsScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => PatientBillsUpdateManyMutationInputSchema),
				z.lazy(() => PatientBillsUncheckedUpdateManyWithoutServiceInputSchema),
			]),
		})
		.strict()

export default PatientBillsUpdateManyWithWhereWithoutServiceInputSchema
