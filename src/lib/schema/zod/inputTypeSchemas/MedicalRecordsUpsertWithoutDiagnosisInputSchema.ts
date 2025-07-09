import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { MedicalRecordsCreateWithoutDiagnosisInputSchema } from './MedicalRecordsCreateWithoutDiagnosisInputSchema'
import { MedicalRecordsUncheckedCreateWithoutDiagnosisInputSchema } from './MedicalRecordsUncheckedCreateWithoutDiagnosisInputSchema'
import { MedicalRecordsUncheckedUpdateWithoutDiagnosisInputSchema } from './MedicalRecordsUncheckedUpdateWithoutDiagnosisInputSchema'
import { MedicalRecordsUpdateWithoutDiagnosisInputSchema } from './MedicalRecordsUpdateWithoutDiagnosisInputSchema'
import { MedicalRecordsWhereInputSchema } from './MedicalRecordsWhereInputSchema'

export const MedicalRecordsUpsertWithoutDiagnosisInputSchema: z.ZodType<Prisma.MedicalRecordsUpsertWithoutDiagnosisInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => MedicalRecordsUpdateWithoutDiagnosisInputSchema),
				z.lazy(() => MedicalRecordsUncheckedUpdateWithoutDiagnosisInputSchema),
			]),
			create: z.union([
				z.lazy(() => MedicalRecordsCreateWithoutDiagnosisInputSchema),
				z.lazy(() => MedicalRecordsUncheckedCreateWithoutDiagnosisInputSchema),
			]),
			where: z.lazy(() => MedicalRecordsWhereInputSchema).optional(),
		})
		.strict()

export default MedicalRecordsUpsertWithoutDiagnosisInputSchema
