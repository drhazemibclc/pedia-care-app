import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { VaccinationWhereInputSchema } from '../inputTypeSchemas/VaccinationWhereInputSchema'

export const VaccinationDeleteManyArgsSchema: z.ZodType<Prisma.VaccinationDeleteManyArgs> = z
	.object({
		where: VaccinationWhereInputSchema.optional(),
		limit: z.number().optional(),
	})
	.strict()

export default VaccinationDeleteManyArgsSchema
