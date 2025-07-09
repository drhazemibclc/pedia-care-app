import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PrescriptionUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/PrescriptionUncheckedUpdateManyInputSchema'
import { PrescriptionUpdateManyMutationInputSchema } from '../inputTypeSchemas/PrescriptionUpdateManyMutationInputSchema'
import { PrescriptionWhereInputSchema } from '../inputTypeSchemas/PrescriptionWhereInputSchema'

export const PrescriptionUpdateManyArgsSchema: z.ZodType<Prisma.PrescriptionUpdateManyArgs> = z
	.object({
		data: z.union([
			PrescriptionUpdateManyMutationInputSchema,
			PrescriptionUncheckedUpdateManyInputSchema,
		]),
		where: PrescriptionWhereInputSchema.optional(),
		limit: z.number().optional(),
	})
	.strict()

export default PrescriptionUpdateManyArgsSchema
