import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { VitalSignsCreateManyMedicalInputEnvelopeSchema } from './VitalSignsCreateManyMedicalInputEnvelopeSchema'
import { VitalSignsCreateOrConnectWithoutMedicalInputSchema } from './VitalSignsCreateOrConnectWithoutMedicalInputSchema'
import { VitalSignsCreateWithoutMedicalInputSchema } from './VitalSignsCreateWithoutMedicalInputSchema'
import { VitalSignsUncheckedCreateWithoutMedicalInputSchema } from './VitalSignsUncheckedCreateWithoutMedicalInputSchema'
import { VitalSignsWhereUniqueInputSchema } from './VitalSignsWhereUniqueInputSchema'

export const VitalSignsCreateNestedManyWithoutMedicalInputSchema: z.ZodType<Prisma.VitalSignsCreateNestedManyWithoutMedicalInput> =
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
			createMany: z.lazy(() => VitalSignsCreateManyMedicalInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => VitalSignsWhereUniqueInputSchema),
					z.lazy(() => VitalSignsWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict()

export default VitalSignsCreateNestedManyWithoutMedicalInputSchema
