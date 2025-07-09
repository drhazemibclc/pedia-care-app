import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { MedicalRecordsCreateOrConnectWithoutLabTestInputSchema } from './MedicalRecordsCreateOrConnectWithoutLabTestInputSchema'
import { MedicalRecordsCreateWithoutLabTestInputSchema } from './MedicalRecordsCreateWithoutLabTestInputSchema'
import { MedicalRecordsUncheckedCreateWithoutLabTestInputSchema } from './MedicalRecordsUncheckedCreateWithoutLabTestInputSchema'
import { MedicalRecordsWhereUniqueInputSchema } from './MedicalRecordsWhereUniqueInputSchema'

export const MedicalRecordsCreateNestedOneWithoutLabTestInputSchema: z.ZodType<Prisma.MedicalRecordsCreateNestedOneWithoutLabTestInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => MedicalRecordsCreateWithoutLabTestInputSchema),
					z.lazy(() => MedicalRecordsUncheckedCreateWithoutLabTestInputSchema),
				])
				.optional(),
			connectOrCreate: z
				.lazy(() => MedicalRecordsCreateOrConnectWithoutLabTestInputSchema)
				.optional(),
			connect: z.lazy(() => MedicalRecordsWhereUniqueInputSchema).optional(),
		})
		.strict()

export default MedicalRecordsCreateNestedOneWithoutLabTestInputSchema
