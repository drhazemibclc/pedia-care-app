import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientCreateOrConnectWithoutPrescriptionInputSchema } from './PatientCreateOrConnectWithoutPrescriptionInputSchema'
import { PatientCreateWithoutPrescriptionInputSchema } from './PatientCreateWithoutPrescriptionInputSchema'
import { PatientUncheckedCreateWithoutPrescriptionInputSchema } from './PatientUncheckedCreateWithoutPrescriptionInputSchema'
import { PatientWhereUniqueInputSchema } from './PatientWhereUniqueInputSchema'

export const PatientCreateNestedOneWithoutPrescriptionInputSchema: z.ZodType<Prisma.PatientCreateNestedOneWithoutPrescriptionInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => PatientCreateWithoutPrescriptionInputSchema),
					z.lazy(() => PatientUncheckedCreateWithoutPrescriptionInputSchema),
				])
				.optional(),
			connectOrCreate: z
				.lazy(() => PatientCreateOrConnectWithoutPrescriptionInputSchema)
				.optional(),
			connect: z.lazy(() => PatientWhereUniqueInputSchema).optional(),
		})
		.strict()

export default PatientCreateNestedOneWithoutPrescriptionInputSchema
