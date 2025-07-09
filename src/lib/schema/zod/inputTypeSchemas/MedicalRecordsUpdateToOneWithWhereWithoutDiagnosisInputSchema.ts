import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { MedicalRecordsUncheckedUpdateWithoutDiagnosisInputSchema } from './MedicalRecordsUncheckedUpdateWithoutDiagnosisInputSchema'
import { MedicalRecordsUpdateWithoutDiagnosisInputSchema } from './MedicalRecordsUpdateWithoutDiagnosisInputSchema'
import { MedicalRecordsWhereInputSchema } from './MedicalRecordsWhereInputSchema'

export const MedicalRecordsUpdateToOneWithWhereWithoutDiagnosisInputSchema: z.ZodType<Prisma.MedicalRecordsUpdateToOneWithWhereWithoutDiagnosisInput> =
	z
		.object({
			where: z.lazy(() => MedicalRecordsWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => MedicalRecordsUpdateWithoutDiagnosisInputSchema),
				z.lazy(() => MedicalRecordsUncheckedUpdateWithoutDiagnosisInputSchema),
			]),
		})
		.strict()

export default MedicalRecordsUpdateToOneWithWhereWithoutDiagnosisInputSchema
