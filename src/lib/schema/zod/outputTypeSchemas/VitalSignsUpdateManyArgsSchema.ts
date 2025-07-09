import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { VitalSignsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/VitalSignsUncheckedUpdateManyInputSchema'
import { VitalSignsUpdateManyMutationInputSchema } from '../inputTypeSchemas/VitalSignsUpdateManyMutationInputSchema'
import { VitalSignsWhereInputSchema } from '../inputTypeSchemas/VitalSignsWhereInputSchema'

export const VitalSignsUpdateManyArgsSchema: z.ZodType<Prisma.VitalSignsUpdateManyArgs> = z
	.object({
		data: z.union([
			VitalSignsUpdateManyMutationInputSchema,
			VitalSignsUncheckedUpdateManyInputSchema,
		]),
		where: VitalSignsWhereInputSchema.optional(),
		limit: z.number().optional(),
	})
	.strict()

export default VitalSignsUpdateManyArgsSchema
