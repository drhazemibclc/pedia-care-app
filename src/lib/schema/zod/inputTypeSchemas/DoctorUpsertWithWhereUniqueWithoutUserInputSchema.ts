import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DoctorCreateWithoutUserInputSchema } from './DoctorCreateWithoutUserInputSchema'
import { DoctorUncheckedCreateWithoutUserInputSchema } from './DoctorUncheckedCreateWithoutUserInputSchema'
import { DoctorUncheckedUpdateWithoutUserInputSchema } from './DoctorUncheckedUpdateWithoutUserInputSchema'
import { DoctorUpdateWithoutUserInputSchema } from './DoctorUpdateWithoutUserInputSchema'
import { DoctorWhereUniqueInputSchema } from './DoctorWhereUniqueInputSchema'

export const DoctorUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.DoctorUpsertWithWhereUniqueWithoutUserInput> =
	z
		.object({
			where: z.lazy(() => DoctorWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => DoctorUpdateWithoutUserInputSchema),
				z.lazy(() => DoctorUncheckedUpdateWithoutUserInputSchema),
			]),
			create: z.union([
				z.lazy(() => DoctorCreateWithoutUserInputSchema),
				z.lazy(() => DoctorUncheckedCreateWithoutUserInputSchema),
			]),
		})
		.strict()

export default DoctorUpsertWithWhereUniqueWithoutUserInputSchema
