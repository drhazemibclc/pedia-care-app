import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { ServicesCreateNestedOneWithoutLabtestInputSchema } from './ServicesCreateNestedOneWithoutLabtestInputSchema'

export const LabTestCreateWithoutMedicalRecordInputSchema: z.ZodType<Prisma.LabTestCreateWithoutMedicalRecordInput> =
	z
		.object({
			testDate: z.coerce.date(),
			result: z.string(),
			status: z.string(),
			notes: z.string().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			services: z.lazy(() => ServicesCreateNestedOneWithoutLabtestInputSchema),
		})
		.strict()

export default LabTestCreateWithoutMedicalRecordInputSchema
