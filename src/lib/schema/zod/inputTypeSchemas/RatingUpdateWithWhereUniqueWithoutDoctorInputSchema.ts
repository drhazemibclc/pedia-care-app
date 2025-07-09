import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RatingUncheckedUpdateWithoutDoctorInputSchema } from './RatingUncheckedUpdateWithoutDoctorInputSchema'
import { RatingUpdateWithoutDoctorInputSchema } from './RatingUpdateWithoutDoctorInputSchema'
import { RatingWhereUniqueInputSchema } from './RatingWhereUniqueInputSchema'

export const RatingUpdateWithWhereUniqueWithoutDoctorInputSchema: z.ZodType<Prisma.RatingUpdateWithWhereUniqueWithoutDoctorInput> =
	z
		.object({
			where: z.lazy(() => RatingWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => RatingUpdateWithoutDoctorInputSchema),
				z.lazy(() => RatingUncheckedUpdateWithoutDoctorInputSchema),
			]),
		})
		.strict()

export default RatingUpdateWithWhereUniqueWithoutDoctorInputSchema
