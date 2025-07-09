import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PrescriptionCreateWithoutMedicalRecordInputSchema } from './PrescriptionCreateWithoutMedicalRecordInputSchema'
import { PrescriptionUncheckedCreateWithoutMedicalRecordInputSchema } from './PrescriptionUncheckedCreateWithoutMedicalRecordInputSchema'
import { PrescriptionUncheckedUpdateWithoutMedicalRecordInputSchema } from './PrescriptionUncheckedUpdateWithoutMedicalRecordInputSchema'
import { PrescriptionUpdateWithoutMedicalRecordInputSchema } from './PrescriptionUpdateWithoutMedicalRecordInputSchema'
import { PrescriptionWhereUniqueInputSchema } from './PrescriptionWhereUniqueInputSchema'

export const PrescriptionUpsertWithWhereUniqueWithoutMedicalRecordInputSchema: z.ZodType<Prisma.PrescriptionUpsertWithWhereUniqueWithoutMedicalRecordInput> =
	z
		.object({
			where: z.lazy(() => PrescriptionWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => PrescriptionUpdateWithoutMedicalRecordInputSchema),
				z.lazy(() => PrescriptionUncheckedUpdateWithoutMedicalRecordInputSchema),
			]),
			create: z.union([
				z.lazy(() => PrescriptionCreateWithoutMedicalRecordInputSchema),
				z.lazy(() => PrescriptionUncheckedCreateWithoutMedicalRecordInputSchema),
			]),
		})
		.strict()

export default PrescriptionUpsertWithWhereUniqueWithoutMedicalRecordInputSchema
