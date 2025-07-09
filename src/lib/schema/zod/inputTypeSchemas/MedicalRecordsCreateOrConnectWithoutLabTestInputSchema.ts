import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { MedicalRecordsCreateWithoutLabTestInputSchema } from './MedicalRecordsCreateWithoutLabTestInputSchema'
import { MedicalRecordsUncheckedCreateWithoutLabTestInputSchema } from './MedicalRecordsUncheckedCreateWithoutLabTestInputSchema'
import { MedicalRecordsWhereUniqueInputSchema } from './MedicalRecordsWhereUniqueInputSchema'

export const MedicalRecordsCreateOrConnectWithoutLabTestInputSchema: z.ZodType<Prisma.MedicalRecordsCreateOrConnectWithoutLabTestInput> =
	z
		.object({
			where: z.lazy(() => MedicalRecordsWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => MedicalRecordsCreateWithoutLabTestInputSchema),
				z.lazy(() => MedicalRecordsUncheckedCreateWithoutLabTestInputSchema),
			]),
		})
		.strict()

export default MedicalRecordsCreateOrConnectWithoutLabTestInputSchema
