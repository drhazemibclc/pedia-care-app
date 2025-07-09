import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentUncheckedUpdateManyWithoutServiceNestedInputSchema } from './AppointmentUncheckedUpdateManyWithoutServiceNestedInputSchema'
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema'
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'
import { FloatFieldUpdateOperationsInputSchema } from './FloatFieldUpdateOperationsInputSchema'
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema'
import { NullableEnumServiceCategoryFieldUpdateOperationsInputSchema } from './NullableEnumServiceCategoryFieldUpdateOperationsInputSchema'
import { NullableIntFieldUpdateOperationsInputSchema } from './NullableIntFieldUpdateOperationsInputSchema'
import { PatientBillsUncheckedUpdateManyWithoutServiceNestedInputSchema } from './PatientBillsUncheckedUpdateManyWithoutServiceNestedInputSchema'
import { ServiceCategorySchema } from './ServiceCategorySchema'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'

export const ServicesUncheckedUpdateWithoutLabtestInputSchema: z.ZodType<Prisma.ServicesUncheckedUpdateWithoutLabtestInput> =
	z
		.object({
			id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
			serviceName: z
				.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
				.optional(),
			description: z
				.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
				.optional(),
			price: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
			category: z
				.union([
					z.lazy(() => ServiceCategorySchema),
					z.lazy(() => NullableEnumServiceCategoryFieldUpdateOperationsInputSchema),
				])
				.optional()
				.nullable(),
			duration: z
				.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			isAvailable: z
				.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
				.optional(),
			createdAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			updatedAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			bills: z
				.lazy(() => PatientBillsUncheckedUpdateManyWithoutServiceNestedInputSchema)
				.optional(),
			appointments: z
				.lazy(() => AppointmentUncheckedUpdateManyWithoutServiceNestedInputSchema)
				.optional(),
		})
		.strict()

export default ServicesUncheckedUpdateWithoutLabtestInputSchema
