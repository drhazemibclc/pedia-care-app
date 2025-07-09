import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { ServicesCreateOrConnectWithoutBillsInputSchema } from './ServicesCreateOrConnectWithoutBillsInputSchema'
import { ServicesCreateWithoutBillsInputSchema } from './ServicesCreateWithoutBillsInputSchema'
import { ServicesUncheckedCreateWithoutBillsInputSchema } from './ServicesUncheckedCreateWithoutBillsInputSchema'
import { ServicesUncheckedUpdateWithoutBillsInputSchema } from './ServicesUncheckedUpdateWithoutBillsInputSchema'
import { ServicesUpdateToOneWithWhereWithoutBillsInputSchema } from './ServicesUpdateToOneWithWhereWithoutBillsInputSchema'
import { ServicesUpdateWithoutBillsInputSchema } from './ServicesUpdateWithoutBillsInputSchema'
import { ServicesUpsertWithoutBillsInputSchema } from './ServicesUpsertWithoutBillsInputSchema'
import { ServicesWhereUniqueInputSchema } from './ServicesWhereUniqueInputSchema'

export const ServicesUpdateOneRequiredWithoutBillsNestedInputSchema: z.ZodType<Prisma.ServicesUpdateOneRequiredWithoutBillsNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => ServicesCreateWithoutBillsInputSchema),
					z.lazy(() => ServicesUncheckedCreateWithoutBillsInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => ServicesCreateOrConnectWithoutBillsInputSchema).optional(),
			upsert: z.lazy(() => ServicesUpsertWithoutBillsInputSchema).optional(),
			connect: z.lazy(() => ServicesWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => ServicesUpdateToOneWithWhereWithoutBillsInputSchema),
					z.lazy(() => ServicesUpdateWithoutBillsInputSchema),
					z.lazy(() => ServicesUncheckedUpdateWithoutBillsInputSchema),
				])
				.optional(),
		})
		.strict()

export default ServicesUpdateOneRequiredWithoutBillsNestedInputSchema
