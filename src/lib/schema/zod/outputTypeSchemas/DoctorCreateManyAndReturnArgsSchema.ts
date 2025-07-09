import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DoctorCreateManyInputSchema } from '../inputTypeSchemas/DoctorCreateManyInputSchema'

export const DoctorCreateManyAndReturnArgsSchema: z.ZodType<Prisma.DoctorCreateManyAndReturnArgs> =
	z
		.object({
			data: z.union([DoctorCreateManyInputSchema, DoctorCreateManyInputSchema.array()]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict()

export default DoctorCreateManyAndReturnArgsSchema
