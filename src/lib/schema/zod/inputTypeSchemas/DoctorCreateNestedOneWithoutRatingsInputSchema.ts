import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DoctorCreateOrConnectWithoutRatingsInputSchema } from './DoctorCreateOrConnectWithoutRatingsInputSchema'
import { DoctorCreateWithoutRatingsInputSchema } from './DoctorCreateWithoutRatingsInputSchema'
import { DoctorUncheckedCreateWithoutRatingsInputSchema } from './DoctorUncheckedCreateWithoutRatingsInputSchema'
import { DoctorWhereUniqueInputSchema } from './DoctorWhereUniqueInputSchema'

export const DoctorCreateNestedOneWithoutRatingsInputSchema: z.ZodType<Prisma.DoctorCreateNestedOneWithoutRatingsInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => DoctorCreateWithoutRatingsInputSchema),
					z.lazy(() => DoctorUncheckedCreateWithoutRatingsInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => DoctorCreateOrConnectWithoutRatingsInputSchema).optional(),
			connect: z.lazy(() => DoctorWhereUniqueInputSchema).optional(),
		})
		.strict()

export default DoctorCreateNestedOneWithoutRatingsInputSchema
