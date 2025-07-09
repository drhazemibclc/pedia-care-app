import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DoctorCreateWithoutRatingsInputSchema } from './DoctorCreateWithoutRatingsInputSchema'
import { DoctorUncheckedCreateWithoutRatingsInputSchema } from './DoctorUncheckedCreateWithoutRatingsInputSchema'
import { DoctorWhereUniqueInputSchema } from './DoctorWhereUniqueInputSchema'

export const DoctorCreateOrConnectWithoutRatingsInputSchema: z.ZodType<Prisma.DoctorCreateOrConnectWithoutRatingsInput> =
	z
		.object({
			where: z.lazy(() => DoctorWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => DoctorCreateWithoutRatingsInputSchema),
				z.lazy(() => DoctorUncheckedCreateWithoutRatingsInputSchema),
			]),
		})
		.strict()

export default DoctorCreateOrConnectWithoutRatingsInputSchema
