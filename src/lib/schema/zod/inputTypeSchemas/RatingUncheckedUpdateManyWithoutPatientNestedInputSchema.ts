import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RatingCreateManyPatientInputEnvelopeSchema } from './RatingCreateManyPatientInputEnvelopeSchema'
import { RatingCreateOrConnectWithoutPatientInputSchema } from './RatingCreateOrConnectWithoutPatientInputSchema'
import { RatingCreateWithoutPatientInputSchema } from './RatingCreateWithoutPatientInputSchema'
import { RatingScalarWhereInputSchema } from './RatingScalarWhereInputSchema'
import { RatingUncheckedCreateWithoutPatientInputSchema } from './RatingUncheckedCreateWithoutPatientInputSchema'
import { RatingUpdateManyWithWhereWithoutPatientInputSchema } from './RatingUpdateManyWithWhereWithoutPatientInputSchema'
import { RatingUpdateWithWhereUniqueWithoutPatientInputSchema } from './RatingUpdateWithWhereUniqueWithoutPatientInputSchema'
import { RatingUpsertWithWhereUniqueWithoutPatientInputSchema } from './RatingUpsertWithWhereUniqueWithoutPatientInputSchema'
import { RatingWhereUniqueInputSchema } from './RatingWhereUniqueInputSchema'

export const RatingUncheckedUpdateManyWithoutPatientNestedInputSchema: z.ZodType<Prisma.RatingUncheckedUpdateManyWithoutPatientNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => RatingCreateWithoutPatientInputSchema),
					z.lazy(() => RatingCreateWithoutPatientInputSchema).array(),
					z.lazy(() => RatingUncheckedCreateWithoutPatientInputSchema),
					z.lazy(() => RatingUncheckedCreateWithoutPatientInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => RatingCreateOrConnectWithoutPatientInputSchema),
					z.lazy(() => RatingCreateOrConnectWithoutPatientInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => RatingUpsertWithWhereUniqueWithoutPatientInputSchema),
					z.lazy(() => RatingUpsertWithWhereUniqueWithoutPatientInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => RatingCreateManyPatientInputEnvelopeSchema).optional(),
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
					z.lazy(() => RatingUpdateWithWhereUniqueWithoutPatientInputSchema),
					z.lazy(() => RatingUpdateWithWhereUniqueWithoutPatientInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => RatingUpdateManyWithWhereWithoutPatientInputSchema),
					z.lazy(() => RatingUpdateManyWithWhereWithoutPatientInputSchema).array(),
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

export default RatingUncheckedUpdateManyWithoutPatientNestedInputSchema
