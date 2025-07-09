import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { ServicesCreateOrConnectWithoutLabtestInputSchema } from './ServicesCreateOrConnectWithoutLabtestInputSchema'
import { ServicesCreateWithoutLabtestInputSchema } from './ServicesCreateWithoutLabtestInputSchema'
import { ServicesUncheckedCreateWithoutLabtestInputSchema } from './ServicesUncheckedCreateWithoutLabtestInputSchema'
import { ServicesUncheckedUpdateWithoutLabtestInputSchema } from './ServicesUncheckedUpdateWithoutLabtestInputSchema'
import { ServicesUpdateToOneWithWhereWithoutLabtestInputSchema } from './ServicesUpdateToOneWithWhereWithoutLabtestInputSchema'
import { ServicesUpdateWithoutLabtestInputSchema } from './ServicesUpdateWithoutLabtestInputSchema'
import { ServicesUpsertWithoutLabtestInputSchema } from './ServicesUpsertWithoutLabtestInputSchema'
import { ServicesWhereUniqueInputSchema } from './ServicesWhereUniqueInputSchema'

export const ServicesUpdateOneRequiredWithoutLabtestNestedInputSchema: z.ZodType<Prisma.ServicesUpdateOneRequiredWithoutLabtestNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => ServicesCreateWithoutLabtestInputSchema),
					z.lazy(() => ServicesUncheckedCreateWithoutLabtestInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => ServicesCreateOrConnectWithoutLabtestInputSchema).optional(),
			upsert: z.lazy(() => ServicesUpsertWithoutLabtestInputSchema).optional(),
			connect: z.lazy(() => ServicesWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => ServicesUpdateToOneWithWhereWithoutLabtestInputSchema),
					z.lazy(() => ServicesUpdateWithoutLabtestInputSchema),
					z.lazy(() => ServicesUncheckedUpdateWithoutLabtestInputSchema),
				])
				.optional(),
		})
		.strict()

export default ServicesUpdateOneRequiredWithoutLabtestNestedInputSchema
