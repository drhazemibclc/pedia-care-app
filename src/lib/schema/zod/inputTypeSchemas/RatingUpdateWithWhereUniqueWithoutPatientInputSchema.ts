import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RatingUncheckedUpdateWithoutPatientInputSchema } from './RatingUncheckedUpdateWithoutPatientInputSchema'
import { RatingUpdateWithoutPatientInputSchema } from './RatingUpdateWithoutPatientInputSchema'
import { RatingWhereUniqueInputSchema } from './RatingWhereUniqueInputSchema'

export const RatingUpdateWithWhereUniqueWithoutPatientInputSchema: z.ZodType<Prisma.RatingUpdateWithWhereUniqueWithoutPatientInput> =
	z
		.object({
			where: z.lazy(() => RatingWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => RatingUpdateWithoutPatientInputSchema),
				z.lazy(() => RatingUncheckedUpdateWithoutPatientInputSchema),
			]),
		})
		.strict()

export default RatingUpdateWithWhereUniqueWithoutPatientInputSchema
