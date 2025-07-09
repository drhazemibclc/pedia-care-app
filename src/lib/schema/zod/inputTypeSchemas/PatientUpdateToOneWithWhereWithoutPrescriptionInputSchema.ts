import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientUncheckedUpdateWithoutPrescriptionInputSchema } from './PatientUncheckedUpdateWithoutPrescriptionInputSchema'
import { PatientUpdateWithoutPrescriptionInputSchema } from './PatientUpdateWithoutPrescriptionInputSchema'
import { PatientWhereInputSchema } from './PatientWhereInputSchema'

export const PatientUpdateToOneWithWhereWithoutPrescriptionInputSchema: z.ZodType<Prisma.PatientUpdateToOneWithWhereWithoutPrescriptionInput> =
	z
		.object({
			where: z.lazy(() => PatientWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => PatientUpdateWithoutPrescriptionInputSchema),
				z.lazy(() => PatientUncheckedUpdateWithoutPrescriptionInputSchema),
			]),
		})
		.strict()

export default PatientUpdateToOneWithWhereWithoutPrescriptionInputSchema
