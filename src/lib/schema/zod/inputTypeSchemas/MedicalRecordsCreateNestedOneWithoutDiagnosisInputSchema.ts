import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { MedicalRecordsCreateOrConnectWithoutDiagnosisInputSchema } from './MedicalRecordsCreateOrConnectWithoutDiagnosisInputSchema'
import { MedicalRecordsCreateWithoutDiagnosisInputSchema } from './MedicalRecordsCreateWithoutDiagnosisInputSchema'
import { MedicalRecordsUncheckedCreateWithoutDiagnosisInputSchema } from './MedicalRecordsUncheckedCreateWithoutDiagnosisInputSchema'
import { MedicalRecordsWhereUniqueInputSchema } from './MedicalRecordsWhereUniqueInputSchema'

export const MedicalRecordsCreateNestedOneWithoutDiagnosisInputSchema: z.ZodType<Prisma.MedicalRecordsCreateNestedOneWithoutDiagnosisInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => MedicalRecordsCreateWithoutDiagnosisInputSchema),
					z.lazy(() => MedicalRecordsUncheckedCreateWithoutDiagnosisInputSchema),
				])
				.optional(),
			connectOrCreate: z
				.lazy(() => MedicalRecordsCreateOrConnectWithoutDiagnosisInputSchema)
				.optional(),
			connect: z.lazy(() => MedicalRecordsWhereUniqueInputSchema).optional(),
		})
		.strict()

export default MedicalRecordsCreateNestedOneWithoutDiagnosisInputSchema
