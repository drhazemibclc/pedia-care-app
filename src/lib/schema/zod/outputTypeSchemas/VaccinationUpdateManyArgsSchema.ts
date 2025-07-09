import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { VaccinationUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/VaccinationUncheckedUpdateManyInputSchema'
import { VaccinationUpdateManyMutationInputSchema } from '../inputTypeSchemas/VaccinationUpdateManyMutationInputSchema'
import { VaccinationWhereInputSchema } from '../inputTypeSchemas/VaccinationWhereInputSchema'

export const VaccinationUpdateManyArgsSchema: z.ZodType<Prisma.VaccinationUpdateManyArgs> = z
	.object({
		data: z.union([
			VaccinationUpdateManyMutationInputSchema,
			VaccinationUncheckedUpdateManyInputSchema,
		]),
		where: VaccinationWhereInputSchema.optional(),
		limit: z.number().optional(),
	})
	.strict()

export default VaccinationUpdateManyArgsSchema
