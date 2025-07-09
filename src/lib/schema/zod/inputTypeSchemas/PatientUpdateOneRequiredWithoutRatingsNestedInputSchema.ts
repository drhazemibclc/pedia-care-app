import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientCreateOrConnectWithoutRatingsInputSchema } from './PatientCreateOrConnectWithoutRatingsInputSchema'
import { PatientCreateWithoutRatingsInputSchema } from './PatientCreateWithoutRatingsInputSchema'
import { PatientUncheckedCreateWithoutRatingsInputSchema } from './PatientUncheckedCreateWithoutRatingsInputSchema'
import { PatientUncheckedUpdateWithoutRatingsInputSchema } from './PatientUncheckedUpdateWithoutRatingsInputSchema'
import { PatientUpdateToOneWithWhereWithoutRatingsInputSchema } from './PatientUpdateToOneWithWhereWithoutRatingsInputSchema'
import { PatientUpdateWithoutRatingsInputSchema } from './PatientUpdateWithoutRatingsInputSchema'
import { PatientUpsertWithoutRatingsInputSchema } from './PatientUpsertWithoutRatingsInputSchema'
import { PatientWhereUniqueInputSchema } from './PatientWhereUniqueInputSchema'

export const PatientUpdateOneRequiredWithoutRatingsNestedInputSchema: z.ZodType<Prisma.PatientUpdateOneRequiredWithoutRatingsNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => PatientCreateWithoutRatingsInputSchema),
					z.lazy(() => PatientUncheckedCreateWithoutRatingsInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => PatientCreateOrConnectWithoutRatingsInputSchema).optional(),
			upsert: z.lazy(() => PatientUpsertWithoutRatingsInputSchema).optional(),
			connect: z.lazy(() => PatientWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => PatientUpdateToOneWithWhereWithoutRatingsInputSchema),
					z.lazy(() => PatientUpdateWithoutRatingsInputSchema),
					z.lazy(() => PatientUncheckedUpdateWithoutRatingsInputSchema),
				])
				.optional(),
		})
		.strict()

export default PatientUpdateOneRequiredWithoutRatingsNestedInputSchema
