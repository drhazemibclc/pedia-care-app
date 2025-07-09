import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DoctorCreateInputSchema } from '../inputTypeSchemas/DoctorCreateInputSchema'
import { DoctorUncheckedCreateInputSchema } from '../inputTypeSchemas/DoctorUncheckedCreateInputSchema'
import { DoctorUncheckedUpdateInputSchema } from '../inputTypeSchemas/DoctorUncheckedUpdateInputSchema'
import { DoctorUpdateInputSchema } from '../inputTypeSchemas/DoctorUpdateInputSchema'
import { DoctorWhereUniqueInputSchema } from '../inputTypeSchemas/DoctorWhereUniqueInputSchema'
import { RelationLoadStrategySchema } from '../inputTypeSchemas/RelationLoadStrategySchema'

export const DoctorUpsertArgsSchema: z.ZodType<
	Omit<Prisma.DoctorUpsertArgs, 'select' | 'include'>
> = z
	.object({
		where: DoctorWhereUniqueInputSchema,
		create: z.union([DoctorCreateInputSchema, DoctorUncheckedCreateInputSchema]),
		update: z.union([DoctorUpdateInputSchema, DoctorUncheckedUpdateInputSchema]),
		relationLoadStrategy: RelationLoadStrategySchema.optional(),
	})
	.strict()

export default DoctorUpsertArgsSchema
