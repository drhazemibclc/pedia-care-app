import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DiagnosisUncheckedUpdateWithoutDoctorInputSchema } from './DiagnosisUncheckedUpdateWithoutDoctorInputSchema'
import { DiagnosisUpdateWithoutDoctorInputSchema } from './DiagnosisUpdateWithoutDoctorInputSchema'
import { DiagnosisWhereUniqueInputSchema } from './DiagnosisWhereUniqueInputSchema'

export const DiagnosisUpdateWithWhereUniqueWithoutDoctorInputSchema: z.ZodType<Prisma.DiagnosisUpdateWithWhereUniqueWithoutDoctorInput> =
	z
		.object({
			where: z.lazy(() => DiagnosisWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => DiagnosisUpdateWithoutDoctorInputSchema),
				z.lazy(() => DiagnosisUncheckedUpdateWithoutDoctorInputSchema),
			]),
		})
		.strict()

export default DiagnosisUpdateWithWhereUniqueWithoutDoctorInputSchema
