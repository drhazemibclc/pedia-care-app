import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientCreateWithoutRatingsInputSchema } from './PatientCreateWithoutRatingsInputSchema'
import { PatientUncheckedCreateWithoutRatingsInputSchema } from './PatientUncheckedCreateWithoutRatingsInputSchema'
import { PatientUncheckedUpdateWithoutRatingsInputSchema } from './PatientUncheckedUpdateWithoutRatingsInputSchema'
import { PatientUpdateWithoutRatingsInputSchema } from './PatientUpdateWithoutRatingsInputSchema'
import { PatientWhereInputSchema } from './PatientWhereInputSchema'

export const PatientUpsertWithoutRatingsInputSchema: z.ZodType<Prisma.PatientUpsertWithoutRatingsInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => PatientUpdateWithoutRatingsInputSchema),
				z.lazy(() => PatientUncheckedUpdateWithoutRatingsInputSchema),
			]),
			create: z.union([
				z.lazy(() => PatientCreateWithoutRatingsInputSchema),
				z.lazy(() => PatientUncheckedCreateWithoutRatingsInputSchema),
			]),
			where: z.lazy(() => PatientWhereInputSchema).optional(),
		})
		.strict()

export default PatientUpsertWithoutRatingsInputSchema
