import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DoctorUncheckedUpdateWithoutWorkingDaysInputSchema } from './DoctorUncheckedUpdateWithoutWorkingDaysInputSchema'
import { DoctorUpdateWithoutWorkingDaysInputSchema } from './DoctorUpdateWithoutWorkingDaysInputSchema'
import { DoctorWhereInputSchema } from './DoctorWhereInputSchema'

export const DoctorUpdateToOneWithWhereWithoutWorkingDaysInputSchema: z.ZodType<Prisma.DoctorUpdateToOneWithWhereWithoutWorkingDaysInput> =
	z
		.object({
			where: z.lazy(() => DoctorWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => DoctorUpdateWithoutWorkingDaysInputSchema),
				z.lazy(() => DoctorUncheckedUpdateWithoutWorkingDaysInputSchema),
			]),
		})
		.strict()

export default DoctorUpdateToOneWithWhereWithoutWorkingDaysInputSchema
