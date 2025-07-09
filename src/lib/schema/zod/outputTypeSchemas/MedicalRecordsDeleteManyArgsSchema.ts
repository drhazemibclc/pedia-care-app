import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { MedicalRecordsWhereInputSchema } from '../inputTypeSchemas/MedicalRecordsWhereInputSchema'

export const MedicalRecordsDeleteManyArgsSchema: z.ZodType<Prisma.MedicalRecordsDeleteManyArgs> = z
	.object({
		where: MedicalRecordsWhereInputSchema.optional(),
		limit: z.number().optional(),
	})
	.strict()

export default MedicalRecordsDeleteManyArgsSchema
