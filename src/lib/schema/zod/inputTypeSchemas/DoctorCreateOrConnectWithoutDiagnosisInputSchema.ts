import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DoctorCreateWithoutDiagnosisInputSchema } from './DoctorCreateWithoutDiagnosisInputSchema'
import { DoctorUncheckedCreateWithoutDiagnosisInputSchema } from './DoctorUncheckedCreateWithoutDiagnosisInputSchema'
import { DoctorWhereUniqueInputSchema } from './DoctorWhereUniqueInputSchema'

export const DoctorCreateOrConnectWithoutDiagnosisInputSchema: z.ZodType<Prisma.DoctorCreateOrConnectWithoutDiagnosisInput> =
	z
		.object({
			where: z.lazy(() => DoctorWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => DoctorCreateWithoutDiagnosisInputSchema),
				z.lazy(() => DoctorUncheckedCreateWithoutDiagnosisInputSchema),
			]),
		})
		.strict()

export default DoctorCreateOrConnectWithoutDiagnosisInputSchema
