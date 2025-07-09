import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { MedicalRecordsCreateWithoutPatientInputSchema } from './MedicalRecordsCreateWithoutPatientInputSchema'
import { MedicalRecordsUncheckedCreateWithoutPatientInputSchema } from './MedicalRecordsUncheckedCreateWithoutPatientInputSchema'
import { MedicalRecordsWhereUniqueInputSchema } from './MedicalRecordsWhereUniqueInputSchema'

export const MedicalRecordsCreateOrConnectWithoutPatientInputSchema: z.ZodType<Prisma.MedicalRecordsCreateOrConnectWithoutPatientInput> =
	z
		.object({
			where: z.lazy(() => MedicalRecordsWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => MedicalRecordsCreateWithoutPatientInputSchema),
				z.lazy(() => MedicalRecordsUncheckedCreateWithoutPatientInputSchema),
			]),
		})
		.strict()

export default MedicalRecordsCreateOrConnectWithoutPatientInputSchema
