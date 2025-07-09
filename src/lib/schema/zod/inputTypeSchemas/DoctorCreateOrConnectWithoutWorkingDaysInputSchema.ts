import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DoctorCreateWithoutWorkingDaysInputSchema } from './DoctorCreateWithoutWorkingDaysInputSchema'
import { DoctorUncheckedCreateWithoutWorkingDaysInputSchema } from './DoctorUncheckedCreateWithoutWorkingDaysInputSchema'
import { DoctorWhereUniqueInputSchema } from './DoctorWhereUniqueInputSchema'

export const DoctorCreateOrConnectWithoutWorkingDaysInputSchema: z.ZodType<Prisma.DoctorCreateOrConnectWithoutWorkingDaysInput> =
	z
		.object({
			where: z.lazy(() => DoctorWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => DoctorCreateWithoutWorkingDaysInputSchema),
				z.lazy(() => DoctorUncheckedCreateWithoutWorkingDaysInputSchema),
			]),
		})
		.strict()

export default DoctorCreateOrConnectWithoutWorkingDaysInputSchema
