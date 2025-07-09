import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PrescriptionUncheckedUpdateWithoutPatientInputSchema } from './PrescriptionUncheckedUpdateWithoutPatientInputSchema'
import { PrescriptionUpdateWithoutPatientInputSchema } from './PrescriptionUpdateWithoutPatientInputSchema'
import { PrescriptionWhereUniqueInputSchema } from './PrescriptionWhereUniqueInputSchema'

export const PrescriptionUpdateWithWhereUniqueWithoutPatientInputSchema: z.ZodType<Prisma.PrescriptionUpdateWithWhereUniqueWithoutPatientInput> =
	z
		.object({
			where: z.lazy(() => PrescriptionWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => PrescriptionUpdateWithoutPatientInputSchema),
				z.lazy(() => PrescriptionUncheckedUpdateWithoutPatientInputSchema),
			]),
		})
		.strict()

export default PrescriptionUpdateWithWhereUniqueWithoutPatientInputSchema
