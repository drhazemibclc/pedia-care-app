import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'
import { MedicalRecordsUpdateOneRequiredWithoutLabTestNestedInputSchema } from './MedicalRecordsUpdateOneRequiredWithoutLabTestNestedInputSchema'
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema'
import { ServicesUpdateOneRequiredWithoutLabtestNestedInputSchema } from './ServicesUpdateOneRequiredWithoutLabtestNestedInputSchema'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'

export const LabTestUpdateInputSchema: z.ZodType<Prisma.LabTestUpdateInput> = z
	.object({
		testDate: z
			.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
			.optional(),
		result: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		status: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		notes: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		createdAt: z
			.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
			.optional(),
		updatedAt: z
			.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
			.optional(),
		services: z.lazy(() => ServicesUpdateOneRequiredWithoutLabtestNestedInputSchema).optional(),
		medicalRecord: z
			.lazy(() => MedicalRecordsUpdateOneRequiredWithoutLabTestNestedInputSchema)
			.optional(),
	})
	.strict()

export default LabTestUpdateInputSchema
