import type { Prisma } from '@prisma/client'
import { z } from 'zod'

export const LabTestUncheckedCreateWithoutServicesInputSchema: z.ZodType<Prisma.LabTestUncheckedCreateWithoutServicesInput> =
	z
		.object({
			id: z.number().int().optional(),
			recordId: z.number().int(),
			testDate: z.coerce.date(),
			result: z.string(),
			status: z.string(),
			notes: z.string().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
		})
		.strict()

export default LabTestUncheckedCreateWithoutServicesInputSchema
