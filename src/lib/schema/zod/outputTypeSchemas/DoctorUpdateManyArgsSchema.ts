import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DoctorUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/DoctorUncheckedUpdateManyInputSchema'
import { DoctorUpdateManyMutationInputSchema } from '../inputTypeSchemas/DoctorUpdateManyMutationInputSchema'
import { DoctorWhereInputSchema } from '../inputTypeSchemas/DoctorWhereInputSchema'

export const DoctorUpdateManyArgsSchema: z.ZodType<Prisma.DoctorUpdateManyArgs> = z
	.object({
		data: z.union([DoctorUpdateManyMutationInputSchema, DoctorUncheckedUpdateManyInputSchema]),
		where: DoctorWhereInputSchema.optional(),
		limit: z.number().optional(),
	})
	.strict()

export default DoctorUpdateManyArgsSchema
