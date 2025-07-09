import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { VaccinationOrderByWithRelationInputSchema } from '../inputTypeSchemas/VaccinationOrderByWithRelationInputSchema'
import { VaccinationWhereInputSchema } from '../inputTypeSchemas/VaccinationWhereInputSchema'
import { VaccinationWhereUniqueInputSchema } from '../inputTypeSchemas/VaccinationWhereUniqueInputSchema'

export const VaccinationAggregateArgsSchema: z.ZodType<Prisma.VaccinationAggregateArgs> = z
	.object({
		where: VaccinationWhereInputSchema.optional(),
		orderBy: z
			.union([
				VaccinationOrderByWithRelationInputSchema.array(),
				VaccinationOrderByWithRelationInputSchema,
			])
			.optional(),
		cursor: VaccinationWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict()

export default VaccinationAggregateArgsSchema
