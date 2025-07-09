import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { LabTestCreateManyMedicalRecordInputEnvelopeSchema } from './LabTestCreateManyMedicalRecordInputEnvelopeSchema'
import { LabTestCreateOrConnectWithoutMedicalRecordInputSchema } from './LabTestCreateOrConnectWithoutMedicalRecordInputSchema'
import { LabTestCreateWithoutMedicalRecordInputSchema } from './LabTestCreateWithoutMedicalRecordInputSchema'
import { LabTestUncheckedCreateWithoutMedicalRecordInputSchema } from './LabTestUncheckedCreateWithoutMedicalRecordInputSchema'
import { LabTestWhereUniqueInputSchema } from './LabTestWhereUniqueInputSchema'

export const LabTestCreateNestedManyWithoutMedicalRecordInputSchema: z.ZodType<Prisma.LabTestCreateNestedManyWithoutMedicalRecordInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => LabTestCreateWithoutMedicalRecordInputSchema),
					z.lazy(() => LabTestCreateWithoutMedicalRecordInputSchema).array(),
					z.lazy(() => LabTestUncheckedCreateWithoutMedicalRecordInputSchema),
					z.lazy(() => LabTestUncheckedCreateWithoutMedicalRecordInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => LabTestCreateOrConnectWithoutMedicalRecordInputSchema),
					z.lazy(() => LabTestCreateOrConnectWithoutMedicalRecordInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => LabTestCreateManyMedicalRecordInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => LabTestWhereUniqueInputSchema),
					z.lazy(() => LabTestWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict()

export default LabTestCreateNestedManyWithoutMedicalRecordInputSchema
