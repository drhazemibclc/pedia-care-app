import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RatingCreateWithoutDoctorInputSchema } from './RatingCreateWithoutDoctorInputSchema'
import { RatingUncheckedCreateWithoutDoctorInputSchema } from './RatingUncheckedCreateWithoutDoctorInputSchema'
import { RatingUncheckedUpdateWithoutDoctorInputSchema } from './RatingUncheckedUpdateWithoutDoctorInputSchema'
import { RatingUpdateWithoutDoctorInputSchema } from './RatingUpdateWithoutDoctorInputSchema'
import { RatingWhereUniqueInputSchema } from './RatingWhereUniqueInputSchema'

export const RatingUpsertWithWhereUniqueWithoutDoctorInputSchema: z.ZodType<Prisma.RatingUpsertWithWhereUniqueWithoutDoctorInput> =
	z
		.object({
			where: z.lazy(() => RatingWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => RatingUpdateWithoutDoctorInputSchema),
				z.lazy(() => RatingUncheckedUpdateWithoutDoctorInputSchema),
			]),
			create: z.union([
				z.lazy(() => RatingCreateWithoutDoctorInputSchema),
				z.lazy(() => RatingUncheckedCreateWithoutDoctorInputSchema),
			]),
		})
		.strict()

export default RatingUpsertWithWhereUniqueWithoutDoctorInputSchema
