import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { VaccinationIncludeSchema } from '../inputTypeSchemas/VaccinationIncludeSchema'
import { VaccinationSelectSchema } from '../inputTypeSchemas/VaccinationSelectSchema'

export const VaccinationArgsSchema: z.ZodType<Prisma.VaccinationDefaultArgs> = z
	.object({
		select: z.lazy(() => VaccinationSelectSchema).optional(),
		include: z.lazy(() => VaccinationIncludeSchema).optional(),
	})
	.strict()

export default VaccinationArgsSchema
