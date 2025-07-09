import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DoctorUncheckedUpdateWithoutRatingsInputSchema } from './DoctorUncheckedUpdateWithoutRatingsInputSchema'
import { DoctorUpdateWithoutRatingsInputSchema } from './DoctorUpdateWithoutRatingsInputSchema'
import { DoctorWhereInputSchema } from './DoctorWhereInputSchema'

export const DoctorUpdateToOneWithWhereWithoutRatingsInputSchema: z.ZodType<Prisma.DoctorUpdateToOneWithWhereWithoutRatingsInput> =
	z
		.object({
			where: z.lazy(() => DoctorWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => DoctorUpdateWithoutRatingsInputSchema),
				z.lazy(() => DoctorUncheckedUpdateWithoutRatingsInputSchema),
			]),
		})
		.strict()

export default DoctorUpdateToOneWithWhereWithoutRatingsInputSchema
