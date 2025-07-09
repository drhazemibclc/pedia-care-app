import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DoctorUncheckedUpdateWithoutUserInputSchema } from './DoctorUncheckedUpdateWithoutUserInputSchema'
import { DoctorUpdateWithoutUserInputSchema } from './DoctorUpdateWithoutUserInputSchema'
import { DoctorWhereUniqueInputSchema } from './DoctorWhereUniqueInputSchema'

export const DoctorUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.DoctorUpdateWithWhereUniqueWithoutUserInput> =
	z
		.object({
			where: z.lazy(() => DoctorWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => DoctorUpdateWithoutUserInputSchema),
				z.lazy(() => DoctorUncheckedUpdateWithoutUserInputSchema),
			]),
		})
		.strict()

export default DoctorUpdateWithWhereUniqueWithoutUserInputSchema
