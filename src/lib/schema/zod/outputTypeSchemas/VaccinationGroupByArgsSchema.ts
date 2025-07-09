import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { VaccinationOrderByWithAggregationInputSchema } from '../inputTypeSchemas/VaccinationOrderByWithAggregationInputSchema'
import { VaccinationScalarFieldEnumSchema } from '../inputTypeSchemas/VaccinationScalarFieldEnumSchema'
import { VaccinationScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/VaccinationScalarWhereWithAggregatesInputSchema'
import { VaccinationWhereInputSchema } from '../inputTypeSchemas/VaccinationWhereInputSchema'

export const VaccinationGroupByArgsSchema: z.ZodType<Prisma.VaccinationGroupByArgs> = z
	.object({
		where: VaccinationWhereInputSchema.optional(),
		orderBy: z
			.union([
				VaccinationOrderByWithAggregationInputSchema.array(),
				VaccinationOrderByWithAggregationInputSchema,
			])
			.optional(),
		by: VaccinationScalarFieldEnumSchema.array(),
		having: VaccinationScalarWhereWithAggregatesInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict()

export default VaccinationGroupByArgsSchema
