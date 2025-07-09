import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DiagnosisCreateManyDoctorInputEnvelopeSchema } from './DiagnosisCreateManyDoctorInputEnvelopeSchema'
import { DiagnosisCreateOrConnectWithoutDoctorInputSchema } from './DiagnosisCreateOrConnectWithoutDoctorInputSchema'
import { DiagnosisCreateWithoutDoctorInputSchema } from './DiagnosisCreateWithoutDoctorInputSchema'
import { DiagnosisUncheckedCreateWithoutDoctorInputSchema } from './DiagnosisUncheckedCreateWithoutDoctorInputSchema'
import { DiagnosisWhereUniqueInputSchema } from './DiagnosisWhereUniqueInputSchema'

export const DiagnosisCreateNestedManyWithoutDoctorInputSchema: z.ZodType<Prisma.DiagnosisCreateNestedManyWithoutDoctorInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => DiagnosisCreateWithoutDoctorInputSchema),
					z.lazy(() => DiagnosisCreateWithoutDoctorInputSchema).array(),
					z.lazy(() => DiagnosisUncheckedCreateWithoutDoctorInputSchema),
					z.lazy(() => DiagnosisUncheckedCreateWithoutDoctorInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => DiagnosisCreateOrConnectWithoutDoctorInputSchema),
					z.lazy(() => DiagnosisCreateOrConnectWithoutDoctorInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => DiagnosisCreateManyDoctorInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => DiagnosisWhereUniqueInputSchema),
					z.lazy(() => DiagnosisWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict()

export default DiagnosisCreateNestedManyWithoutDoctorInputSchema
