import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DoctorCreateManyUserInputEnvelopeSchema } from './DoctorCreateManyUserInputEnvelopeSchema'
import { DoctorCreateOrConnectWithoutUserInputSchema } from './DoctorCreateOrConnectWithoutUserInputSchema'
import { DoctorCreateWithoutUserInputSchema } from './DoctorCreateWithoutUserInputSchema'
import { DoctorScalarWhereInputSchema } from './DoctorScalarWhereInputSchema'
import { DoctorUncheckedCreateWithoutUserInputSchema } from './DoctorUncheckedCreateWithoutUserInputSchema'
import { DoctorUpdateManyWithWhereWithoutUserInputSchema } from './DoctorUpdateManyWithWhereWithoutUserInputSchema'
import { DoctorUpdateWithWhereUniqueWithoutUserInputSchema } from './DoctorUpdateWithWhereUniqueWithoutUserInputSchema'
import { DoctorUpsertWithWhereUniqueWithoutUserInputSchema } from './DoctorUpsertWithWhereUniqueWithoutUserInputSchema'
import { DoctorWhereUniqueInputSchema } from './DoctorWhereUniqueInputSchema'

export const DoctorUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.DoctorUncheckedUpdateManyWithoutUserNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => DoctorCreateWithoutUserInputSchema),
					z.lazy(() => DoctorCreateWithoutUserInputSchema).array(),
					z.lazy(() => DoctorUncheckedCreateWithoutUserInputSchema),
					z.lazy(() => DoctorUncheckedCreateWithoutUserInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => DoctorCreateOrConnectWithoutUserInputSchema),
					z.lazy(() => DoctorCreateOrConnectWithoutUserInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => DoctorUpsertWithWhereUniqueWithoutUserInputSchema),
					z.lazy(() => DoctorUpsertWithWhereUniqueWithoutUserInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => DoctorCreateManyUserInputEnvelopeSchema).optional(),
			set: z
				.union([
					z.lazy(() => DoctorWhereUniqueInputSchema),
					z.lazy(() => DoctorWhereUniqueInputSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => DoctorWhereUniqueInputSchema),
					z.lazy(() => DoctorWhereUniqueInputSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => DoctorWhereUniqueInputSchema),
					z.lazy(() => DoctorWhereUniqueInputSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => DoctorWhereUniqueInputSchema),
					z.lazy(() => DoctorWhereUniqueInputSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(() => DoctorUpdateWithWhereUniqueWithoutUserInputSchema),
					z.lazy(() => DoctorUpdateWithWhereUniqueWithoutUserInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => DoctorUpdateManyWithWhereWithoutUserInputSchema),
					z.lazy(() => DoctorUpdateManyWithWhereWithoutUserInputSchema).array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => DoctorScalarWhereInputSchema),
					z.lazy(() => DoctorScalarWhereInputSchema).array(),
				])
				.optional(),
		})
		.strict()

export default DoctorUncheckedUpdateManyWithoutUserNestedInputSchema
