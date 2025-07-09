import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PrescriptionCreateManyPatientInputEnvelopeSchema } from './PrescriptionCreateManyPatientInputEnvelopeSchema'
import { PrescriptionCreateOrConnectWithoutPatientInputSchema } from './PrescriptionCreateOrConnectWithoutPatientInputSchema'
import { PrescriptionCreateWithoutPatientInputSchema } from './PrescriptionCreateWithoutPatientInputSchema'
import { PrescriptionScalarWhereInputSchema } from './PrescriptionScalarWhereInputSchema'
import { PrescriptionUncheckedCreateWithoutPatientInputSchema } from './PrescriptionUncheckedCreateWithoutPatientInputSchema'
import { PrescriptionUpdateManyWithWhereWithoutPatientInputSchema } from './PrescriptionUpdateManyWithWhereWithoutPatientInputSchema'
import { PrescriptionUpdateWithWhereUniqueWithoutPatientInputSchema } from './PrescriptionUpdateWithWhereUniqueWithoutPatientInputSchema'
import { PrescriptionUpsertWithWhereUniqueWithoutPatientInputSchema } from './PrescriptionUpsertWithWhereUniqueWithoutPatientInputSchema'
import { PrescriptionWhereUniqueInputSchema } from './PrescriptionWhereUniqueInputSchema'

export const PrescriptionUncheckedUpdateManyWithoutPatientNestedInputSchema: z.ZodType<Prisma.PrescriptionUncheckedUpdateManyWithoutPatientNestedInput> =
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
			upsert: z
				.union([
					z.lazy(() => PrescriptionUpsertWithWhereUniqueWithoutPatientInputSchema),
					z.lazy(() => PrescriptionUpsertWithWhereUniqueWithoutPatientInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => PrescriptionCreateManyPatientInputEnvelopeSchema).optional(),
			set: z
				.union([
					z.lazy(() => PrescriptionWhereUniqueInputSchema),
					z.lazy(() => PrescriptionWhereUniqueInputSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => PrescriptionWhereUniqueInputSchema),
					z.lazy(() => PrescriptionWhereUniqueInputSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => PrescriptionWhereUniqueInputSchema),
					z.lazy(() => PrescriptionWhereUniqueInputSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => PrescriptionWhereUniqueInputSchema),
					z.lazy(() => PrescriptionWhereUniqueInputSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(() => PrescriptionUpdateWithWhereUniqueWithoutPatientInputSchema),
					z.lazy(() => PrescriptionUpdateWithWhereUniqueWithoutPatientInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => PrescriptionUpdateManyWithWhereWithoutPatientInputSchema),
					z.lazy(() => PrescriptionUpdateManyWithWhereWithoutPatientInputSchema).array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => PrescriptionScalarWhereInputSchema),
					z.lazy(() => PrescriptionScalarWhereInputSchema).array(),
				])
				.optional(),
		})
		.strict()

export default PrescriptionUncheckedUpdateManyWithoutPatientNestedInputSchema
