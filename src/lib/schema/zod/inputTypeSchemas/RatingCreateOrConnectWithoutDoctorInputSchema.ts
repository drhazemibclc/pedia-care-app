import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RatingCreateWithoutDoctorInputSchema } from './RatingCreateWithoutDoctorInputSchema'
import { RatingUncheckedCreateWithoutDoctorInputSchema } from './RatingUncheckedCreateWithoutDoctorInputSchema'
import { RatingWhereUniqueInputSchema } from './RatingWhereUniqueInputSchema'

export const RatingCreateOrConnectWithoutDoctorInputSchema: z.ZodType<Prisma.RatingCreateOrConnectWithoutDoctorInput> =
	z
		.object({
			where: z.lazy(() => RatingWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => RatingCreateWithoutDoctorInputSchema),
				z.lazy(() => RatingUncheckedCreateWithoutDoctorInputSchema),
			]),
		})
		.strict()

export default RatingCreateOrConnectWithoutDoctorInputSchema
