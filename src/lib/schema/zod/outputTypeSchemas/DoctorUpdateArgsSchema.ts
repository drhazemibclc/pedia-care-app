import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DoctorUncheckedUpdateInputSchema } from '../inputTypeSchemas/DoctorUncheckedUpdateInputSchema'
import { DoctorUpdateInputSchema } from '../inputTypeSchemas/DoctorUpdateInputSchema'
import { DoctorWhereUniqueInputSchema } from '../inputTypeSchemas/DoctorWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const DoctorUpdateArgsSchema: z.ZodType<
	Omit<Prisma.DoctorUpdateArgs, 'select' | 'include'>
> = z
	.object({
		data: z.union([DoctorUpdateInputSchema, DoctorUncheckedUpdateInputSchema]),
		where: DoctorWhereUniqueInputSchema,
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default DoctorUpdateArgsSchema
