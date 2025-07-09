import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RatingScalarWhereInputSchema } from './RatingScalarWhereInputSchema'
import { RatingUncheckedUpdateManyWithoutPatientInputSchema } from './RatingUncheckedUpdateManyWithoutPatientInputSchema'
import { RatingUpdateManyMutationInputSchema } from './RatingUpdateManyMutationInputSchema'

export const RatingUpdateManyWithWhereWithoutPatientInputSchema: z.ZodType<Prisma.RatingUpdateManyWithWhereWithoutPatientInput> =
	z
		.object({
			where: z.lazy(() => RatingScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => RatingUpdateManyMutationInputSchema),
				z.lazy(() => RatingUncheckedUpdateManyWithoutPatientInputSchema),
			]),
		})
		.strict()

export default RatingUpdateManyWithWhereWithoutPatientInputSchema
