import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { MedicalRecordsUncheckedUpdateWithoutVitalSignsInputSchema } from './MedicalRecordsUncheckedUpdateWithoutVitalSignsInputSchema'
import { MedicalRecordsUpdateWithoutVitalSignsInputSchema } from './MedicalRecordsUpdateWithoutVitalSignsInputSchema'
import { MedicalRecordsWhereInputSchema } from './MedicalRecordsWhereInputSchema'

export const MedicalRecordsUpdateToOneWithWhereWithoutVitalSignsInputSchema: z.ZodType<Prisma.MedicalRecordsUpdateToOneWithWhereWithoutVitalSignsInput> =
	z
		.object({
			where: z.lazy(() => MedicalRecordsWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => MedicalRecordsUpdateWithoutVitalSignsInputSchema),
				z.lazy(() => MedicalRecordsUncheckedUpdateWithoutVitalSignsInputSchema),
			]),
		})
		.strict()

export default MedicalRecordsUpdateToOneWithWhereWithoutVitalSignsInputSchema
