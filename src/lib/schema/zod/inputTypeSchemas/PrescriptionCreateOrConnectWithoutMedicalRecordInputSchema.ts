import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PrescriptionCreateWithoutMedicalRecordInputSchema } from './PrescriptionCreateWithoutMedicalRecordInputSchema'
import { PrescriptionUncheckedCreateWithoutMedicalRecordInputSchema } from './PrescriptionUncheckedCreateWithoutMedicalRecordInputSchema'
import { PrescriptionWhereUniqueInputSchema } from './PrescriptionWhereUniqueInputSchema'

export const PrescriptionCreateOrConnectWithoutMedicalRecordInputSchema: z.ZodType<Prisma.PrescriptionCreateOrConnectWithoutMedicalRecordInput> =
	z
		.object({
			where: z.lazy(() => PrescriptionWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => PrescriptionCreateWithoutMedicalRecordInputSchema),
				z.lazy(() => PrescriptionUncheckedCreateWithoutMedicalRecordInputSchema),
			]),
		})
		.strict()

export default PrescriptionCreateOrConnectWithoutMedicalRecordInputSchema
