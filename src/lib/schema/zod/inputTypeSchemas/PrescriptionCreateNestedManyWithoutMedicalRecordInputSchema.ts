import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PrescriptionCreateManyMedicalRecordInputEnvelopeSchema } from './PrescriptionCreateManyMedicalRecordInputEnvelopeSchema'
import { PrescriptionCreateOrConnectWithoutMedicalRecordInputSchema } from './PrescriptionCreateOrConnectWithoutMedicalRecordInputSchema'
import { PrescriptionCreateWithoutMedicalRecordInputSchema } from './PrescriptionCreateWithoutMedicalRecordInputSchema'
import { PrescriptionUncheckedCreateWithoutMedicalRecordInputSchema } from './PrescriptionUncheckedCreateWithoutMedicalRecordInputSchema'
import { PrescriptionWhereUniqueInputSchema } from './PrescriptionWhereUniqueInputSchema'

export const PrescriptionCreateNestedManyWithoutMedicalRecordInputSchema: z.ZodType<Prisma.PrescriptionCreateNestedManyWithoutMedicalRecordInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => PrescriptionCreateWithoutMedicalRecordInputSchema),
					z.lazy(() => PrescriptionCreateWithoutMedicalRecordInputSchema).array(),
					z.lazy(() => PrescriptionUncheckedCreateWithoutMedicalRecordInputSchema),
					z.lazy(() => PrescriptionUncheckedCreateWithoutMedicalRecordInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => PrescriptionCreateOrConnectWithoutMedicalRecordInputSchema),
					z.lazy(() => PrescriptionCreateOrConnectWithoutMedicalRecordInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => PrescriptionCreateManyMedicalRecordInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => PrescriptionWhereUniqueInputSchema),
					z.lazy(() => PrescriptionWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict()

export default PrescriptionCreateNestedManyWithoutMedicalRecordInputSchema
