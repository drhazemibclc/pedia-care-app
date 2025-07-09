import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { MedicalRecordsCreateWithoutLabTestInputSchema } from './MedicalRecordsCreateWithoutLabTestInputSchema'
import { MedicalRecordsUncheckedCreateWithoutLabTestInputSchema } from './MedicalRecordsUncheckedCreateWithoutLabTestInputSchema'
import { MedicalRecordsUncheckedUpdateWithoutLabTestInputSchema } from './MedicalRecordsUncheckedUpdateWithoutLabTestInputSchema'
import { MedicalRecordsUpdateWithoutLabTestInputSchema } from './MedicalRecordsUpdateWithoutLabTestInputSchema'
import { MedicalRecordsWhereInputSchema } from './MedicalRecordsWhereInputSchema'

export const MedicalRecordsUpsertWithoutLabTestInputSchema: z.ZodType<Prisma.MedicalRecordsUpsertWithoutLabTestInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => MedicalRecordsUpdateWithoutLabTestInputSchema),
				z.lazy(() => MedicalRecordsUncheckedUpdateWithoutLabTestInputSchema),
			]),
			create: z.union([
				z.lazy(() => MedicalRecordsCreateWithoutLabTestInputSchema),
				z.lazy(() => MedicalRecordsUncheckedCreateWithoutLabTestInputSchema),
			]),
			where: z.lazy(() => MedicalRecordsWhereInputSchema).optional(),
		})
		.strict()

export default MedicalRecordsUpsertWithoutLabTestInputSchema
