import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { ServicesUncheckedUpdateWithoutLabtestInputSchema } from './ServicesUncheckedUpdateWithoutLabtestInputSchema'
import { ServicesUpdateWithoutLabtestInputSchema } from './ServicesUpdateWithoutLabtestInputSchema'
import { ServicesWhereInputSchema } from './ServicesWhereInputSchema'

export const ServicesUpdateToOneWithWhereWithoutLabtestInputSchema: z.ZodType<Prisma.ServicesUpdateToOneWithWhereWithoutLabtestInput> =
	z
		.object({
			where: z.lazy(() => ServicesWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => ServicesUpdateWithoutLabtestInputSchema),
				z.lazy(() => ServicesUncheckedUpdateWithoutLabtestInputSchema),
			]),
		})
		.strict()

export default ServicesUpdateToOneWithWhereWithoutLabtestInputSchema
