import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'
import { VerificationWhereUniqueInputSchema } from '../inputTypeSchemas/VerificationWhereUniqueInputSchema'

export const VerificationFindUniqueArgsSchema: z.ZodType<
	Omit<Prisma.VerificationFindUniqueArgs, 'select'>
> = z
	.object({
		where: VerificationWhereUniqueInputSchema,
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default VerificationFindUniqueArgsSchema
