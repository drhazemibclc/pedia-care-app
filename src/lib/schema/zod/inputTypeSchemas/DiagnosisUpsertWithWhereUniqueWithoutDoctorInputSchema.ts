import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DiagnosisCreateWithoutDoctorInputSchema } from './DiagnosisCreateWithoutDoctorInputSchema'
import { DiagnosisUncheckedCreateWithoutDoctorInputSchema } from './DiagnosisUncheckedCreateWithoutDoctorInputSchema'
import { DiagnosisUncheckedUpdateWithoutDoctorInputSchema } from './DiagnosisUncheckedUpdateWithoutDoctorInputSchema'
import { DiagnosisUpdateWithoutDoctorInputSchema } from './DiagnosisUpdateWithoutDoctorInputSchema'
import { DiagnosisWhereUniqueInputSchema } from './DiagnosisWhereUniqueInputSchema'

export const DiagnosisUpsertWithWhereUniqueWithoutDoctorInputSchema: z.ZodType<Prisma.DiagnosisUpsertWithWhereUniqueWithoutDoctorInput> =
	z
		.object({
			where: z.lazy(() => DiagnosisWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => DiagnosisUpdateWithoutDoctorInputSchema),
				z.lazy(() => DiagnosisUncheckedUpdateWithoutDoctorInputSchema),
			]),
			create: z.union([
				z.lazy(() => DiagnosisCreateWithoutDoctorInputSchema),
				z.lazy(() => DiagnosisUncheckedCreateWithoutDoctorInputSchema),
			]),
		})
		.strict()

export default DiagnosisUpsertWithWhereUniqueWithoutDoctorInputSchema
