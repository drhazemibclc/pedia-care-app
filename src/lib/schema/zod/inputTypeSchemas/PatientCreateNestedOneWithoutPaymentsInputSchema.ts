import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientCreateOrConnectWithoutPaymentsInputSchema } from './PatientCreateOrConnectWithoutPaymentsInputSchema'
import { PatientCreateWithoutPaymentsInputSchema } from './PatientCreateWithoutPaymentsInputSchema'
import { PatientUncheckedCreateWithoutPaymentsInputSchema } from './PatientUncheckedCreateWithoutPaymentsInputSchema'
import { PatientWhereUniqueInputSchema } from './PatientWhereUniqueInputSchema'

export const PatientCreateNestedOneWithoutPaymentsInputSchema: z.ZodType<Prisma.PatientCreateNestedOneWithoutPaymentsInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => PatientCreateWithoutPaymentsInputSchema),
					z.lazy(() => PatientUncheckedCreateWithoutPaymentsInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => PatientCreateOrConnectWithoutPaymentsInputSchema).optional(),
			connect: z.lazy(() => PatientWhereUniqueInputSchema).optional(),
		})
		.strict()

export default PatientCreateNestedOneWithoutPaymentsInputSchema
