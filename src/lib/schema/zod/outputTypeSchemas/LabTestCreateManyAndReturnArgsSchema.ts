import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { LabTestCreateManyInputSchema } from '../inputTypeSchemas/LabTestCreateManyInputSchema'

export const LabTestCreateManyAndReturnArgsSchema: z.ZodType<Prisma.LabTestCreateManyAndReturnArgs> =
	z
		.object({
			data: z.union([LabTestCreateManyInputSchema, LabTestCreateManyInputSchema.array()]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict()

export default LabTestCreateManyAndReturnArgsSchema
