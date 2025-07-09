import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PrescriptionUncheckedUpdateWithoutMedicalRecordInputSchema } from './PrescriptionUncheckedUpdateWithoutMedicalRecordInputSchema'
import { PrescriptionUpdateWithoutMedicalRecordInputSchema } from './PrescriptionUpdateWithoutMedicalRecordInputSchema'
import { PrescriptionWhereUniqueInputSchema } from './PrescriptionWhereUniqueInputSchema'

export const PrescriptionUpdateWithWhereUniqueWithoutMedicalRecordInputSchema: z.ZodType<Prisma.PrescriptionUpdateWithWhereUniqueWithoutMedicalRecordInput> =
	z
		.object({
			where: z.lazy(() => PrescriptionWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => PrescriptionUpdateWithoutMedicalRecordInputSchema),
				z.lazy(() => PrescriptionUncheckedUpdateWithoutMedicalRecordInputSchema),
			]),
		})
		.strict()

export default PrescriptionUpdateWithWhereUniqueWithoutMedicalRecordInputSchema
