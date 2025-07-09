import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { VitalSignsCreateManyMedicalInputEnvelopeSchema } from './VitalSignsCreateManyMedicalInputEnvelopeSchema'
import { VitalSignsCreateOrConnectWithoutMedicalInputSchema } from './VitalSignsCreateOrConnectWithoutMedicalInputSchema'
import { VitalSignsCreateWithoutMedicalInputSchema } from './VitalSignsCreateWithoutMedicalInputSchema'
import { VitalSignsScalarWhereInputSchema } from './VitalSignsScalarWhereInputSchema'
import { VitalSignsUncheckedCreateWithoutMedicalInputSchema } from './VitalSignsUncheckedCreateWithoutMedicalInputSchema'
import { VitalSignsUpdateManyWithWhereWithoutMedicalInputSchema } from './VitalSignsUpdateManyWithWhereWithoutMedicalInputSchema'
import { VitalSignsUpdateWithWhereUniqueWithoutMedicalInputSchema } from './VitalSignsUpdateWithWhereUniqueWithoutMedicalInputSchema'
import { VitalSignsUpsertWithWhereUniqueWithoutMedicalInputSchema } from './VitalSignsUpsertWithWhereUniqueWithoutMedicalInputSchema'
import { VitalSignsWhereUniqueInputSchema } from './VitalSignsWhereUniqueInputSchema'

export const VitalSignsUpdateManyWithoutMedicalNestedInputSchema: z.ZodType<Prisma.VitalSignsUpdateManyWithoutMedicalNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => VitalSignsCreateWithoutMedicalInputSchema),
					z.lazy(() => VitalSignsCreateWithoutMedicalInputSchema).array(),
					z.lazy(() => VitalSignsUncheckedCreateWithoutMedicalInputSchema),
					z.lazy(() => VitalSignsUncheckedCreateWithoutMedicalInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => VitalSignsCreateOrConnectWithoutMedicalInputSchema),
					z.lazy(() => VitalSignsCreateOrConnectWithoutMedicalInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => VitalSignsUpsertWithWhereUniqueWithoutMedicalInputSchema),
					z.lazy(() => VitalSignsUpsertWithWhereUniqueWithoutMedicalInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => VitalSignsCreateManyMedicalInputEnvelopeSchema).optional(),
			set: z
				.union([
					z.lazy(() => VitalSignsWhereUniqueInputSchema),
					z.lazy(() => VitalSignsWhereUniqueInputSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => VitalSignsWhereUniqueInputSchema),
					z.lazy(() => VitalSignsWhereUniqueInputSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => VitalSignsWhereUniqueInputSchema),
					z.lazy(() => VitalSignsWhereUniqueInputSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => VitalSignsWhereUniqueInputSchema),
					z.lazy(() => VitalSignsWhereUniqueInputSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(() => VitalSignsUpdateWithWhereUniqueWithoutMedicalInputSchema),
					z.lazy(() => VitalSignsUpdateWithWhereUniqueWithoutMedicalInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => VitalSignsUpdateManyWithWhereWithoutMedicalInputSchema),
					z.lazy(() => VitalSignsUpdateManyWithWhereWithoutMedicalInputSchema).array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => VitalSignsScalarWhereInputSchema),
					z.lazy(() => VitalSignsScalarWhereInputSchema).array(),
				])
				.optional(),
		})
		.strict()

export default VitalSignsUpdateManyWithoutMedicalNestedInputSchema
