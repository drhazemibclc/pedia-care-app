import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { LabTestCreateWithoutMedicalRecordInputSchema } from './LabTestCreateWithoutMedicalRecordInputSchema'
import { LabTestUncheckedCreateWithoutMedicalRecordInputSchema } from './LabTestUncheckedCreateWithoutMedicalRecordInputSchema'
import { LabTestUncheckedUpdateWithoutMedicalRecordInputSchema } from './LabTestUncheckedUpdateWithoutMedicalRecordInputSchema'
import { LabTestUpdateWithoutMedicalRecordInputSchema } from './LabTestUpdateWithoutMedicalRecordInputSchema'
import { LabTestWhereUniqueInputSchema } from './LabTestWhereUniqueInputSchema'

export const LabTestUpsertWithWhereUniqueWithoutMedicalRecordInputSchema: z.ZodType<Prisma.LabTestUpsertWithWhereUniqueWithoutMedicalRecordInput> =
	z
		.object({
			where: z.lazy(() => LabTestWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => LabTestUpdateWithoutMedicalRecordInputSchema),
				z.lazy(() => LabTestUncheckedUpdateWithoutMedicalRecordInputSchema),
			]),
			create: z.union([
				z.lazy(() => LabTestCreateWithoutMedicalRecordInputSchema),
				z.lazy(() => LabTestUncheckedCreateWithoutMedicalRecordInputSchema),
			]),
		})
		.strict()

export default LabTestUpsertWithWhereUniqueWithoutMedicalRecordInputSchema
