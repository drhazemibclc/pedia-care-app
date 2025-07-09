import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientBillsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/PatientBillsUncheckedUpdateManyInputSchema'
import { PatientBillsUpdateManyMutationInputSchema } from '../inputTypeSchemas/PatientBillsUpdateManyMutationInputSchema'
import { PatientBillsWhereInputSchema } from '../inputTypeSchemas/PatientBillsWhereInputSchema'

export const PatientBillsUpdateManyArgsSchema: z.ZodType<Prisma.PatientBillsUpdateManyArgs> = z
	.object({
		data: z.union([
			PatientBillsUpdateManyMutationInputSchema,
			PatientBillsUncheckedUpdateManyInputSchema,
		]),
		where: PatientBillsWhereInputSchema.optional(),
		limit: z.number().optional(),
	})
	.strict()

export default PatientBillsUpdateManyArgsSchema
