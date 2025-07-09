import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { MedicalRecordsCreateWithoutPrescriptionInputSchema } from './MedicalRecordsCreateWithoutPrescriptionInputSchema'
import { MedicalRecordsUncheckedCreateWithoutPrescriptionInputSchema } from './MedicalRecordsUncheckedCreateWithoutPrescriptionInputSchema'
import { MedicalRecordsWhereUniqueInputSchema } from './MedicalRecordsWhereUniqueInputSchema'

export const MedicalRecordsCreateOrConnectWithoutPrescriptionInputSchema: z.ZodType<Prisma.MedicalRecordsCreateOrConnectWithoutPrescriptionInput> =
	z
		.object({
			where: z.lazy(() => MedicalRecordsWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => MedicalRecordsCreateWithoutPrescriptionInputSchema),
				z.lazy(() => MedicalRecordsUncheckedCreateWithoutPrescriptionInputSchema),
			]),
		})
		.strict()

export default MedicalRecordsCreateOrConnectWithoutPrescriptionInputSchema
