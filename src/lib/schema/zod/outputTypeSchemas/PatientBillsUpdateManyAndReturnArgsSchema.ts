import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientBillsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/PatientBillsUncheckedUpdateManyInputSchema'
import { PatientBillsUpdateManyMutationInputSchema } from '../inputTypeSchemas/PatientBillsUpdateManyMutationInputSchema'
import { PatientBillsWhereInputSchema } from '../inputTypeSchemas/PatientBillsWhereInputSchema'

export const PatientBillsUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.PatientBillsUpdateManyAndReturnArgs> =
	z
		.object({
			data: z.union([
				PatientBillsUpdateManyMutationInputSchema,
				PatientBillsUncheckedUpdateManyInputSchema,
			]),
			where: PatientBillsWhereInputSchema.optional(),
			limit: z.number().optional(),
		})
		.strict()

export default PatientBillsUpdateManyAndReturnArgsSchema
