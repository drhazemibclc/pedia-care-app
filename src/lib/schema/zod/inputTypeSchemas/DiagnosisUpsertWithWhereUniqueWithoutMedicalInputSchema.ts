import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DiagnosisCreateWithoutMedicalInputSchema } from './DiagnosisCreateWithoutMedicalInputSchema'
import { DiagnosisUncheckedCreateWithoutMedicalInputSchema } from './DiagnosisUncheckedCreateWithoutMedicalInputSchema'
import { DiagnosisUncheckedUpdateWithoutMedicalInputSchema } from './DiagnosisUncheckedUpdateWithoutMedicalInputSchema'
import { DiagnosisUpdateWithoutMedicalInputSchema } from './DiagnosisUpdateWithoutMedicalInputSchema'
import { DiagnosisWhereUniqueInputSchema } from './DiagnosisWhereUniqueInputSchema'

export const DiagnosisUpsertWithWhereUniqueWithoutMedicalInputSchema: z.ZodType<Prisma.DiagnosisUpsertWithWhereUniqueWithoutMedicalInput> =
	z
		.object({
			where: z.lazy(() => DiagnosisWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => DiagnosisUpdateWithoutMedicalInputSchema),
				z.lazy(() => DiagnosisUncheckedUpdateWithoutMedicalInputSchema),
			]),
			create: z.union([
				z.lazy(() => DiagnosisCreateWithoutMedicalInputSchema),
				z.lazy(() => DiagnosisUncheckedCreateWithoutMedicalInputSchema),
			]),
		})
		.strict()

export default DiagnosisUpsertWithWhereUniqueWithoutMedicalInputSchema
