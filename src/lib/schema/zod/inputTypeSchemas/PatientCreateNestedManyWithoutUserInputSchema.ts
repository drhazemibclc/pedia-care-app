import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientCreateManyUserInputEnvelopeSchema } from './PatientCreateManyUserInputEnvelopeSchema'
import { PatientCreateOrConnectWithoutUserInputSchema } from './PatientCreateOrConnectWithoutUserInputSchema'
import { PatientCreateWithoutUserInputSchema } from './PatientCreateWithoutUserInputSchema'
import { PatientUncheckedCreateWithoutUserInputSchema } from './PatientUncheckedCreateWithoutUserInputSchema'
import { PatientWhereUniqueInputSchema } from './PatientWhereUniqueInputSchema'

export const PatientCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.PatientCreateNestedManyWithoutUserInput> =
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
			createMany: z.lazy(() => PatientCreateManyUserInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => PatientWhereUniqueInputSchema),
					z.lazy(() => PatientWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict()

export default PatientCreateNestedManyWithoutUserInputSchema
