import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'
import { FloatFieldUpdateOperationsInputSchema } from './FloatFieldUpdateOperationsInputSchema'
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema'

export const PatientBillsUncheckedUpdateInputSchema: z.ZodType<Prisma.PatientBillsUncheckedUpdateInput> =
	z
		.object({
			id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
			billId: z
				.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)])
				.optional(),
			serviceId: z
				.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)])
				.optional(),
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
		})
		.strict()

export default PatientBillsUncheckedUpdateInputSchema
