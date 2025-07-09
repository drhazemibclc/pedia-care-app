import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DoctorCreateManyUserInputEnvelopeSchema } from './DoctorCreateManyUserInputEnvelopeSchema'
import { DoctorCreateOrConnectWithoutUserInputSchema } from './DoctorCreateOrConnectWithoutUserInputSchema'
import { DoctorCreateWithoutUserInputSchema } from './DoctorCreateWithoutUserInputSchema'
import { DoctorUncheckedCreateWithoutUserInputSchema } from './DoctorUncheckedCreateWithoutUserInputSchema'
import { DoctorWhereUniqueInputSchema } from './DoctorWhereUniqueInputSchema'

export const DoctorUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.DoctorUncheckedCreateNestedManyWithoutUserInput> =
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
			createMany: z.lazy(() => DoctorCreateManyUserInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => DoctorWhereUniqueInputSchema),
					z.lazy(() => DoctorWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict()

export default DoctorUncheckedCreateNestedManyWithoutUserInputSchema
