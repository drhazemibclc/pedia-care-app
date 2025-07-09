import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'
import { VerificationUncheckedUpdateInputSchema } from '../inputTypeSchemas/VerificationUncheckedUpdateInputSchema'
import { VerificationUpdateInputSchema } from '../inputTypeSchemas/VerificationUpdateInputSchema'
import { VerificationWhereUniqueInputSchema } from '../inputTypeSchemas/VerificationWhereUniqueInputSchema'

export const VerificationUpdateArgsSchema: z.ZodType<
	Omit<Prisma.VerificationUpdateArgs, 'select'>
> = z
	.object({
		data: z.union([VerificationUpdateInputSchema, VerificationUncheckedUpdateInputSchema]),
		where: VerificationWhereUniqueInputSchema,
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default VerificationUpdateArgsSchema
