import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'
import { VerificationCreateInputSchema } from '../inputTypeSchemas/VerificationCreateInputSchema'
import { VerificationUncheckedCreateInputSchema } from '../inputTypeSchemas/VerificationUncheckedCreateInputSchema'
import { VerificationUncheckedUpdateInputSchema } from '../inputTypeSchemas/VerificationUncheckedUpdateInputSchema'
import { VerificationUpdateInputSchema } from '../inputTypeSchemas/VerificationUpdateInputSchema'
import { VerificationWhereUniqueInputSchema } from '../inputTypeSchemas/VerificationWhereUniqueInputSchema'

export const VerificationUpsertArgsSchema: z.ZodType<
	Omit<Prisma.VerificationUpsertArgs, 'select'>
> = z
	.object({
		where: VerificationWhereUniqueInputSchema,
		create: z.union([VerificationCreateInputSchema, VerificationUncheckedCreateInputSchema]),
		update: z.union([VerificationUpdateInputSchema, VerificationUncheckedUpdateInputSchema]),
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default VerificationUpsertArgsSchema
