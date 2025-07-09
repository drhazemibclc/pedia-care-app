import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientBillsCreateManyInputSchema } from '../inputTypeSchemas/PatientBillsCreateManyInputSchema'

export const PatientBillsCreateManyAndReturnArgsSchema: z.ZodType<Prisma.PatientBillsCreateManyAndReturnArgs> =
	z
		.object({
			data: z.union([PatientBillsCreateManyInputSchema, PatientBillsCreateManyInputSchema.array()]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict()

export default PatientBillsCreateManyAndReturnArgsSchema
