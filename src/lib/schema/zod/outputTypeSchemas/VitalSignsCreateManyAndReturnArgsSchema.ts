import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { VitalSignsCreateManyInputSchema } from '../inputTypeSchemas/VitalSignsCreateManyInputSchema'

export const VitalSignsCreateManyAndReturnArgsSchema: z.ZodType<Prisma.VitalSignsCreateManyAndReturnArgs> =
	z
		.object({
			data: z.union([VitalSignsCreateManyInputSchema, VitalSignsCreateManyInputSchema.array()]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict()

export default VitalSignsCreateManyAndReturnArgsSchema
