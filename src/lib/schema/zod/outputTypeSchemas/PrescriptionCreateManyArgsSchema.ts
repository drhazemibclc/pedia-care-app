import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PrescriptionCreateManyInputSchema } from '../inputTypeSchemas/PrescriptionCreateManyInputSchema'

export const PrescriptionCreateManyArgsSchema: z.ZodType<Prisma.PrescriptionCreateManyArgs> = z
	.object({
		data: z.union([PrescriptionCreateManyInputSchema, PrescriptionCreateManyInputSchema.array()]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict()

export default PrescriptionCreateManyArgsSchema
