import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientUncheckedUpdateWithoutRatingsInputSchema } from './PatientUncheckedUpdateWithoutRatingsInputSchema'
import { PatientUpdateWithoutRatingsInputSchema } from './PatientUpdateWithoutRatingsInputSchema'
import { PatientWhereInputSchema } from './PatientWhereInputSchema'

export const PatientUpdateToOneWithWhereWithoutRatingsInputSchema: z.ZodType<Prisma.PatientUpdateToOneWithWhereWithoutRatingsInput> =
	z
		.object({
			where: z.lazy(() => PatientWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => PatientUpdateWithoutRatingsInputSchema),
				z.lazy(() => PatientUncheckedUpdateWithoutRatingsInputSchema),
			]),
		})
		.strict()

export default PatientUpdateToOneWithWhereWithoutRatingsInputSchema
