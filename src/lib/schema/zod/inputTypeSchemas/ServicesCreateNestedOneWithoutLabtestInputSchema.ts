import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { ServicesCreateOrConnectWithoutLabtestInputSchema } from './ServicesCreateOrConnectWithoutLabtestInputSchema'
import { ServicesCreateWithoutLabtestInputSchema } from './ServicesCreateWithoutLabtestInputSchema'
import { ServicesUncheckedCreateWithoutLabtestInputSchema } from './ServicesUncheckedCreateWithoutLabtestInputSchema'
import { ServicesWhereUniqueInputSchema } from './ServicesWhereUniqueInputSchema'

export const ServicesCreateNestedOneWithoutLabtestInputSchema: z.ZodType<Prisma.ServicesCreateNestedOneWithoutLabtestInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => ServicesCreateWithoutLabtestInputSchema),
					z.lazy(() => ServicesUncheckedCreateWithoutLabtestInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => ServicesCreateOrConnectWithoutLabtestInputSchema).optional(),
			connect: z.lazy(() => ServicesWhereUniqueInputSchema).optional(),
		})
		.strict()

export default ServicesCreateNestedOneWithoutLabtestInputSchema
