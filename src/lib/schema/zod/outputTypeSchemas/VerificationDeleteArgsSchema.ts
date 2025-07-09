import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'
import { VerificationWhereUniqueInputSchema } from '../inputTypeSchemas/VerificationWhereUniqueInputSchema'

export const VerificationDeleteArgsSchema: z.ZodType<
	Omit<Prisma.VerificationDeleteArgs, 'select'>
> = z
	.object({
		where: VerificationWhereUniqueInputSchema,
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default VerificationDeleteArgsSchema
