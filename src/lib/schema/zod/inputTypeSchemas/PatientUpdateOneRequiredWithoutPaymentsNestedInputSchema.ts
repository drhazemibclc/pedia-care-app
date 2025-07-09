import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientCreateOrConnectWithoutPaymentsInputSchema } from './PatientCreateOrConnectWithoutPaymentsInputSchema'
import { PatientCreateWithoutPaymentsInputSchema } from './PatientCreateWithoutPaymentsInputSchema'
import { PatientUncheckedCreateWithoutPaymentsInputSchema } from './PatientUncheckedCreateWithoutPaymentsInputSchema'
import { PatientUncheckedUpdateWithoutPaymentsInputSchema } from './PatientUncheckedUpdateWithoutPaymentsInputSchema'
import { PatientUpdateToOneWithWhereWithoutPaymentsInputSchema } from './PatientUpdateToOneWithWhereWithoutPaymentsInputSchema'
import { PatientUpdateWithoutPaymentsInputSchema } from './PatientUpdateWithoutPaymentsInputSchema'
import { PatientUpsertWithoutPaymentsInputSchema } from './PatientUpsertWithoutPaymentsInputSchema'
import { PatientWhereUniqueInputSchema } from './PatientWhereUniqueInputSchema'

export const PatientUpdateOneRequiredWithoutPaymentsNestedInputSchema: z.ZodType<Prisma.PatientUpdateOneRequiredWithoutPaymentsNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => PatientCreateWithoutPaymentsInputSchema),
					z.lazy(() => PatientUncheckedCreateWithoutPaymentsInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => PatientCreateOrConnectWithoutPaymentsInputSchema).optional(),
			upsert: z.lazy(() => PatientUpsertWithoutPaymentsInputSchema).optional(),
			connect: z.lazy(() => PatientWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => PatientUpdateToOneWithWhereWithoutPaymentsInputSchema),
					z.lazy(() => PatientUpdateWithoutPaymentsInputSchema),
					z.lazy(() => PatientUncheckedUpdateWithoutPaymentsInputSchema),
				])
				.optional(),
		})
		.strict()

export default PatientUpdateOneRequiredWithoutPaymentsNestedInputSchema
