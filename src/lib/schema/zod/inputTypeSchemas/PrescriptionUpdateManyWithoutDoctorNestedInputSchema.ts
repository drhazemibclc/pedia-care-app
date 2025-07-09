import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PrescriptionCreateManyDoctorInputEnvelopeSchema } from './PrescriptionCreateManyDoctorInputEnvelopeSchema'
import { PrescriptionCreateOrConnectWithoutDoctorInputSchema } from './PrescriptionCreateOrConnectWithoutDoctorInputSchema'
import { PrescriptionCreateWithoutDoctorInputSchema } from './PrescriptionCreateWithoutDoctorInputSchema'
import { PrescriptionScalarWhereInputSchema } from './PrescriptionScalarWhereInputSchema'
import { PrescriptionUncheckedCreateWithoutDoctorInputSchema } from './PrescriptionUncheckedCreateWithoutDoctorInputSchema'
import { PrescriptionUpdateManyWithWhereWithoutDoctorInputSchema } from './PrescriptionUpdateManyWithWhereWithoutDoctorInputSchema'
import { PrescriptionUpdateWithWhereUniqueWithoutDoctorInputSchema } from './PrescriptionUpdateWithWhereUniqueWithoutDoctorInputSchema'
import { PrescriptionUpsertWithWhereUniqueWithoutDoctorInputSchema } from './PrescriptionUpsertWithWhereUniqueWithoutDoctorInputSchema'
import { PrescriptionWhereUniqueInputSchema } from './PrescriptionWhereUniqueInputSchema'

export const PrescriptionUpdateManyWithoutDoctorNestedInputSchema: z.ZodType<Prisma.PrescriptionUpdateManyWithoutDoctorNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => PrescriptionCreateWithoutDoctorInputSchema),
					z.lazy(() => PrescriptionCreateWithoutDoctorInputSchema).array(),
					z.lazy(() => PrescriptionUncheckedCreateWithoutDoctorInputSchema),
					z.lazy(() => PrescriptionUncheckedCreateWithoutDoctorInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => PrescriptionCreateOrConnectWithoutDoctorInputSchema),
					z.lazy(() => PrescriptionCreateOrConnectWithoutDoctorInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => PrescriptionUpsertWithWhereUniqueWithoutDoctorInputSchema),
					z.lazy(() => PrescriptionUpsertWithWhereUniqueWithoutDoctorInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => PrescriptionCreateManyDoctorInputEnvelopeSchema).optional(),
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
					z.lazy(() => PrescriptionUpdateWithWhereUniqueWithoutDoctorInputSchema),
					z.lazy(() => PrescriptionUpdateWithWhereUniqueWithoutDoctorInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => PrescriptionUpdateManyWithWhereWithoutDoctorInputSchema),
					z.lazy(() => PrescriptionUpdateManyWithWhereWithoutDoctorInputSchema).array(),
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

export default PrescriptionUpdateManyWithoutDoctorNestedInputSchema
