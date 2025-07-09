import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PrescriptionScalarWhereInputSchema } from './PrescriptionScalarWhereInputSchema'
import { PrescriptionUncheckedUpdateManyWithoutPatientInputSchema } from './PrescriptionUncheckedUpdateManyWithoutPatientInputSchema'
import { PrescriptionUpdateManyMutationInputSchema } from './PrescriptionUpdateManyMutationInputSchema'

export const PrescriptionUpdateManyWithWhereWithoutPatientInputSchema: z.ZodType<Prisma.PrescriptionUpdateManyWithWhereWithoutPatientInput> =
	z
		.object({
			where: z.lazy(() => PrescriptionScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => PrescriptionUpdateManyMutationInputSchema),
				z.lazy(() => PrescriptionUncheckedUpdateManyWithoutPatientInputSchema),
			]),
		})
		.strict()

export default PrescriptionUpdateManyWithWhereWithoutPatientInputSchema
