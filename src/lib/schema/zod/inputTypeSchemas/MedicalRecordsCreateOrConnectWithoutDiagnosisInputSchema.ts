import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { MedicalRecordsCreateWithoutDiagnosisInputSchema } from './MedicalRecordsCreateWithoutDiagnosisInputSchema'
import { MedicalRecordsUncheckedCreateWithoutDiagnosisInputSchema } from './MedicalRecordsUncheckedCreateWithoutDiagnosisInputSchema'
import { MedicalRecordsWhereUniqueInputSchema } from './MedicalRecordsWhereUniqueInputSchema'

export const MedicalRecordsCreateOrConnectWithoutDiagnosisInputSchema: z.ZodType<Prisma.MedicalRecordsCreateOrConnectWithoutDiagnosisInput> =
	z
		.object({
			where: z.lazy(() => MedicalRecordsWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => MedicalRecordsCreateWithoutDiagnosisInputSchema),
				z.lazy(() => MedicalRecordsUncheckedCreateWithoutDiagnosisInputSchema),
			]),
		})
		.strict()

export default MedicalRecordsCreateOrConnectWithoutDiagnosisInputSchema
