import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RatingCreateManyDoctorInputEnvelopeSchema } from './RatingCreateManyDoctorInputEnvelopeSchema'
import { RatingCreateOrConnectWithoutDoctorInputSchema } from './RatingCreateOrConnectWithoutDoctorInputSchema'
import { RatingCreateWithoutDoctorInputSchema } from './RatingCreateWithoutDoctorInputSchema'
import { RatingUncheckedCreateWithoutDoctorInputSchema } from './RatingUncheckedCreateWithoutDoctorInputSchema'
import { RatingWhereUniqueInputSchema } from './RatingWhereUniqueInputSchema'

export const RatingUncheckedCreateNestedManyWithoutDoctorInputSchema: z.ZodType<Prisma.RatingUncheckedCreateNestedManyWithoutDoctorInput> =
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
			createMany: z.lazy(() => RatingCreateManyDoctorInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => RatingWhereUniqueInputSchema),
					z.lazy(() => RatingWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict()

export default RatingUncheckedCreateNestedManyWithoutDoctorInputSchema
