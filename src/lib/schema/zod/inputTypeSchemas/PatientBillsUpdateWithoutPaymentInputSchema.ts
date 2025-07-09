import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'
import { FloatFieldUpdateOperationsInputSchema } from './FloatFieldUpdateOperationsInputSchema'
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema'
import { ServicesUpdateOneRequiredWithoutBillsNestedInputSchema } from './ServicesUpdateOneRequiredWithoutBillsNestedInputSchema'

export const PatientBillsUpdateWithoutPaymentInputSchema: z.ZodType<Prisma.PatientBillsUpdateWithoutPaymentInput> =
	z
		.object({
			serviceDate: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			quantity: z
				.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)])
				.optional(),
			unitCost: z
				.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)])
				.optional(),
			totalCost: z
				.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)])
				.optional(),
			createdAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			updatedAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			service: z.lazy(() => ServicesUpdateOneRequiredWithoutBillsNestedInputSchema).optional(),
		})
		.strict()

export default PatientBillsUpdateWithoutPaymentInputSchema
