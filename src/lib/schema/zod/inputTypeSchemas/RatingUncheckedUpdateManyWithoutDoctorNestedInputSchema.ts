import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RatingCreateManyDoctorInputEnvelopeSchema } from './RatingCreateManyDoctorInputEnvelopeSchema'
import { RatingCreateOrConnectWithoutDoctorInputSchema } from './RatingCreateOrConnectWithoutDoctorInputSchema'
import { RatingCreateWithoutDoctorInputSchema } from './RatingCreateWithoutDoctorInputSchema'
import { RatingScalarWhereInputSchema } from './RatingScalarWhereInputSchema'
import { RatingUncheckedCreateWithoutDoctorInputSchema } from './RatingUncheckedCreateWithoutDoctorInputSchema'
import { RatingUpdateManyWithWhereWithoutDoctorInputSchema } from './RatingUpdateManyWithWhereWithoutDoctorInputSchema'
import { RatingUpdateWithWhereUniqueWithoutDoctorInputSchema } from './RatingUpdateWithWhereUniqueWithoutDoctorInputSchema'
import { RatingUpsertWithWhereUniqueWithoutDoctorInputSchema } from './RatingUpsertWithWhereUniqueWithoutDoctorInputSchema'
import { RatingWhereUniqueInputSchema } from './RatingWhereUniqueInputSchema'

export const RatingUncheckedUpdateManyWithoutDoctorNestedInputSchema: z.ZodType<Prisma.RatingUncheckedUpdateManyWithoutDoctorNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => RatingCreateWithoutDoctorInputSchema),
					z.lazy(() => RatingCreateWithoutDoctorInputSchema).array(),
					z.lazy(() => RatingUncheckedCreateWithoutDoctorInputSchema),
					z.lazy(() => RatingUncheckedCreateWithoutDoctorInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => RatingCreateOrConnectWithoutDoctorInputSchema),
					z.lazy(() => RatingCreateOrConnectWithoutDoctorInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => RatingUpsertWithWhereUniqueWithoutDoctorInputSchema),
					z.lazy(() => RatingUpsertWithWhereUniqueWithoutDoctorInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => RatingCreateManyDoctorInputEnvelopeSchema).optional(),
			set: z
				.union([
					z.lazy(() => RatingWhereUniqueInputSchema),
					z.lazy(() => RatingWhereUniqueInputSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => RatingWhereUniqueInputSchema),
					z.lazy(() => RatingWhereUniqueInputSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => RatingWhereUniqueInputSchema),
					z.lazy(() => RatingWhereUniqueInputSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => RatingWhereUniqueInputSchema),
					z.lazy(() => RatingWhereUniqueInputSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(() => RatingUpdateWithWhereUniqueWithoutDoctorInputSchema),
					z.lazy(() => RatingUpdateWithWhereUniqueWithoutDoctorInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => RatingUpdateManyWithWhereWithoutDoctorInputSchema),
					z.lazy(() => RatingUpdateManyWithWhereWithoutDoctorInputSchema).array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => RatingScalarWhereInputSchema),
					z.lazy(() => RatingScalarWhereInputSchema).array(),
				])
				.optional(),
		})
		.strict()

export default RatingUncheckedUpdateManyWithoutDoctorNestedInputSchema
