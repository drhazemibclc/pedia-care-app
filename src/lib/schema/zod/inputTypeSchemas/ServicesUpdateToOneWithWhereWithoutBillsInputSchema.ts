import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { ServicesUncheckedUpdateWithoutBillsInputSchema } from './ServicesUncheckedUpdateWithoutBillsInputSchema'
import { ServicesUpdateWithoutBillsInputSchema } from './ServicesUpdateWithoutBillsInputSchema'
import { ServicesWhereInputSchema } from './ServicesWhereInputSchema'

export const ServicesUpdateToOneWithWhereWithoutBillsInputSchema: z.ZodType<Prisma.ServicesUpdateToOneWithWhereWithoutBillsInput> =
	z
		.object({
			where: z.lazy(() => ServicesWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => ServicesUpdateWithoutBillsInputSchema),
				z.lazy(() => ServicesUncheckedUpdateWithoutBillsInputSchema),
			]),
		})
		.strict()

export default ServicesUpdateToOneWithWhereWithoutBillsInputSchema
