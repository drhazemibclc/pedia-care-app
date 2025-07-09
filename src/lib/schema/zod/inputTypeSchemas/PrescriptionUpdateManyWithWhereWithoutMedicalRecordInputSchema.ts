import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PrescriptionScalarWhereInputSchema } from './PrescriptionScalarWhereInputSchema'
import { PrescriptionUncheckedUpdateManyWithoutMedicalRecordInputSchema } from './PrescriptionUncheckedUpdateManyWithoutMedicalRecordInputSchema'
import { PrescriptionUpdateManyMutationInputSchema } from './PrescriptionUpdateManyMutationInputSchema'

export const PrescriptionUpdateManyWithWhereWithoutMedicalRecordInputSchema: z.ZodType<Prisma.PrescriptionUpdateManyWithWhereWithoutMedicalRecordInput> =
	z
		.object({
			where: z.lazy(() => PrescriptionScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => PrescriptionUpdateManyMutationInputSchema),
				z.lazy(() => PrescriptionUncheckedUpdateManyWithoutMedicalRecordInputSchema),
			]),
		})
		.strict()

export default PrescriptionUpdateManyWithWhereWithoutMedicalRecordInputSchema
