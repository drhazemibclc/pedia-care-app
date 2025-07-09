import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DoctorCreateWithoutUserInputSchema } from './DoctorCreateWithoutUserInputSchema'
import { DoctorUncheckedCreateWithoutUserInputSchema } from './DoctorUncheckedCreateWithoutUserInputSchema'
import { DoctorWhereUniqueInputSchema } from './DoctorWhereUniqueInputSchema'

export const DoctorCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.DoctorCreateOrConnectWithoutUserInput> =
	z
		.object({
			where: z.lazy(() => DoctorWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => DoctorCreateWithoutUserInputSchema),
				z.lazy(() => DoctorUncheckedCreateWithoutUserInputSchema),
			]),
		})
		.strict()

export default DoctorCreateOrConnectWithoutUserInputSchema
