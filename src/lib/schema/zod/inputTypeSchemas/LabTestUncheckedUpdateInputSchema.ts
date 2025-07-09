import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema'
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'

export const LabTestUncheckedUpdateInputSchema: z.ZodType<Prisma.LabTestUncheckedUpdateInput> = z
	.object({
		id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
		recordId: z
			.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)])
			.optional(),
		testDate: z
			.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
			.optional(),
		result: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		status: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		notes: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		serviceId: z
			.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)])
			.optional(),
		createdAt: z
			.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
			.optional(),
		updatedAt: z
			.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
			.optional(),
	})
	.strict()

export default LabTestUncheckedUpdateInputSchema
