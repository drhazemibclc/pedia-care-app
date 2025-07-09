import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DoctorWhereInputSchema } from '../inputTypeSchemas/DoctorWhereInputSchema'

export const DoctorDeleteManyArgsSchema: z.ZodType<Prisma.DoctorDeleteManyArgs> = z
	.object({
		where: DoctorWhereInputSchema.optional(),
		limit: z.number().optional(),
	})
	.strict()

export default DoctorDeleteManyArgsSchema
