import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { LabTestScalarWhereInputSchema } from './LabTestScalarWhereInputSchema'
import { LabTestUncheckedUpdateManyWithoutMedicalRecordInputSchema } from './LabTestUncheckedUpdateManyWithoutMedicalRecordInputSchema'
import { LabTestUpdateManyMutationInputSchema } from './LabTestUpdateManyMutationInputSchema'

export const LabTestUpdateManyWithWhereWithoutMedicalRecordInputSchema: z.ZodType<Prisma.LabTestUpdateManyWithWhereWithoutMedicalRecordInput> =
	z
		.object({
			where: z.lazy(() => LabTestScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => LabTestUpdateManyMutationInputSchema),
				z.lazy(() => LabTestUncheckedUpdateManyWithoutMedicalRecordInputSchema),
			]),
		})
		.strict()

export default LabTestUpdateManyWithWhereWithoutMedicalRecordInputSchema
