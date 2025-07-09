import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { MedicalRecordsUncheckedUpdateWithoutPatientInputSchema } from './MedicalRecordsUncheckedUpdateWithoutPatientInputSchema'
import { MedicalRecordsUpdateWithoutPatientInputSchema } from './MedicalRecordsUpdateWithoutPatientInputSchema'
import { MedicalRecordsWhereUniqueInputSchema } from './MedicalRecordsWhereUniqueInputSchema'

export const MedicalRecordsUpdateWithWhereUniqueWithoutPatientInputSchema: z.ZodType<Prisma.MedicalRecordsUpdateWithWhereUniqueWithoutPatientInput> =
	z
		.object({
			where: z.lazy(() => MedicalRecordsWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => MedicalRecordsUpdateWithoutPatientInputSchema),
				z.lazy(() => MedicalRecordsUncheckedUpdateWithoutPatientInputSchema),
			]),
		})
		.strict()

export default MedicalRecordsUpdateWithWhereUniqueWithoutPatientInputSchema
