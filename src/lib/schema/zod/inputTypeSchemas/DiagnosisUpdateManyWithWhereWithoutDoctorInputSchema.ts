import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DiagnosisScalarWhereInputSchema } from './DiagnosisScalarWhereInputSchema'
import { DiagnosisUncheckedUpdateManyWithoutDoctorInputSchema } from './DiagnosisUncheckedUpdateManyWithoutDoctorInputSchema'
import { DiagnosisUpdateManyMutationInputSchema } from './DiagnosisUpdateManyMutationInputSchema'

export const DiagnosisUpdateManyWithWhereWithoutDoctorInputSchema: z.ZodType<Prisma.DiagnosisUpdateManyWithWhereWithoutDoctorInput> =
	z
		.object({
			where: z.lazy(() => DiagnosisScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => DiagnosisUpdateManyMutationInputSchema),
				z.lazy(() => DiagnosisUncheckedUpdateManyWithoutDoctorInputSchema),
			]),
		})
		.strict()

export default DiagnosisUpdateManyWithWhereWithoutDoctorInputSchema
