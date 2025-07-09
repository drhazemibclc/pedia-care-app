import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientCreateWithoutMedicalInputSchema } from './PatientCreateWithoutMedicalInputSchema'
import { PatientUncheckedCreateWithoutMedicalInputSchema } from './PatientUncheckedCreateWithoutMedicalInputSchema'
import { PatientUncheckedUpdateWithoutMedicalInputSchema } from './PatientUncheckedUpdateWithoutMedicalInputSchema'
import { PatientUpdateWithoutMedicalInputSchema } from './PatientUpdateWithoutMedicalInputSchema'
import { PatientWhereInputSchema } from './PatientWhereInputSchema'

export const PatientUpsertWithoutMedicalInputSchema: z.ZodType<Prisma.PatientUpsertWithoutMedicalInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => PatientUpdateWithoutMedicalInputSchema),
				z.lazy(() => PatientUncheckedUpdateWithoutMedicalInputSchema),
			]),
			create: z.union([
				z.lazy(() => PatientCreateWithoutMedicalInputSchema),
				z.lazy(() => PatientUncheckedCreateWithoutMedicalInputSchema),
			]),
			where: z.lazy(() => PatientWhereInputSchema).optional(),
		})
		.strict()

export default PatientUpsertWithoutMedicalInputSchema
