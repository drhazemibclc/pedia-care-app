import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DiagnosisCreateManyMedicalInputEnvelopeSchema } from './DiagnosisCreateManyMedicalInputEnvelopeSchema'
import { DiagnosisCreateOrConnectWithoutMedicalInputSchema } from './DiagnosisCreateOrConnectWithoutMedicalInputSchema'
import { DiagnosisCreateWithoutMedicalInputSchema } from './DiagnosisCreateWithoutMedicalInputSchema'
import { DiagnosisUncheckedCreateWithoutMedicalInputSchema } from './DiagnosisUncheckedCreateWithoutMedicalInputSchema'
import { DiagnosisWhereUniqueInputSchema } from './DiagnosisWhereUniqueInputSchema'

export const DiagnosisCreateNestedManyWithoutMedicalInputSchema: z.ZodType<Prisma.DiagnosisCreateNestedManyWithoutMedicalInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => DiagnosisCreateWithoutMedicalInputSchema),
					z.lazy(() => DiagnosisCreateWithoutMedicalInputSchema).array(),
					z.lazy(() => DiagnosisUncheckedCreateWithoutMedicalInputSchema),
					z.lazy(() => DiagnosisUncheckedCreateWithoutMedicalInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => DiagnosisCreateOrConnectWithoutMedicalInputSchema),
					z.lazy(() => DiagnosisCreateOrConnectWithoutMedicalInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => DiagnosisCreateManyMedicalInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => DiagnosisWhereUniqueInputSchema),
					z.lazy(() => DiagnosisWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict()

export default DiagnosisCreateNestedManyWithoutMedicalInputSchema
