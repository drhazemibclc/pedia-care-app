import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { ServicesCreateOrConnectWithoutBillsInputSchema } from './ServicesCreateOrConnectWithoutBillsInputSchema'
import { ServicesCreateWithoutBillsInputSchema } from './ServicesCreateWithoutBillsInputSchema'
import { ServicesUncheckedCreateWithoutBillsInputSchema } from './ServicesUncheckedCreateWithoutBillsInputSchema'
import { ServicesWhereUniqueInputSchema } from './ServicesWhereUniqueInputSchema'

export const ServicesCreateNestedOneWithoutBillsInputSchema: z.ZodType<Prisma.ServicesCreateNestedOneWithoutBillsInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => ServicesCreateWithoutBillsInputSchema),
					z.lazy(() => ServicesUncheckedCreateWithoutBillsInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => ServicesCreateOrConnectWithoutBillsInputSchema).optional(),
			connect: z.lazy(() => ServicesWhereUniqueInputSchema).optional(),
		})
		.strict()

export default ServicesCreateNestedOneWithoutBillsInputSchema
