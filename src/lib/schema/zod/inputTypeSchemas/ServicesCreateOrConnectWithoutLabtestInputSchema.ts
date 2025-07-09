import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { ServicesCreateWithoutLabtestInputSchema } from './ServicesCreateWithoutLabtestInputSchema'
import { ServicesUncheckedCreateWithoutLabtestInputSchema } from './ServicesUncheckedCreateWithoutLabtestInputSchema'
import { ServicesWhereUniqueInputSchema } from './ServicesWhereUniqueInputSchema'

export const ServicesCreateOrConnectWithoutLabtestInputSchema: z.ZodType<Prisma.ServicesCreateOrConnectWithoutLabtestInput> =
	z
		.object({
			where: z.lazy(() => ServicesWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => ServicesCreateWithoutLabtestInputSchema),
				z.lazy(() => ServicesUncheckedCreateWithoutLabtestInputSchema),
			]),
		})
		.strict()

export default ServicesCreateOrConnectWithoutLabtestInputSchema
