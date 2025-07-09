import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DiagnosisCreateWithoutMedicalInputSchema } from './DiagnosisCreateWithoutMedicalInputSchema'
import { DiagnosisUncheckedCreateWithoutMedicalInputSchema } from './DiagnosisUncheckedCreateWithoutMedicalInputSchema'
import { DiagnosisWhereUniqueInputSchema } from './DiagnosisWhereUniqueInputSchema'

export const DiagnosisCreateOrConnectWithoutMedicalInputSchema: z.ZodType<Prisma.DiagnosisCreateOrConnectWithoutMedicalInput> =
	z
		.object({
			where: z.lazy(() => DiagnosisWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => DiagnosisCreateWithoutMedicalInputSchema),
				z.lazy(() => DiagnosisUncheckedCreateWithoutMedicalInputSchema),
			]),
		})
		.strict()

export default DiagnosisCreateOrConnectWithoutMedicalInputSchema
