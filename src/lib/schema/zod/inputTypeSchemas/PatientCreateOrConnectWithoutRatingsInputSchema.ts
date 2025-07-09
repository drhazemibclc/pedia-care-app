import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientCreateWithoutRatingsInputSchema } from './PatientCreateWithoutRatingsInputSchema'
import { PatientUncheckedCreateWithoutRatingsInputSchema } from './PatientUncheckedCreateWithoutRatingsInputSchema'
import { PatientWhereUniqueInputSchema } from './PatientWhereUniqueInputSchema'

export const PatientCreateOrConnectWithoutRatingsInputSchema: z.ZodType<Prisma.PatientCreateOrConnectWithoutRatingsInput> =
	z
		.object({
			where: z.lazy(() => PatientWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => PatientCreateWithoutRatingsInputSchema),
				z.lazy(() => PatientUncheckedCreateWithoutRatingsInputSchema),
			]),
		})
		.strict()

export default PatientCreateOrConnectWithoutRatingsInputSchema
