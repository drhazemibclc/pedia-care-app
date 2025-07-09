import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DoctorCreateManyInputSchema } from '../inputTypeSchemas/DoctorCreateManyInputSchema'

export const DoctorCreateManyArgsSchema: z.ZodType<Prisma.DoctorCreateManyArgs> = z
	.object({
		data: z.union([DoctorCreateManyInputSchema, DoctorCreateManyInputSchema.array()]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict()

export default DoctorCreateManyArgsSchema
