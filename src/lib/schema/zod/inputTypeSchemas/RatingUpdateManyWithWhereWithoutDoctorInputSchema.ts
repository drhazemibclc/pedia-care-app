import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { RatingScalarWhereInputSchema } from './RatingScalarWhereInputSchema'
import { RatingUncheckedUpdateManyWithoutDoctorInputSchema } from './RatingUncheckedUpdateManyWithoutDoctorInputSchema'
import { RatingUpdateManyMutationInputSchema } from './RatingUpdateManyMutationInputSchema'

export const RatingUpdateManyWithWhereWithoutDoctorInputSchema: z.ZodType<Prisma.RatingUpdateManyWithWhereWithoutDoctorInput> =
	z
		.object({
			where: z.lazy(() => RatingScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => RatingUpdateManyMutationInputSchema),
				z.lazy(() => RatingUncheckedUpdateManyWithoutDoctorInputSchema),
			]),
		})
		.strict()

export default RatingUpdateManyWithWhereWithoutDoctorInputSchema
