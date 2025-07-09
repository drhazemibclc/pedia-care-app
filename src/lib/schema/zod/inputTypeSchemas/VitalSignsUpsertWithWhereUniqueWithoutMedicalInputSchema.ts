import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { VitalSignsCreateWithoutMedicalInputSchema } from './VitalSignsCreateWithoutMedicalInputSchema'
import { VitalSignsUncheckedCreateWithoutMedicalInputSchema } from './VitalSignsUncheckedCreateWithoutMedicalInputSchema'
import { VitalSignsUncheckedUpdateWithoutMedicalInputSchema } from './VitalSignsUncheckedUpdateWithoutMedicalInputSchema'
import { VitalSignsUpdateWithoutMedicalInputSchema } from './VitalSignsUpdateWithoutMedicalInputSchema'
import { VitalSignsWhereUniqueInputSchema } from './VitalSignsWhereUniqueInputSchema'

export const VitalSignsUpsertWithWhereUniqueWithoutMedicalInputSchema: z.ZodType<Prisma.VitalSignsUpsertWithWhereUniqueWithoutMedicalInput> =
	z
		.object({
			where: z.lazy(() => VitalSignsWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => VitalSignsUpdateWithoutMedicalInputSchema),
				z.lazy(() => VitalSignsUncheckedUpdateWithoutMedicalInputSchema),
			]),
			create: z.union([
				z.lazy(() => VitalSignsCreateWithoutMedicalInputSchema),
				z.lazy(() => VitalSignsUncheckedCreateWithoutMedicalInputSchema),
			]),
		})
		.strict()

export default VitalSignsUpsertWithWhereUniqueWithoutMedicalInputSchema
