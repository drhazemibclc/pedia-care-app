import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { ServicesCreateWithoutLabtestInputSchema } from './ServicesCreateWithoutLabtestInputSchema'
import { ServicesUncheckedCreateWithoutLabtestInputSchema } from './ServicesUncheckedCreateWithoutLabtestInputSchema'
import { ServicesUncheckedUpdateWithoutLabtestInputSchema } from './ServicesUncheckedUpdateWithoutLabtestInputSchema'
import { ServicesUpdateWithoutLabtestInputSchema } from './ServicesUpdateWithoutLabtestInputSchema'
import { ServicesWhereInputSchema } from './ServicesWhereInputSchema'

export const ServicesUpsertWithoutLabtestInputSchema: z.ZodType<Prisma.ServicesUpsertWithoutLabtestInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => ServicesUpdateWithoutLabtestInputSchema),
				z.lazy(() => ServicesUncheckedUpdateWithoutLabtestInputSchema),
			]),
			create: z.union([
				z.lazy(() => ServicesCreateWithoutLabtestInputSchema),
				z.lazy(() => ServicesUncheckedCreateWithoutLabtestInputSchema),
			]),
			where: z.lazy(() => ServicesWhereInputSchema).optional(),
		})
		.strict()

export default ServicesUpsertWithoutLabtestInputSchema
