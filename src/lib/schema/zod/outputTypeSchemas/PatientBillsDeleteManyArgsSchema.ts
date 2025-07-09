import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientBillsWhereInputSchema } from '../inputTypeSchemas/PatientBillsWhereInputSchema'

export const PatientBillsDeleteManyArgsSchema: z.ZodType<Prisma.PatientBillsDeleteManyArgs> = z
	.object({
		where: PatientBillsWhereInputSchema.optional(),
		limit: z.number().optional(),
	})
	.strict()

export default PatientBillsDeleteManyArgsSchema
