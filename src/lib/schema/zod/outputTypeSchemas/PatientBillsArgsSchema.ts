import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientBillsIncludeSchema } from '../inputTypeSchemas/PatientBillsIncludeSchema'
import { PatientBillsSelectSchema } from '../inputTypeSchemas/PatientBillsSelectSchema'

export const PatientBillsArgsSchema: z.ZodType<Prisma.PatientBillsDefaultArgs> = z
	.object({
		select: z.lazy(() => PatientBillsSelectSchema).optional(),
		include: z.lazy(() => PatientBillsIncludeSchema).optional(),
	})
	.strict()

export default PatientBillsArgsSchema
