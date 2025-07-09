import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { LabTestCreateInputSchema } from '../inputTypeSchemas/LabTestCreateInputSchema'
import { LabTestUncheckedCreateInputSchema } from '../inputTypeSchemas/LabTestUncheckedCreateInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const LabTestCreateArgsSchema: z.ZodType<
	Omit<Prisma.LabTestCreateArgs, 'select' | 'include'>
> = z
	.object({
		data: z.union([LabTestCreateInputSchema, LabTestUncheckedCreateInputSchema]),
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default LabTestCreateArgsSchema
