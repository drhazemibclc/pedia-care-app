import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientUncheckedUpdateWithoutUserInputSchema } from './PatientUncheckedUpdateWithoutUserInputSchema'
import { PatientUpdateWithoutUserInputSchema } from './PatientUpdateWithoutUserInputSchema'
import { PatientWhereUniqueInputSchema } from './PatientWhereUniqueInputSchema'

export const PatientUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.PatientUpdateWithWhereUniqueWithoutUserInput> =
	z
		.object({
			where: z.lazy(() => PatientWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => PatientUpdateWithoutUserInputSchema),
				z.lazy(() => PatientUncheckedUpdateWithoutUserInputSchema),
			]),
		})
		.strict()

export default PatientUpdateWithWhereUniqueWithoutUserInputSchema
