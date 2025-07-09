import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { MedicalRecordsCreateWithoutPatientInputSchema } from './MedicalRecordsCreateWithoutPatientInputSchema'
import { MedicalRecordsUncheckedCreateWithoutPatientInputSchema } from './MedicalRecordsUncheckedCreateWithoutPatientInputSchema'
import { MedicalRecordsUncheckedUpdateWithoutPatientInputSchema } from './MedicalRecordsUncheckedUpdateWithoutPatientInputSchema'
import { MedicalRecordsUpdateWithoutPatientInputSchema } from './MedicalRecordsUpdateWithoutPatientInputSchema'
import { MedicalRecordsWhereUniqueInputSchema } from './MedicalRecordsWhereUniqueInputSchema'

export const MedicalRecordsUpsertWithWhereUniqueWithoutPatientInputSchema: z.ZodType<Prisma.MedicalRecordsUpsertWithWhereUniqueWithoutPatientInput> =
	z
		.object({
			where: z.lazy(() => MedicalRecordsWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => MedicalRecordsUpdateWithoutPatientInputSchema),
				z.lazy(() => MedicalRecordsUncheckedUpdateWithoutPatientInputSchema),
			]),
			create: z.union([
				z.lazy(() => MedicalRecordsCreateWithoutPatientInputSchema),
				z.lazy(() => MedicalRecordsUncheckedCreateWithoutPatientInputSchema),
			]),
		})
		.strict()

export default MedicalRecordsUpsertWithWhereUniqueWithoutPatientInputSchema
