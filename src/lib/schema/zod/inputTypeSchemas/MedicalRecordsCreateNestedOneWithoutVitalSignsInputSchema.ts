import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { MedicalRecordsCreateOrConnectWithoutVitalSignsInputSchema } from './MedicalRecordsCreateOrConnectWithoutVitalSignsInputSchema'
import { MedicalRecordsCreateWithoutVitalSignsInputSchema } from './MedicalRecordsCreateWithoutVitalSignsInputSchema'
import { MedicalRecordsUncheckedCreateWithoutVitalSignsInputSchema } from './MedicalRecordsUncheckedCreateWithoutVitalSignsInputSchema'
import { MedicalRecordsWhereUniqueInputSchema } from './MedicalRecordsWhereUniqueInputSchema'

export const MedicalRecordsCreateNestedOneWithoutVitalSignsInputSchema: z.ZodType<Prisma.MedicalRecordsCreateNestedOneWithoutVitalSignsInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => MedicalRecordsCreateWithoutVitalSignsInputSchema),
					z.lazy(() => MedicalRecordsUncheckedCreateWithoutVitalSignsInputSchema),
				])
				.optional(),
			connectOrCreate: z
				.lazy(() => MedicalRecordsCreateOrConnectWithoutVitalSignsInputSchema)
				.optional(),
			connect: z.lazy(() => MedicalRecordsWhereUniqueInputSchema).optional(),
		})
		.strict()

export default MedicalRecordsCreateNestedOneWithoutVitalSignsInputSchema
