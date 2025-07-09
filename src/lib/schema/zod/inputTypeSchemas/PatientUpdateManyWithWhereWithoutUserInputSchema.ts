import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientScalarWhereInputSchema } from './PatientScalarWhereInputSchema'
import { PatientUncheckedUpdateManyWithoutUserInputSchema } from './PatientUncheckedUpdateManyWithoutUserInputSchema'
import { PatientUpdateManyMutationInputSchema } from './PatientUpdateManyMutationInputSchema'

export const PatientUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.PatientUpdateManyWithWhereWithoutUserInput> =
	z
		.object({
			where: z.lazy(() => PatientScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => PatientUpdateManyMutationInputSchema),
				z.lazy(() => PatientUncheckedUpdateManyWithoutUserInputSchema),
			]),
		})
		.strict()

export default PatientUpdateManyWithWhereWithoutUserInputSchema
