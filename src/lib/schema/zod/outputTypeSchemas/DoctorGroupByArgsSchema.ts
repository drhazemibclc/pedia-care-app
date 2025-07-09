import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DoctorOrderByWithAggregationInputSchema } from '../inputTypeSchemas/DoctorOrderByWithAggregationInputSchema'
import { DoctorScalarFieldEnumSchema } from '../inputTypeSchemas/DoctorScalarFieldEnumSchema'
import { DoctorScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/DoctorScalarWhereWithAggregatesInputSchema'
import { DoctorWhereInputSchema } from '../inputTypeSchemas/DoctorWhereInputSchema'

export const DoctorGroupByArgsSchema: z.ZodType<Prisma.DoctorGroupByArgs> = z
	.object({
		where: DoctorWhereInputSchema.optional(),
		orderBy: z
			.union([
				DoctorOrderByWithAggregationInputSchema.array(),
				DoctorOrderByWithAggregationInputSchema,
			])
			.optional(),
		by: DoctorScalarFieldEnumSchema.array(),
		having: DoctorScalarWhereWithAggregatesInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict()

export default DoctorGroupByArgsSchema
