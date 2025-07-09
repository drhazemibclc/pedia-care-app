import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { StaffCreateManyUserInputEnvelopeSchema } from './StaffCreateManyUserInputEnvelopeSchema'
import { StaffCreateOrConnectWithoutUserInputSchema } from './StaffCreateOrConnectWithoutUserInputSchema'
import { StaffCreateWithoutUserInputSchema } from './StaffCreateWithoutUserInputSchema'
import { StaffScalarWhereInputSchema } from './StaffScalarWhereInputSchema'
import { StaffUncheckedCreateWithoutUserInputSchema } from './StaffUncheckedCreateWithoutUserInputSchema'
import { StaffUpdateManyWithWhereWithoutUserInputSchema } from './StaffUpdateManyWithWhereWithoutUserInputSchema'
import { StaffUpdateWithWhereUniqueWithoutUserInputSchema } from './StaffUpdateWithWhereUniqueWithoutUserInputSchema'
import { StaffUpsertWithWhereUniqueWithoutUserInputSchema } from './StaffUpsertWithWhereUniqueWithoutUserInputSchema'
import { StaffWhereUniqueInputSchema } from './StaffWhereUniqueInputSchema'

export const StaffUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.StaffUpdateManyWithoutUserNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => StaffCreateWithoutUserInputSchema),
					z.lazy(() => StaffCreateWithoutUserInputSchema).array(),
					z.lazy(() => StaffUncheckedCreateWithoutUserInputSchema),
					z.lazy(() => StaffUncheckedCreateWithoutUserInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => StaffCreateOrConnectWithoutUserInputSchema),
					z.lazy(() => StaffCreateOrConnectWithoutUserInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => StaffUpsertWithWhereUniqueWithoutUserInputSchema),
					z.lazy(() => StaffUpsertWithWhereUniqueWithoutUserInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => StaffCreateManyUserInputEnvelopeSchema).optional(),
			set: z
				.union([
					z.lazy(() => StaffWhereUniqueInputSchema),
					z.lazy(() => StaffWhereUniqueInputSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => StaffWhereUniqueInputSchema),
					z.lazy(() => StaffWhereUniqueInputSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => StaffWhereUniqueInputSchema),
					z.lazy(() => StaffWhereUniqueInputSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => StaffWhereUniqueInputSchema),
					z.lazy(() => StaffWhereUniqueInputSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(() => StaffUpdateWithWhereUniqueWithoutUserInputSchema),
					z.lazy(() => StaffUpdateWithWhereUniqueWithoutUserInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => StaffUpdateManyWithWhereWithoutUserInputSchema),
					z.lazy(() => StaffUpdateManyWithWhereWithoutUserInputSchema).array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => StaffScalarWhereInputSchema),
					z.lazy(() => StaffScalarWhereInputSchema).array(),
				])
				.optional(),
		})
		.strict()

export default StaffUpdateManyWithoutUserNestedInputSchema
