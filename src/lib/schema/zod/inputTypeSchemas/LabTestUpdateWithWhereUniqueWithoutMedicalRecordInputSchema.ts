import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { LabTestUncheckedUpdateWithoutMedicalRecordInputSchema } from './LabTestUncheckedUpdateWithoutMedicalRecordInputSchema'
import { LabTestUpdateWithoutMedicalRecordInputSchema } from './LabTestUpdateWithoutMedicalRecordInputSchema'
import { LabTestWhereUniqueInputSchema } from './LabTestWhereUniqueInputSchema'

export const LabTestUpdateWithWhereUniqueWithoutMedicalRecordInputSchema: z.ZodType<Prisma.LabTestUpdateWithWhereUniqueWithoutMedicalRecordInput> =
	z
		.object({
			where: z.lazy(() => LabTestWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => LabTestUpdateWithoutMedicalRecordInputSchema),
				z.lazy(() => LabTestUncheckedUpdateWithoutMedicalRecordInputSchema),
			]),
		})
		.strict()

export default LabTestUpdateWithWhereUniqueWithoutMedicalRecordInputSchema
