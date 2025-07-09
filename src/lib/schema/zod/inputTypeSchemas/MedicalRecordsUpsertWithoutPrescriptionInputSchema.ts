import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { MedicalRecordsCreateWithoutPrescriptionInputSchema } from './MedicalRecordsCreateWithoutPrescriptionInputSchema'
import { MedicalRecordsUncheckedCreateWithoutPrescriptionInputSchema } from './MedicalRecordsUncheckedCreateWithoutPrescriptionInputSchema'
import { MedicalRecordsUncheckedUpdateWithoutPrescriptionInputSchema } from './MedicalRecordsUncheckedUpdateWithoutPrescriptionInputSchema'
import { MedicalRecordsUpdateWithoutPrescriptionInputSchema } from './MedicalRecordsUpdateWithoutPrescriptionInputSchema'
import { MedicalRecordsWhereInputSchema } from './MedicalRecordsWhereInputSchema'

export const MedicalRecordsUpsertWithoutPrescriptionInputSchema: z.ZodType<Prisma.MedicalRecordsUpsertWithoutPrescriptionInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => MedicalRecordsUpdateWithoutPrescriptionInputSchema),
				z.lazy(() => MedicalRecordsUncheckedUpdateWithoutPrescriptionInputSchema),
			]),
			create: z.union([
				z.lazy(() => MedicalRecordsCreateWithoutPrescriptionInputSchema),
				z.lazy(() => MedicalRecordsUncheckedCreateWithoutPrescriptionInputSchema),
			]),
			where: z.lazy(() => MedicalRecordsWhereInputSchema).optional(),
		})
		.strict()

export default MedicalRecordsUpsertWithoutPrescriptionInputSchema
