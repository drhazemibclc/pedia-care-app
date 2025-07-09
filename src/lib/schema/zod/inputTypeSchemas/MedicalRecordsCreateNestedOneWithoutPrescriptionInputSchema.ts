import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { MedicalRecordsCreateOrConnectWithoutPrescriptionInputSchema } from './MedicalRecordsCreateOrConnectWithoutPrescriptionInputSchema'
import { MedicalRecordsCreateWithoutPrescriptionInputSchema } from './MedicalRecordsCreateWithoutPrescriptionInputSchema'
import { MedicalRecordsUncheckedCreateWithoutPrescriptionInputSchema } from './MedicalRecordsUncheckedCreateWithoutPrescriptionInputSchema'
import { MedicalRecordsWhereUniqueInputSchema } from './MedicalRecordsWhereUniqueInputSchema'

export const MedicalRecordsCreateNestedOneWithoutPrescriptionInputSchema: z.ZodType<Prisma.MedicalRecordsCreateNestedOneWithoutPrescriptionInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => MedicalRecordsCreateWithoutPrescriptionInputSchema),
					z.lazy(() => MedicalRecordsUncheckedCreateWithoutPrescriptionInputSchema),
				])
				.optional(),
			connectOrCreate: z
				.lazy(() => MedicalRecordsCreateOrConnectWithoutPrescriptionInputSchema)
				.optional(),
			connect: z.lazy(() => MedicalRecordsWhereUniqueInputSchema).optional(),
		})
		.strict()

export default MedicalRecordsCreateNestedOneWithoutPrescriptionInputSchema
