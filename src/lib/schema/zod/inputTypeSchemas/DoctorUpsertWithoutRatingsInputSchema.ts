import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DoctorCreateWithoutRatingsInputSchema } from './DoctorCreateWithoutRatingsInputSchema'
import { DoctorUncheckedCreateWithoutRatingsInputSchema } from './DoctorUncheckedCreateWithoutRatingsInputSchema'
import { DoctorUncheckedUpdateWithoutRatingsInputSchema } from './DoctorUncheckedUpdateWithoutRatingsInputSchema'
import { DoctorUpdateWithoutRatingsInputSchema } from './DoctorUpdateWithoutRatingsInputSchema'
import { DoctorWhereInputSchema } from './DoctorWhereInputSchema'

export const DoctorUpsertWithoutRatingsInputSchema: z.ZodType<Prisma.DoctorUpsertWithoutRatingsInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => DoctorUpdateWithoutRatingsInputSchema),
				z.lazy(() => DoctorUncheckedUpdateWithoutRatingsInputSchema),
			]),
			create: z.union([
				z.lazy(() => DoctorCreateWithoutRatingsInputSchema),
				z.lazy(() => DoctorUncheckedCreateWithoutRatingsInputSchema),
			]),
			where: z.lazy(() => DoctorWhereInputSchema).optional(),
		})
		.strict()

export default DoctorUpsertWithoutRatingsInputSchema
