import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientUncheckedUpdateWithoutMedicalInputSchema } from './PatientUncheckedUpdateWithoutMedicalInputSchema'
import { PatientUpdateWithoutMedicalInputSchema } from './PatientUpdateWithoutMedicalInputSchema'
import { PatientWhereInputSchema } from './PatientWhereInputSchema'

export const PatientUpdateToOneWithWhereWithoutMedicalInputSchema: z.ZodType<Prisma.PatientUpdateToOneWithWhereWithoutMedicalInput> =
	z
		.object({
			where: z.lazy(() => PatientWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => PatientUpdateWithoutMedicalInputSchema),
				z.lazy(() => PatientUncheckedUpdateWithoutMedicalInputSchema),
			]),
		})
		.strict()

export default PatientUpdateToOneWithWhereWithoutMedicalInputSchema
