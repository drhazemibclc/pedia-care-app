import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { VitalSignsUncheckedUpdateWithoutMedicalInputSchema } from './VitalSignsUncheckedUpdateWithoutMedicalInputSchema'
import { VitalSignsUpdateWithoutMedicalInputSchema } from './VitalSignsUpdateWithoutMedicalInputSchema'
import { VitalSignsWhereUniqueInputSchema } from './VitalSignsWhereUniqueInputSchema'

export const VitalSignsUpdateWithWhereUniqueWithoutMedicalInputSchema: z.ZodType<Prisma.VitalSignsUpdateWithWhereUniqueWithoutMedicalInput> =
	z
		.object({
			where: z.lazy(() => VitalSignsWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => VitalSignsUpdateWithoutMedicalInputSchema),
				z.lazy(() => VitalSignsUncheckedUpdateWithoutMedicalInputSchema),
			]),
		})
		.strict()

export default VitalSignsUpdateWithWhereUniqueWithoutMedicalInputSchema
