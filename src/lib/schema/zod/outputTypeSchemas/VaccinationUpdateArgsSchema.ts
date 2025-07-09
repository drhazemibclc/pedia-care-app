import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'
import { VaccinationUncheckedUpdateInputSchema } from '../inputTypeSchemas/VaccinationUncheckedUpdateInputSchema'
import { VaccinationUpdateInputSchema } from '../inputTypeSchemas/VaccinationUpdateInputSchema'
import { VaccinationWhereUniqueInputSchema } from '../inputTypeSchemas/VaccinationWhereUniqueInputSchema'

export const VaccinationUpdateArgsSchema: z.ZodType<
	Omit<Prisma.VaccinationUpdateArgs, 'select' | 'include'>
> = z
	.object({
		data: z.union([VaccinationUpdateInputSchema, VaccinationUncheckedUpdateInputSchema]),
		where: VaccinationWhereUniqueInputSchema,
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default VaccinationUpdateArgsSchema
