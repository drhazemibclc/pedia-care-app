import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DoctorCreateOrConnectWithoutDiagnosisInputSchema } from './DoctorCreateOrConnectWithoutDiagnosisInputSchema'
import { DoctorCreateWithoutDiagnosisInputSchema } from './DoctorCreateWithoutDiagnosisInputSchema'
import { DoctorUncheckedCreateWithoutDiagnosisInputSchema } from './DoctorUncheckedCreateWithoutDiagnosisInputSchema'
import { DoctorWhereUniqueInputSchema } from './DoctorWhereUniqueInputSchema'

export const DoctorCreateNestedOneWithoutDiagnosisInputSchema: z.ZodType<Prisma.DoctorCreateNestedOneWithoutDiagnosisInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => DoctorCreateWithoutDiagnosisInputSchema),
					z.lazy(() => DoctorUncheckedCreateWithoutDiagnosisInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => DoctorCreateOrConnectWithoutDiagnosisInputSchema).optional(),
			connect: z.lazy(() => DoctorWhereUniqueInputSchema).optional(),
		})
		.strict()

export default DoctorCreateNestedOneWithoutDiagnosisInputSchema
