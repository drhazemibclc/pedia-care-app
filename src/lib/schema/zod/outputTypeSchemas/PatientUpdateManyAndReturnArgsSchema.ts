import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/PatientUncheckedUpdateManyInputSchema'
import { PatientUpdateManyMutationInputSchema } from '../inputTypeSchemas/PatientUpdateManyMutationInputSchema'
import { PatientWhereInputSchema } from '../inputTypeSchemas/PatientWhereInputSchema'

export const PatientUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.PatientUpdateManyAndReturnArgs> =
	z
		.object({
			data: z.union([PatientUpdateManyMutationInputSchema, PatientUncheckedUpdateManyInputSchema]),
			where: PatientWhereInputSchema.optional(),
			limit: z.number().optional(),
		})
		.strict()

export default PatientUpdateManyAndReturnArgsSchema
