import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { LabTestCreateWithoutMedicalRecordInputSchema } from './LabTestCreateWithoutMedicalRecordInputSchema'
import { LabTestUncheckedCreateWithoutMedicalRecordInputSchema } from './LabTestUncheckedCreateWithoutMedicalRecordInputSchema'
import { LabTestWhereUniqueInputSchema } from './LabTestWhereUniqueInputSchema'

export const LabTestCreateOrConnectWithoutMedicalRecordInputSchema: z.ZodType<Prisma.LabTestCreateOrConnectWithoutMedicalRecordInput> =
	z
		.object({
			where: z.lazy(() => LabTestWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => LabTestCreateWithoutMedicalRecordInputSchema),
				z.lazy(() => LabTestUncheckedCreateWithoutMedicalRecordInputSchema),
			]),
		})
		.strict()

export default LabTestCreateOrConnectWithoutMedicalRecordInputSchema
