import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { MedicalRecordsUncheckedUpdateWithoutPrescriptionInputSchema } from './MedicalRecordsUncheckedUpdateWithoutPrescriptionInputSchema'
import { MedicalRecordsUpdateWithoutPrescriptionInputSchema } from './MedicalRecordsUpdateWithoutPrescriptionInputSchema'
import { MedicalRecordsWhereInputSchema } from './MedicalRecordsWhereInputSchema'

export const MedicalRecordsUpdateToOneWithWhereWithoutPrescriptionInputSchema: z.ZodType<Prisma.MedicalRecordsUpdateToOneWithWhereWithoutPrescriptionInput> =
	z
		.object({
			where: z.lazy(() => MedicalRecordsWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => MedicalRecordsUpdateWithoutPrescriptionInputSchema),
				z.lazy(() => MedicalRecordsUncheckedUpdateWithoutPrescriptionInputSchema),
			]),
		})
		.strict()

export default MedicalRecordsUpdateToOneWithWhereWithoutPrescriptionInputSchema
