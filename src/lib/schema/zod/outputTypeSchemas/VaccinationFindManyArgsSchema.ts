import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'
import { VaccinationOrderByWithRelationInputSchema } from '../inputTypeSchemas/VaccinationOrderByWithRelationInputSchema'
import { VaccinationScalarFieldEnumSchema } from '../inputTypeSchemas/VaccinationScalarFieldEnumSchema'
import { VaccinationWhereInputSchema } from '../inputTypeSchemas/VaccinationWhereInputSchema'
import { VaccinationWhereUniqueInputSchema } from '../inputTypeSchemas/VaccinationWhereUniqueInputSchema'

export const VaccinationFindManyArgsSchema: z.ZodType<
	Omit<Prisma.VaccinationFindManyArgs, 'select' | 'include'>
> = z
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
		distinct: z
			.union([VaccinationScalarFieldEnumSchema, VaccinationScalarFieldEnumSchema.array()])
			.optional(),
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default VaccinationFindManyArgsSchema
