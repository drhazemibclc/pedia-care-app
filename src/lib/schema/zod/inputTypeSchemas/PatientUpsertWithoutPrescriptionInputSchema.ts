import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientCreateWithoutPrescriptionInputSchema } from './PatientCreateWithoutPrescriptionInputSchema'
import { PatientUncheckedCreateWithoutPrescriptionInputSchema } from './PatientUncheckedCreateWithoutPrescriptionInputSchema'
import { PatientUncheckedUpdateWithoutPrescriptionInputSchema } from './PatientUncheckedUpdateWithoutPrescriptionInputSchema'
import { PatientUpdateWithoutPrescriptionInputSchema } from './PatientUpdateWithoutPrescriptionInputSchema'
import { PatientWhereInputSchema } from './PatientWhereInputSchema'

export const PatientUpsertWithoutPrescriptionInputSchema: z.ZodType<Prisma.PatientUpsertWithoutPrescriptionInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => PatientUpdateWithoutPrescriptionInputSchema),
				z.lazy(() => PatientUncheckedUpdateWithoutPrescriptionInputSchema),
			]),
			create: z.union([
				z.lazy(() => PatientCreateWithoutPrescriptionInputSchema),
				z.lazy(() => PatientUncheckedCreateWithoutPrescriptionInputSchema),
			]),
			where: z.lazy(() => PatientWhereInputSchema).optional(),
		})
		.strict()

export default PatientUpsertWithoutPrescriptionInputSchema
