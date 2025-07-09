import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { MedicalRecordsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/MedicalRecordsUncheckedUpdateManyInputSchema'
import { MedicalRecordsUpdateManyMutationInputSchema } from '../inputTypeSchemas/MedicalRecordsUpdateManyMutationInputSchema'
import { MedicalRecordsWhereInputSchema } from '../inputTypeSchemas/MedicalRecordsWhereInputSchema'

export const MedicalRecordsUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.MedicalRecordsUpdateManyAndReturnArgs> =
	z
		.object({
			data: z.union([
				MedicalRecordsUpdateManyMutationInputSchema,
				MedicalRecordsUncheckedUpdateManyInputSchema,
			]),
			where: MedicalRecordsWhereInputSchema.optional(),
			limit: z.number().optional(),
		})
		.strict()

export default MedicalRecordsUpdateManyAndReturnArgsSchema
