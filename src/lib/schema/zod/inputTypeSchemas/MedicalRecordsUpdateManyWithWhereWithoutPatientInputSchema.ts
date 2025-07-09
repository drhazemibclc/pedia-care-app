import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { MedicalRecordsScalarWhereInputSchema } from './MedicalRecordsScalarWhereInputSchema'
import { MedicalRecordsUncheckedUpdateManyWithoutPatientInputSchema } from './MedicalRecordsUncheckedUpdateManyWithoutPatientInputSchema'
import { MedicalRecordsUpdateManyMutationInputSchema } from './MedicalRecordsUpdateManyMutationInputSchema'

export const MedicalRecordsUpdateManyWithWhereWithoutPatientInputSchema: z.ZodType<Prisma.MedicalRecordsUpdateManyWithWhereWithoutPatientInput> =
	z
		.object({
			where: z.lazy(() => MedicalRecordsScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => MedicalRecordsUpdateManyMutationInputSchema),
				z.lazy(() => MedicalRecordsUncheckedUpdateManyWithoutPatientInputSchema),
			]),
		})
		.strict()

export default MedicalRecordsUpdateManyWithWhereWithoutPatientInputSchema
