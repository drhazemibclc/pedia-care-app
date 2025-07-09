import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DoctorCreateOrConnectWithoutWorkingDaysInputSchema } from './DoctorCreateOrConnectWithoutWorkingDaysInputSchema'
import { DoctorCreateWithoutWorkingDaysInputSchema } from './DoctorCreateWithoutWorkingDaysInputSchema'
import { DoctorUncheckedCreateWithoutWorkingDaysInputSchema } from './DoctorUncheckedCreateWithoutWorkingDaysInputSchema'
import { DoctorWhereUniqueInputSchema } from './DoctorWhereUniqueInputSchema'

export const DoctorCreateNestedOneWithoutWorkingDaysInputSchema: z.ZodType<Prisma.DoctorCreateNestedOneWithoutWorkingDaysInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => DoctorCreateWithoutWorkingDaysInputSchema),
					z.lazy(() => DoctorUncheckedCreateWithoutWorkingDaysInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => DoctorCreateOrConnectWithoutWorkingDaysInputSchema).optional(),
			connect: z.lazy(() => DoctorWhereUniqueInputSchema).optional(),
		})
		.strict()

export default DoctorCreateNestedOneWithoutWorkingDaysInputSchema
