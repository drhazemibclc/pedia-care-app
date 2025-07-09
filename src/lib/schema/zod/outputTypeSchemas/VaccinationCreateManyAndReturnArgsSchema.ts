import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { VaccinationCreateManyInputSchema } from '../inputTypeSchemas/VaccinationCreateManyInputSchema'

export const VaccinationCreateManyAndReturnArgsSchema: z.ZodType<Prisma.VaccinationCreateManyAndReturnArgs> =
	z
		.object({
			data: z.union([VaccinationCreateManyInputSchema, VaccinationCreateManyInputSchema.array()]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict()

export default VaccinationCreateManyAndReturnArgsSchema
