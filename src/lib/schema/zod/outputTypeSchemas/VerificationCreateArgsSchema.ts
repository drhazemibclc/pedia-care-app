import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'
import { VerificationCreateInputSchema } from '../inputTypeSchemas/VerificationCreateInputSchema'
import { VerificationUncheckedCreateInputSchema } from '../inputTypeSchemas/VerificationUncheckedCreateInputSchema'

export const VerificationCreateArgsSchema: z.ZodType<
	Omit<Prisma.VerificationCreateArgs, 'select'>
> = z
	.object({
		data: z.union([VerificationCreateInputSchema, VerificationUncheckedCreateInputSchema]),
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default VerificationCreateArgsSchema
