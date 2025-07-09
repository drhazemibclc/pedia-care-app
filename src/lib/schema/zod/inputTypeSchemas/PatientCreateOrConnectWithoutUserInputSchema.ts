import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientCreateWithoutUserInputSchema } from './PatientCreateWithoutUserInputSchema'
import { PatientUncheckedCreateWithoutUserInputSchema } from './PatientUncheckedCreateWithoutUserInputSchema'
import { PatientWhereUniqueInputSchema } from './PatientWhereUniqueInputSchema'

export const PatientCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.PatientCreateOrConnectWithoutUserInput> =
	z
		.object({
			where: z.lazy(() => PatientWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => PatientCreateWithoutUserInputSchema),
				z.lazy(() => PatientUncheckedCreateWithoutUserInputSchema),
			]),
		})
		.strict()

export default PatientCreateOrConnectWithoutUserInputSchema
