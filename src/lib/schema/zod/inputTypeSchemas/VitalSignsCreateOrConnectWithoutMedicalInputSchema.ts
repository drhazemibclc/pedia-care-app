import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { VitalSignsCreateWithoutMedicalInputSchema } from './VitalSignsCreateWithoutMedicalInputSchema'
import { VitalSignsUncheckedCreateWithoutMedicalInputSchema } from './VitalSignsUncheckedCreateWithoutMedicalInputSchema'
import { VitalSignsWhereUniqueInputSchema } from './VitalSignsWhereUniqueInputSchema'

export const VitalSignsCreateOrConnectWithoutMedicalInputSchema: z.ZodType<Prisma.VitalSignsCreateOrConnectWithoutMedicalInput> =
	z
		.object({
			where: z.lazy(() => VitalSignsWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => VitalSignsCreateWithoutMedicalInputSchema),
				z.lazy(() => VitalSignsUncheckedCreateWithoutMedicalInputSchema),
			]),
		})
		.strict()

export default VitalSignsCreateOrConnectWithoutMedicalInputSchema
