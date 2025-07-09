import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DoctorCreateWithoutWorkingDaysInputSchema } from './DoctorCreateWithoutWorkingDaysInputSchema'
import { DoctorUncheckedCreateWithoutWorkingDaysInputSchema } from './DoctorUncheckedCreateWithoutWorkingDaysInputSchema'
import { DoctorUncheckedUpdateWithoutWorkingDaysInputSchema } from './DoctorUncheckedUpdateWithoutWorkingDaysInputSchema'
import { DoctorUpdateWithoutWorkingDaysInputSchema } from './DoctorUpdateWithoutWorkingDaysInputSchema'
import { DoctorWhereInputSchema } from './DoctorWhereInputSchema'

export const DoctorUpsertWithoutWorkingDaysInputSchema: z.ZodType<Prisma.DoctorUpsertWithoutWorkingDaysInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => DoctorUpdateWithoutWorkingDaysInputSchema),
				z.lazy(() => DoctorUncheckedUpdateWithoutWorkingDaysInputSchema),
			]),
			create: z.union([
				z.lazy(() => DoctorCreateWithoutWorkingDaysInputSchema),
				z.lazy(() => DoctorUncheckedCreateWithoutWorkingDaysInputSchema),
			]),
			where: z.lazy(() => DoctorWhereInputSchema).optional(),
		})
		.strict()

export default DoctorUpsertWithoutWorkingDaysInputSchema
