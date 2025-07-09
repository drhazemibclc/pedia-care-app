import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { MedicalRecordsCreateWithoutVitalSignsInputSchema } from './MedicalRecordsCreateWithoutVitalSignsInputSchema'
import { MedicalRecordsUncheckedCreateWithoutVitalSignsInputSchema } from './MedicalRecordsUncheckedCreateWithoutVitalSignsInputSchema'
import { MedicalRecordsWhereUniqueInputSchema } from './MedicalRecordsWhereUniqueInputSchema'

export const MedicalRecordsCreateOrConnectWithoutVitalSignsInputSchema: z.ZodType<Prisma.MedicalRecordsCreateOrConnectWithoutVitalSignsInput> =
	z
		.object({
			where: z.lazy(() => MedicalRecordsWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => MedicalRecordsCreateWithoutVitalSignsInputSchema),
				z.lazy(() => MedicalRecordsUncheckedCreateWithoutVitalSignsInputSchema),
			]),
		})
		.strict()

export default MedicalRecordsCreateOrConnectWithoutVitalSignsInputSchema
