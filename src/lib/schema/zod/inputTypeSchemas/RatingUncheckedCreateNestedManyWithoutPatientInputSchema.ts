import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RatingCreateManyPatientInputEnvelopeSchema } from './RatingCreateManyPatientInputEnvelopeSchema'
import { RatingCreateOrConnectWithoutPatientInputSchema } from './RatingCreateOrConnectWithoutPatientInputSchema'
import { RatingCreateWithoutPatientInputSchema } from './RatingCreateWithoutPatientInputSchema'
import { RatingUncheckedCreateWithoutPatientInputSchema } from './RatingUncheckedCreateWithoutPatientInputSchema'
import { RatingWhereUniqueInputSchema } from './RatingWhereUniqueInputSchema'

export const RatingUncheckedCreateNestedManyWithoutPatientInputSchema: z.ZodType<Prisma.RatingUncheckedCreateNestedManyWithoutPatientInput> =
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
			createMany: z.lazy(() => RatingCreateManyPatientInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => RatingWhereUniqueInputSchema),
					z.lazy(() => RatingWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict()

export default RatingUncheckedCreateNestedManyWithoutPatientInputSchema
