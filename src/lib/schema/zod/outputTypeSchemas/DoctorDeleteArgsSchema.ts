import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DoctorWhereUniqueInputSchema } from '../inputTypeSchemas/DoctorWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const DoctorDeleteArgsSchema: z.ZodType<
	Omit<Prisma.DoctorDeleteArgs, 'select' | 'include'>
> = z
	.object({
		where: DoctorWhereUniqueInputSchema,
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default DoctorDeleteArgsSchema
