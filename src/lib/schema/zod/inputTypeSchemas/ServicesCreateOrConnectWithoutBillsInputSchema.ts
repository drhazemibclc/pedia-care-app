import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { ServicesCreateWithoutBillsInputSchema } from './ServicesCreateWithoutBillsInputSchema'
import { ServicesUncheckedCreateWithoutBillsInputSchema } from './ServicesUncheckedCreateWithoutBillsInputSchema'
import { ServicesWhereUniqueInputSchema } from './ServicesWhereUniqueInputSchema'

export const ServicesCreateOrConnectWithoutBillsInputSchema: z.ZodType<Prisma.ServicesCreateOrConnectWithoutBillsInput> =
	z
		.object({
			where: z.lazy(() => ServicesWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => ServicesCreateWithoutBillsInputSchema),
				z.lazy(() => ServicesUncheckedCreateWithoutBillsInputSchema),
			]),
		})
		.strict()

export default ServicesCreateOrConnectWithoutBillsInputSchema
