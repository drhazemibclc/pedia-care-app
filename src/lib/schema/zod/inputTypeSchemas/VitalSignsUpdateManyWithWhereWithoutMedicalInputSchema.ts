import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { VitalSignsScalarWhereInputSchema } from './VitalSignsScalarWhereInputSchema'
import { VitalSignsUncheckedUpdateManyWithoutMedicalInputSchema } from './VitalSignsUncheckedUpdateManyWithoutMedicalInputSchema'
import { VitalSignsUpdateManyMutationInputSchema } from './VitalSignsUpdateManyMutationInputSchema'

export const VitalSignsUpdateManyWithWhereWithoutMedicalInputSchema: z.ZodType<Prisma.VitalSignsUpdateManyWithWhereWithoutMedicalInput> =
	z
		.object({
			where: z.lazy(() => VitalSignsScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => VitalSignsUpdateManyMutationInputSchema),
				z.lazy(() => VitalSignsUncheckedUpdateManyWithoutMedicalInputSchema),
			]),
		})
		.strict()

export default VitalSignsUpdateManyWithWhereWithoutMedicalInputSchema
