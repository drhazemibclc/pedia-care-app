import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientCreateManyUserInputEnvelopeSchema } from './PatientCreateManyUserInputEnvelopeSchema'
import { PatientCreateOrConnectWithoutUserInputSchema } from './PatientCreateOrConnectWithoutUserInputSchema'
import { PatientCreateWithoutUserInputSchema } from './PatientCreateWithoutUserInputSchema'
import { PatientScalarWhereInputSchema } from './PatientScalarWhereInputSchema'
import { PatientUncheckedCreateWithoutUserInputSchema } from './PatientUncheckedCreateWithoutUserInputSchema'
import { PatientUpdateManyWithWhereWithoutUserInputSchema } from './PatientUpdateManyWithWhereWithoutUserInputSchema'
import { PatientUpdateWithWhereUniqueWithoutUserInputSchema } from './PatientUpdateWithWhereUniqueWithoutUserInputSchema'
import { PatientUpsertWithWhereUniqueWithoutUserInputSchema } from './PatientUpsertWithWhereUniqueWithoutUserInputSchema'
import { PatientWhereUniqueInputSchema } from './PatientWhereUniqueInputSchema'

export const PatientUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.PatientUpdateManyWithoutUserNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => PatientCreateWithoutUserInputSchema),
					z.lazy(() => PatientCreateWithoutUserInputSchema).array(),
					z.lazy(() => PatientUncheckedCreateWithoutUserInputSchema),
					z.lazy(() => PatientUncheckedCreateWithoutUserInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => PatientCreateOrConnectWithoutUserInputSchema),
					z.lazy(() => PatientCreateOrConnectWithoutUserInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => PatientUpsertWithWhereUniqueWithoutUserInputSchema),
					z.lazy(() => PatientUpsertWithWhereUniqueWithoutUserInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => PatientCreateManyUserInputEnvelopeSchema).optional(),
			set: z
				.union([
					z.lazy(() => PatientWhereUniqueInputSchema),
					z.lazy(() => PatientWhereUniqueInputSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => PatientWhereUniqueInputSchema),
					z.lazy(() => PatientWhereUniqueInputSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => PatientWhereUniqueInputSchema),
					z.lazy(() => PatientWhereUniqueInputSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => PatientWhereUniqueInputSchema),
					z.lazy(() => PatientWhereUniqueInputSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(() => PatientUpdateWithWhereUniqueWithoutUserInputSchema),
					z.lazy(() => PatientUpdateWithWhereUniqueWithoutUserInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => PatientUpdateManyWithWhereWithoutUserInputSchema),
					z.lazy(() => PatientUpdateManyWithWhereWithoutUserInputSchema).array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => PatientScalarWhereInputSchema),
					z.lazy(() => PatientScalarWhereInputSchema).array(),
				])
				.optional(),
		})
		.strict()

export default PatientUpdateManyWithoutUserNestedInputSchema
