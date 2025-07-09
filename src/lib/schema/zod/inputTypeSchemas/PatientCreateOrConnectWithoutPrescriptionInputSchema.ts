import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientCreateWithoutPrescriptionInputSchema } from './PatientCreateWithoutPrescriptionInputSchema'
import { PatientUncheckedCreateWithoutPrescriptionInputSchema } from './PatientUncheckedCreateWithoutPrescriptionInputSchema'
import { PatientWhereUniqueInputSchema } from './PatientWhereUniqueInputSchema'

export const PatientCreateOrConnectWithoutPrescriptionInputSchema: z.ZodType<Prisma.PatientCreateOrConnectWithoutPrescriptionInput> =
	z
		.object({
			where: z.lazy(() => PatientWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => PatientCreateWithoutPrescriptionInputSchema),
				z.lazy(() => PatientUncheckedCreateWithoutPrescriptionInputSchema),
			]),
		})
		.strict()

export default PatientCreateOrConnectWithoutPrescriptionInputSchema
