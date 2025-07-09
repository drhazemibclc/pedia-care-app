import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'
import { VaccinationCreateInputSchema } from '../inputTypeSchemas/VaccinationCreateInputSchema'
import { VaccinationUncheckedCreateInputSchema } from '../inputTypeSchemas/VaccinationUncheckedCreateInputSchema'
import { VaccinationUncheckedUpdateInputSchema } from '../inputTypeSchemas/VaccinationUncheckedUpdateInputSchema'
import { VaccinationUpdateInputSchema } from '../inputTypeSchemas/VaccinationUpdateInputSchema'
import { VaccinationWhereUniqueInputSchema } from '../inputTypeSchemas/VaccinationWhereUniqueInputSchema'

export const VaccinationUpsertArgsSchema: z.ZodType<
	Omit<Prisma.VaccinationUpsertArgs, 'select' | 'include'>
> = z
	.object({
		where: VaccinationWhereUniqueInputSchema,
		create: z.union([VaccinationCreateInputSchema, VaccinationUncheckedCreateInputSchema]),
		update: z.union([VaccinationUpdateInputSchema, VaccinationUncheckedUpdateInputSchema]),
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default VaccinationUpsertArgsSchema
