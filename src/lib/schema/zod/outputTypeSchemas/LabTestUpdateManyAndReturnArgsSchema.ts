import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { LabTestUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/LabTestUncheckedUpdateManyInputSchema'
import { LabTestUpdateManyMutationInputSchema } from '../inputTypeSchemas/LabTestUpdateManyMutationInputSchema'
import { LabTestWhereInputSchema } from '../inputTypeSchemas/LabTestWhereInputSchema'

export const LabTestUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.LabTestUpdateManyAndReturnArgs> =
	z
		.object({
			data: z.union([LabTestUpdateManyMutationInputSchema, LabTestUncheckedUpdateManyInputSchema]),
			where: LabTestWhereInputSchema.optional(),
			limit: z.number().optional(),
		})
		.strict()

export default LabTestUpdateManyAndReturnArgsSchema
