import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientWhereInputSchema } from '../inputTypeSchemas/PatientWhereInputSchema'

export const PatientDeleteManyArgsSchema: z.ZodType<Prisma.PatientDeleteManyArgs> = z
	.object({
		where: PatientWhereInputSchema.optional(),
		limit: z.number().optional(),
	})
	.strict()

export default PatientDeleteManyArgsSchema
