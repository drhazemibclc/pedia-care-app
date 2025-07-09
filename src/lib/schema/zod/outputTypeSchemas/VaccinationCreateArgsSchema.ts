import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'
import { VaccinationCreateInputSchema } from '../inputTypeSchemas/VaccinationCreateInputSchema'
import { VaccinationUncheckedCreateInputSchema } from '../inputTypeSchemas/VaccinationUncheckedCreateInputSchema'

export const VaccinationCreateArgsSchema: z.ZodType<
	Omit<Prisma.VaccinationCreateArgs, 'select' | 'include'>
> = z
	.object({
		data: z.union([VaccinationCreateInputSchema, VaccinationUncheckedCreateInputSchema]),
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default VaccinationCreateArgsSchema
