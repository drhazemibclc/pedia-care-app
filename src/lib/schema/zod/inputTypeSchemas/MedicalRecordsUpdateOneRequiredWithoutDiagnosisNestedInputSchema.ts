import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { MedicalRecordsCreateOrConnectWithoutDiagnosisInputSchema } from './MedicalRecordsCreateOrConnectWithoutDiagnosisInputSchema'
import { MedicalRecordsCreateWithoutDiagnosisInputSchema } from './MedicalRecordsCreateWithoutDiagnosisInputSchema'
import { MedicalRecordsUncheckedCreateWithoutDiagnosisInputSchema } from './MedicalRecordsUncheckedCreateWithoutDiagnosisInputSchema'
import { MedicalRecordsUncheckedUpdateWithoutDiagnosisInputSchema } from './MedicalRecordsUncheckedUpdateWithoutDiagnosisInputSchema'
import { MedicalRecordsUpdateToOneWithWhereWithoutDiagnosisInputSchema } from './MedicalRecordsUpdateToOneWithWhereWithoutDiagnosisInputSchema'
import { MedicalRecordsUpdateWithoutDiagnosisInputSchema } from './MedicalRecordsUpdateWithoutDiagnosisInputSchema'
import { MedicalRecordsUpsertWithoutDiagnosisInputSchema } from './MedicalRecordsUpsertWithoutDiagnosisInputSchema'
import { MedicalRecordsWhereUniqueInputSchema } from './MedicalRecordsWhereUniqueInputSchema'

export const MedicalRecordsUpdateOneRequiredWithoutDiagnosisNestedInputSchema: z.ZodType<Prisma.MedicalRecordsUpdateOneRequiredWithoutDiagnosisNestedInput> =
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
			upsert: z.lazy(() => MedicalRecordsUpsertWithoutDiagnosisInputSchema).optional(),
			connect: z.lazy(() => MedicalRecordsWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => MedicalRecordsUpdateToOneWithWhereWithoutDiagnosisInputSchema),
					z.lazy(() => MedicalRecordsUpdateWithoutDiagnosisInputSchema),
					z.lazy(() => MedicalRecordsUncheckedUpdateWithoutDiagnosisInputSchema),
				])
				.optional(),
		})
		.strict()

export default MedicalRecordsUpdateOneRequiredWithoutDiagnosisNestedInputSchema
