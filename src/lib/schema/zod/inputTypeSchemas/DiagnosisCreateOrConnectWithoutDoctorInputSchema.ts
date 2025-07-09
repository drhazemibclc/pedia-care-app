import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DiagnosisCreateWithoutDoctorInputSchema } from './DiagnosisCreateWithoutDoctorInputSchema'
import { DiagnosisUncheckedCreateWithoutDoctorInputSchema } from './DiagnosisUncheckedCreateWithoutDoctorInputSchema'
import { DiagnosisWhereUniqueInputSchema } from './DiagnosisWhereUniqueInputSchema'

export const DiagnosisCreateOrConnectWithoutDoctorInputSchema: z.ZodType<Prisma.DiagnosisCreateOrConnectWithoutDoctorInput> =
	z
		.object({
			where: z.lazy(() => DiagnosisWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => DiagnosisCreateWithoutDoctorInputSchema),
				z.lazy(() => DiagnosisUncheckedCreateWithoutDoctorInputSchema),
			]),
		})
		.strict()

export default DiagnosisCreateOrConnectWithoutDoctorInputSchema
