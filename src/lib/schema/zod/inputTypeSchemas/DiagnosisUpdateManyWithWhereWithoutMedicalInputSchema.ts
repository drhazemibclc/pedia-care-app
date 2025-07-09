import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DiagnosisScalarWhereInputSchema } from './DiagnosisScalarWhereInputSchema'
import { DiagnosisUncheckedUpdateManyWithoutMedicalInputSchema } from './DiagnosisUncheckedUpdateManyWithoutMedicalInputSchema'
import { DiagnosisUpdateManyMutationInputSchema } from './DiagnosisUpdateManyMutationInputSchema'

export const DiagnosisUpdateManyWithWhereWithoutMedicalInputSchema: z.ZodType<Prisma.DiagnosisUpdateManyWithWhereWithoutMedicalInput> =
	z
		.object({
			where: z.lazy(() => DiagnosisScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => DiagnosisUpdateManyMutationInputSchema),
				z.lazy(() => DiagnosisUncheckedUpdateManyWithoutMedicalInputSchema),
			]),
		})
		.strict()

export default DiagnosisUpdateManyWithWhereWithoutMedicalInputSchema
