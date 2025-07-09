import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { LabTestUncheckedUpdateInputSchema } from '../inputTypeSchemas/LabTestUncheckedUpdateInputSchema'
import { LabTestUpdateInputSchema } from '../inputTypeSchemas/LabTestUpdateInputSchema'
import { LabTestWhereUniqueInputSchema } from '../inputTypeSchemas/LabTestWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const LabTestUpdateArgsSchema: z.ZodType<
	Omit<Prisma.LabTestUpdateArgs, 'select' | 'include'>
> = z
	.object({
		data: z.union([LabTestUpdateInputSchema, LabTestUncheckedUpdateInputSchema]),
		where: LabTestWhereUniqueInputSchema,
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default LabTestUpdateArgsSchema
