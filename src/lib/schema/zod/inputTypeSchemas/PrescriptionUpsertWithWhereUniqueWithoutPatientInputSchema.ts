import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PrescriptionCreateWithoutPatientInputSchema } from './PrescriptionCreateWithoutPatientInputSchema'
import { PrescriptionUncheckedCreateWithoutPatientInputSchema } from './PrescriptionUncheckedCreateWithoutPatientInputSchema'
import { PrescriptionUncheckedUpdateWithoutPatientInputSchema } from './PrescriptionUncheckedUpdateWithoutPatientInputSchema'
import { PrescriptionUpdateWithoutPatientInputSchema } from './PrescriptionUpdateWithoutPatientInputSchema'
import { PrescriptionWhereUniqueInputSchema } from './PrescriptionWhereUniqueInputSchema'

export const PrescriptionUpsertWithWhereUniqueWithoutPatientInputSchema: z.ZodType<Prisma.PrescriptionUpsertWithWhereUniqueWithoutPatientInput> =
	z
		.object({
			where: z.lazy(() => PrescriptionWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => PrescriptionUpdateWithoutPatientInputSchema),
				z.lazy(() => PrescriptionUncheckedUpdateWithoutPatientInputSchema),
			]),
			create: z.union([
				z.lazy(() => PrescriptionCreateWithoutPatientInputSchema),
				z.lazy(() => PrescriptionUncheckedCreateWithoutPatientInputSchema),
			]),
		})
		.strict()

export default PrescriptionUpsertWithWhereUniqueWithoutPatientInputSchema
