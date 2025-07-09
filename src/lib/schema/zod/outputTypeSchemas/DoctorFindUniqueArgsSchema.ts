import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DoctorWhereUniqueInputSchema } from '../inputTypeSchemas/DoctorWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const DoctorFindUniqueArgsSchema: z.ZodType<
	Omit<Prisma.DoctorFindUniqueArgs, 'select' | 'include'>
> = z
	.object({
		where: DoctorWhereUniqueInputSchema,
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default DoctorFindUniqueArgsSchema
