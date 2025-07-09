import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DiagnosisUncheckedUpdateWithoutMedicalInputSchema } from './DiagnosisUncheckedUpdateWithoutMedicalInputSchema'
import { DiagnosisUpdateWithoutMedicalInputSchema } from './DiagnosisUpdateWithoutMedicalInputSchema'
import { DiagnosisWhereUniqueInputSchema } from './DiagnosisWhereUniqueInputSchema'

export const DiagnosisUpdateWithWhereUniqueWithoutMedicalInputSchema: z.ZodType<Prisma.DiagnosisUpdateWithWhereUniqueWithoutMedicalInput> =
	z
		.object({
			where: z.lazy(() => DiagnosisWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => DiagnosisUpdateWithoutMedicalInputSchema),
				z.lazy(() => DiagnosisUncheckedUpdateWithoutMedicalInputSchema),
			]),
		})
		.strict()

export default DiagnosisUpdateWithWhereUniqueWithoutMedicalInputSchema
