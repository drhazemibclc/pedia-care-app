import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { MedicalRecordsCreateManyPatientInputEnvelopeSchema } from './MedicalRecordsCreateManyPatientInputEnvelopeSchema'
import { MedicalRecordsCreateOrConnectWithoutPatientInputSchema } from './MedicalRecordsCreateOrConnectWithoutPatientInputSchema'
import { MedicalRecordsCreateWithoutPatientInputSchema } from './MedicalRecordsCreateWithoutPatientInputSchema'
import { MedicalRecordsUncheckedCreateWithoutPatientInputSchema } from './MedicalRecordsUncheckedCreateWithoutPatientInputSchema'
import { MedicalRecordsWhereUniqueInputSchema } from './MedicalRecordsWhereUniqueInputSchema'

export const MedicalRecordsCreateNestedManyWithoutPatientInputSchema: z.ZodType<Prisma.MedicalRecordsCreateNestedManyWithoutPatientInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => MedicalRecordsCreateWithoutPatientInputSchema),
					z.lazy(() => MedicalRecordsCreateWithoutPatientInputSchema).array(),
					z.lazy(() => MedicalRecordsUncheckedCreateWithoutPatientInputSchema),
					z.lazy(() => MedicalRecordsUncheckedCreateWithoutPatientInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => MedicalRecordsCreateOrConnectWithoutPatientInputSchema),
					z.lazy(() => MedicalRecordsCreateOrConnectWithoutPatientInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => MedicalRecordsCreateManyPatientInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => MedicalRecordsWhereUniqueInputSchema),
					z.lazy(() => MedicalRecordsWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict()

export default MedicalRecordsCreateNestedManyWithoutPatientInputSchema
