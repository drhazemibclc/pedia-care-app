import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { LabTestCreateInputSchema } from '../inputTypeSchemas/LabTestCreateInputSchema'
import { LabTestUncheckedCreateInputSchema } from '../inputTypeSchemas/LabTestUncheckedCreateInputSchema'
import { LabTestUncheckedUpdateInputSchema } from '../inputTypeSchemas/LabTestUncheckedUpdateInputSchema'
import { LabTestUpdateInputSchema } from '../inputTypeSchemas/LabTestUpdateInputSchema'
import { LabTestWhereUniqueInputSchema } from '../inputTypeSchemas/LabTestWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const LabTestUpsertArgsSchema: z.ZodType<
	Omit<Prisma.LabTestUpsertArgs, 'select' | 'include'>
> = z
	.object({
		where: LabTestWhereUniqueInputSchema,
		create: z.union([LabTestCreateInputSchema, LabTestUncheckedCreateInputSchema]),
		update: z.union([LabTestUpdateInputSchema, LabTestUncheckedUpdateInputSchema]),
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default LabTestUpsertArgsSchema
