import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RatingCreateWithoutPatientInputSchema } from './RatingCreateWithoutPatientInputSchema'
import { RatingUncheckedCreateWithoutPatientInputSchema } from './RatingUncheckedCreateWithoutPatientInputSchema'
import { RatingUncheckedUpdateWithoutPatientInputSchema } from './RatingUncheckedUpdateWithoutPatientInputSchema'
import { RatingUpdateWithoutPatientInputSchema } from './RatingUpdateWithoutPatientInputSchema'
import { RatingWhereUniqueInputSchema } from './RatingWhereUniqueInputSchema'

export const RatingUpsertWithWhereUniqueWithoutPatientInputSchema: z.ZodType<Prisma.RatingUpsertWithWhereUniqueWithoutPatientInput> =
	z
		.object({
			where: z.lazy(() => RatingWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => RatingUpdateWithoutPatientInputSchema),
				z.lazy(() => RatingUncheckedUpdateWithoutPatientInputSchema),
			]),
			create: z.union([
				z.lazy(() => RatingCreateWithoutPatientInputSchema),
				z.lazy(() => RatingUncheckedCreateWithoutPatientInputSchema),
			]),
		})
		.strict()

export default RatingUpsertWithWhereUniqueWithoutPatientInputSchema
