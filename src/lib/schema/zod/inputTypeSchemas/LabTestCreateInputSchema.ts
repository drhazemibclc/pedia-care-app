import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { MedicalRecordsCreateNestedOneWithoutLabTestInputSchema } from './MedicalRecordsCreateNestedOneWithoutLabTestInputSchema'
import { ServicesCreateNestedOneWithoutLabtestInputSchema } from './ServicesCreateNestedOneWithoutLabtestInputSchema'

export const LabTestCreateInputSchema: z.ZodType<Prisma.LabTestCreateInput> = z
	.object({
		testDate: z.coerce.date(),
		result: z.string(),
		status: z.string(),
		notes: z.string().optional().nullable(),
		createdAt: z.coerce.date().optional(),
		updatedAt: z.coerce.date().optional(),
		services: z.lazy(() => ServicesCreateNestedOneWithoutLabtestInputSchema),
		medicalRecord: z.lazy(() => MedicalRecordsCreateNestedOneWithoutLabTestInputSchema),
	})
	.strict()

export default LabTestCreateInputSchema
