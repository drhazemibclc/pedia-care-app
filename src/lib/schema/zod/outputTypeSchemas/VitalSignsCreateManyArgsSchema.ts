import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { VitalSignsCreateManyInputSchema } from '../inputTypeSchemas/VitalSignsCreateManyInputSchema'

export const VitalSignsCreateManyArgsSchema: z.ZodType<Prisma.VitalSignsCreateManyArgs> = z
	.object({
		data: z.union([VitalSignsCreateManyInputSchema, VitalSignsCreateManyInputSchema.array()]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict()

export default VitalSignsCreateManyArgsSchema
