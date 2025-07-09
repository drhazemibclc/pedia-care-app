import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DoctorCreateInputSchema } from '../inputTypeSchemas/DoctorCreateInputSchema'
import { DoctorUncheckedCreateInputSchema } from '../inputTypeSchemas/DoctorUncheckedCreateInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const DoctorCreateArgsSchema: z.ZodType<
	Omit<Prisma.DoctorCreateArgs, 'select' | 'include'>
> = z
	.object({
		data: z.union([DoctorCreateInputSchema, DoctorUncheckedCreateInputSchema]),
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default DoctorCreateArgsSchema
