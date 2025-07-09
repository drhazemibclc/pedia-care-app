import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RatingCreateWithoutPatientInputSchema } from './RatingCreateWithoutPatientInputSchema'
import { RatingUncheckedCreateWithoutPatientInputSchema } from './RatingUncheckedCreateWithoutPatientInputSchema'
import { RatingWhereUniqueInputSchema } from './RatingWhereUniqueInputSchema'

export const RatingCreateOrConnectWithoutPatientInputSchema: z.ZodType<Prisma.RatingCreateOrConnectWithoutPatientInput> =
	z
		.object({
			where: z.lazy(() => RatingWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => RatingCreateWithoutPatientInputSchema),
				z.lazy(() => RatingUncheckedCreateWithoutPatientInputSchema),
			]),
		})
		.strict()

export default RatingCreateOrConnectWithoutPatientInputSchema
