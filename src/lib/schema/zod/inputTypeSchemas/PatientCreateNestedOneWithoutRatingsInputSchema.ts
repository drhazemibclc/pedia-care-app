import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientCreateOrConnectWithoutRatingsInputSchema } from './PatientCreateOrConnectWithoutRatingsInputSchema'
import { PatientCreateWithoutRatingsInputSchema } from './PatientCreateWithoutRatingsInputSchema'
import { PatientUncheckedCreateWithoutRatingsInputSchema } from './PatientUncheckedCreateWithoutRatingsInputSchema'
import { PatientWhereUniqueInputSchema } from './PatientWhereUniqueInputSchema'

export const PatientCreateNestedOneWithoutRatingsInputSchema: z.ZodType<Prisma.PatientCreateNestedOneWithoutRatingsInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => PatientCreateWithoutRatingsInputSchema),
					z.lazy(() => PatientUncheckedCreateWithoutRatingsInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => PatientCreateOrConnectWithoutRatingsInputSchema).optional(),
			connect: z.lazy(() => PatientWhereUniqueInputSchema).optional(),
		})
		.strict()

export default PatientCreateNestedOneWithoutRatingsInputSchema
