import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientCreateWithoutUserInputSchema } from './PatientCreateWithoutUserInputSchema'
import { PatientUncheckedCreateWithoutUserInputSchema } from './PatientUncheckedCreateWithoutUserInputSchema'
import { PatientUncheckedUpdateWithoutUserInputSchema } from './PatientUncheckedUpdateWithoutUserInputSchema'
import { PatientUpdateWithoutUserInputSchema } from './PatientUpdateWithoutUserInputSchema'
import { PatientWhereUniqueInputSchema } from './PatientWhereUniqueInputSchema'

export const PatientUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.PatientUpsertWithWhereUniqueWithoutUserInput> =
	z
		.object({
			where: z.lazy(() => PatientWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => PatientUpdateWithoutUserInputSchema),
				z.lazy(() => PatientUncheckedUpdateWithoutUserInputSchema),
			]),
			create: z.union([
				z.lazy(() => PatientCreateWithoutUserInputSchema),
				z.lazy(() => PatientUncheckedCreateWithoutUserInputSchema),
			]),
		})
		.strict()

export default PatientUpsertWithWhereUniqueWithoutUserInputSchema
