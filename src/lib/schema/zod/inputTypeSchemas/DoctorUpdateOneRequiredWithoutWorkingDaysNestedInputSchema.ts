import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DoctorCreateOrConnectWithoutWorkingDaysInputSchema } from './DoctorCreateOrConnectWithoutWorkingDaysInputSchema'
import { DoctorCreateWithoutWorkingDaysInputSchema } from './DoctorCreateWithoutWorkingDaysInputSchema'
import { DoctorUncheckedCreateWithoutWorkingDaysInputSchema } from './DoctorUncheckedCreateWithoutWorkingDaysInputSchema'
import { DoctorUncheckedUpdateWithoutWorkingDaysInputSchema } from './DoctorUncheckedUpdateWithoutWorkingDaysInputSchema'
import { DoctorUpdateToOneWithWhereWithoutWorkingDaysInputSchema } from './DoctorUpdateToOneWithWhereWithoutWorkingDaysInputSchema'
import { DoctorUpdateWithoutWorkingDaysInputSchema } from './DoctorUpdateWithoutWorkingDaysInputSchema'
import { DoctorUpsertWithoutWorkingDaysInputSchema } from './DoctorUpsertWithoutWorkingDaysInputSchema'
import { DoctorWhereUniqueInputSchema } from './DoctorWhereUniqueInputSchema'

export const DoctorUpdateOneRequiredWithoutWorkingDaysNestedInputSchema: z.ZodType<Prisma.DoctorUpdateOneRequiredWithoutWorkingDaysNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => DoctorCreateWithoutWorkingDaysInputSchema),
					z.lazy(() => DoctorUncheckedCreateWithoutWorkingDaysInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => DoctorCreateOrConnectWithoutWorkingDaysInputSchema).optional(),
			upsert: z.lazy(() => DoctorUpsertWithoutWorkingDaysInputSchema).optional(),
			connect: z.lazy(() => DoctorWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => DoctorUpdateToOneWithWhereWithoutWorkingDaysInputSchema),
					z.lazy(() => DoctorUpdateWithoutWorkingDaysInputSchema),
					z.lazy(() => DoctorUncheckedUpdateWithoutWorkingDaysInputSchema),
				])
				.optional(),
		})
		.strict()

export default DoctorUpdateOneRequiredWithoutWorkingDaysNestedInputSchema
