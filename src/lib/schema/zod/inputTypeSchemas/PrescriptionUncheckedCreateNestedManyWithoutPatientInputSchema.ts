import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PrescriptionCreateManyPatientInputEnvelopeSchema } from './PrescriptionCreateManyPatientInputEnvelopeSchema'
import { PrescriptionCreateOrConnectWithoutPatientInputSchema } from './PrescriptionCreateOrConnectWithoutPatientInputSchema'
import { PrescriptionCreateWithoutPatientInputSchema } from './PrescriptionCreateWithoutPatientInputSchema'
import { PrescriptionUncheckedCreateWithoutPatientInputSchema } from './PrescriptionUncheckedCreateWithoutPatientInputSchema'
import { PrescriptionWhereUniqueInputSchema } from './PrescriptionWhereUniqueInputSchema'

export const PrescriptionUncheckedCreateNestedManyWithoutPatientInputSchema: z.ZodType<Prisma.PrescriptionUncheckedCreateNestedManyWithoutPatientInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => PrescriptionCreateWithoutPatientInputSchema),
					z.lazy(() => PrescriptionCreateWithoutPatientInputSchema).array(),
					z.lazy(() => PrescriptionUncheckedCreateWithoutPatientInputSchema),
					z.lazy(() => PrescriptionUncheckedCreateWithoutPatientInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => PrescriptionCreateOrConnectWithoutPatientInputSchema),
					z.lazy(() => PrescriptionCreateOrConnectWithoutPatientInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => PrescriptionCreateManyPatientInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => PrescriptionWhereUniqueInputSchema),
					z.lazy(() => PrescriptionWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict()

export default PrescriptionUncheckedCreateNestedManyWithoutPatientInputSchema
