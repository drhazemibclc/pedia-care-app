import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DoctorOrderByWithRelationInputSchema } from '../inputTypeSchemas/DoctorOrderByWithRelationInputSchema'
import { DoctorWhereInputSchema } from '../inputTypeSchemas/DoctorWhereInputSchema'
import { DoctorWhereUniqueInputSchema } from '../inputTypeSchemas/DoctorWhereUniqueInputSchema'

export const DoctorAggregateArgsSchema: z.ZodType<Prisma.DoctorAggregateArgs> = z
	.object({
		where: DoctorWhereInputSchema.optional(),
		orderBy: z
			.union([DoctorOrderByWithRelationInputSchema.array(), DoctorOrderByWithRelationInputSchema])
			.optional(),
		cursor: DoctorWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict()

export default DoctorAggregateArgsSchema
