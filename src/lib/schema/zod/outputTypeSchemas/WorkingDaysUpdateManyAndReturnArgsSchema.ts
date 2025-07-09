import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { WorkingDaysUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/WorkingDaysUncheckedUpdateManyInputSchema'
import { WorkingDaysUpdateManyMutationInputSchema } from '../inputTypeSchemas/WorkingDaysUpdateManyMutationInputSchema'
import { WorkingDaysWhereInputSchema } from '../inputTypeSchemas/WorkingDaysWhereInputSchema'

export const WorkingDaysUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.WorkingDaysUpdateManyAndReturnArgs> =
	z
		.object({
			data: z.union([
				WorkingDaysUpdateManyMutationInputSchema,
				WorkingDaysUncheckedUpdateManyInputSchema,
			]),
			where: WorkingDaysWhereInputSchema.optional(),
			limit: z.number().optional(),
		})
		.strict()

export default WorkingDaysUpdateManyAndReturnArgsSchema
