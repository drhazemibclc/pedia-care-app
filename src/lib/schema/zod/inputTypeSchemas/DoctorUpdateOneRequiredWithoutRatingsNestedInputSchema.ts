import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DoctorCreateOrConnectWithoutRatingsInputSchema } from './DoctorCreateOrConnectWithoutRatingsInputSchema'
import { DoctorCreateWithoutRatingsInputSchema } from './DoctorCreateWithoutRatingsInputSchema'
import { DoctorUncheckedCreateWithoutRatingsInputSchema } from './DoctorUncheckedCreateWithoutRatingsInputSchema'
import { DoctorUncheckedUpdateWithoutRatingsInputSchema } from './DoctorUncheckedUpdateWithoutRatingsInputSchema'
import { DoctorUpdateToOneWithWhereWithoutRatingsInputSchema } from './DoctorUpdateToOneWithWhereWithoutRatingsInputSchema'
import { DoctorUpdateWithoutRatingsInputSchema } from './DoctorUpdateWithoutRatingsInputSchema'
import { DoctorUpsertWithoutRatingsInputSchema } from './DoctorUpsertWithoutRatingsInputSchema'
import { DoctorWhereUniqueInputSchema } from './DoctorWhereUniqueInputSchema'

export const DoctorUpdateOneRequiredWithoutRatingsNestedInputSchema: z.ZodType<Prisma.DoctorUpdateOneRequiredWithoutRatingsNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => DoctorCreateWithoutRatingsInputSchema),
					z.lazy(() => DoctorUncheckedCreateWithoutRatingsInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => DoctorCreateOrConnectWithoutRatingsInputSchema).optional(),
			upsert: z.lazy(() => DoctorUpsertWithoutRatingsInputSchema).optional(),
			connect: z.lazy(() => DoctorWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => DoctorUpdateToOneWithWhereWithoutRatingsInputSchema),
					z.lazy(() => DoctorUpdateWithoutRatingsInputSchema),
					z.lazy(() => DoctorUncheckedUpdateWithoutRatingsInputSchema),
				])
				.optional(),
		})
		.strict()

export default DoctorUpdateOneRequiredWithoutRatingsNestedInputSchema
