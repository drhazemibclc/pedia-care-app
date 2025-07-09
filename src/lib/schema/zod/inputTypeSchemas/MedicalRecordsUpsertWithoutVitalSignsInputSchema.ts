import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { MedicalRecordsCreateWithoutVitalSignsInputSchema } from './MedicalRecordsCreateWithoutVitalSignsInputSchema'
import { MedicalRecordsUncheckedCreateWithoutVitalSignsInputSchema } from './MedicalRecordsUncheckedCreateWithoutVitalSignsInputSchema'
import { MedicalRecordsUncheckedUpdateWithoutVitalSignsInputSchema } from './MedicalRecordsUncheckedUpdateWithoutVitalSignsInputSchema'
import { MedicalRecordsUpdateWithoutVitalSignsInputSchema } from './MedicalRecordsUpdateWithoutVitalSignsInputSchema'
import { MedicalRecordsWhereInputSchema } from './MedicalRecordsWhereInputSchema'

export const MedicalRecordsUpsertWithoutVitalSignsInputSchema: z.ZodType<Prisma.MedicalRecordsUpsertWithoutVitalSignsInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => MedicalRecordsUpdateWithoutVitalSignsInputSchema),
				z.lazy(() => MedicalRecordsUncheckedUpdateWithoutVitalSignsInputSchema),
			]),
			create: z.union([
				z.lazy(() => MedicalRecordsCreateWithoutVitalSignsInputSchema),
				z.lazy(() => MedicalRecordsUncheckedCreateWithoutVitalSignsInputSchema),
			]),
			where: z.lazy(() => MedicalRecordsWhereInputSchema).optional(),
		})
		.strict()

export default MedicalRecordsUpsertWithoutVitalSignsInputSchema
