import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { MedicalRecordsCreateNestedOneWithoutLabTestInputSchema } from './MedicalRecordsCreateNestedOneWithoutLabTestInputSchema'

export const LabTestCreateWithoutServicesInputSchema: z.ZodType<Prisma.LabTestCreateWithoutServicesInput> =
	z
		.object({
			testDate: z.coerce.date(),
			result: z.string(),
			status: z.string(),
			notes: z.string().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			medicalRecord: z.lazy(() => MedicalRecordsCreateNestedOneWithoutLabTestInputSchema),
		})
		.strict()

export default LabTestCreateWithoutServicesInputSchema
