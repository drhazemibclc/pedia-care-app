import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { StaffCreateManyUserInputEnvelopeSchema } from './StaffCreateManyUserInputEnvelopeSchema'
import { StaffCreateOrConnectWithoutUserInputSchema } from './StaffCreateOrConnectWithoutUserInputSchema'
import { StaffCreateWithoutUserInputSchema } from './StaffCreateWithoutUserInputSchema'
import { StaffUncheckedCreateWithoutUserInputSchema } from './StaffUncheckedCreateWithoutUserInputSchema'
import { StaffWhereUniqueInputSchema } from './StaffWhereUniqueInputSchema'

export const StaffCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.StaffCreateNestedManyWithoutUserInput> =
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
			createMany: z.lazy(() => StaffCreateManyUserInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => StaffWhereUniqueInputSchema),
					z.lazy(() => StaffWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict()

export default StaffCreateNestedManyWithoutUserInputSchema
