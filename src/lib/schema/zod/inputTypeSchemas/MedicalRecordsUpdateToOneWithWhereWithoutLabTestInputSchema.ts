import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { MedicalRecordsUncheckedUpdateWithoutLabTestInputSchema } from './MedicalRecordsUncheckedUpdateWithoutLabTestInputSchema'
import { MedicalRecordsUpdateWithoutLabTestInputSchema } from './MedicalRecordsUpdateWithoutLabTestInputSchema'
import { MedicalRecordsWhereInputSchema } from './MedicalRecordsWhereInputSchema'

export const MedicalRecordsUpdateToOneWithWhereWithoutLabTestInputSchema: z.ZodType<Prisma.MedicalRecordsUpdateToOneWithWhereWithoutLabTestInput> =
	z
		.object({
			where: z.lazy(() => MedicalRecordsWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => MedicalRecordsUpdateWithoutLabTestInputSchema),
				z.lazy(() => MedicalRecordsUncheckedUpdateWithoutLabTestInputSchema),
			]),
		})
		.strict()

export default MedicalRecordsUpdateToOneWithWhereWithoutLabTestInputSchema
