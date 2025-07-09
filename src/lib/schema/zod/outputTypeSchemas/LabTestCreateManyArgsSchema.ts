import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { LabTestCreateManyInputSchema } from '../inputTypeSchemas/LabTestCreateManyInputSchema'

export const LabTestCreateManyArgsSchema: z.ZodType<Prisma.LabTestCreateManyArgs> = z
	.object({
		data: z.union([LabTestCreateManyInputSchema, LabTestCreateManyInputSchema.array()]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict()

export default LabTestCreateManyArgsSchema
