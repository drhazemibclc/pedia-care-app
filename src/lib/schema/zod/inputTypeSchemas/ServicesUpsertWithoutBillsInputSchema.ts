import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { ServicesCreateWithoutBillsInputSchema } from './ServicesCreateWithoutBillsInputSchema'
import { ServicesUncheckedCreateWithoutBillsInputSchema } from './ServicesUncheckedCreateWithoutBillsInputSchema'
import { ServicesUncheckedUpdateWithoutBillsInputSchema } from './ServicesUncheckedUpdateWithoutBillsInputSchema'
import { ServicesUpdateWithoutBillsInputSchema } from './ServicesUpdateWithoutBillsInputSchema'
import { ServicesWhereInputSchema } from './ServicesWhereInputSchema'

export const ServicesUpsertWithoutBillsInputSchema: z.ZodType<Prisma.ServicesUpsertWithoutBillsInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => ServicesUpdateWithoutBillsInputSchema),
				z.lazy(() => ServicesUncheckedUpdateWithoutBillsInputSchema),
			]),
			create: z.union([
				z.lazy(() => ServicesCreateWithoutBillsInputSchema),
				z.lazy(() => ServicesUncheckedCreateWithoutBillsInputSchema),
			]),
			where: z.lazy(() => ServicesWhereInputSchema).optional(),
		})
		.strict()

export default ServicesUpsertWithoutBillsInputSchema
