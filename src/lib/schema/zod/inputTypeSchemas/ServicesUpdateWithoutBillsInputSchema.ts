import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentUpdateManyWithoutServiceNestedInputSchema } from './AppointmentUpdateManyWithoutServiceNestedInputSchema'
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema'
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'
import { FloatFieldUpdateOperationsInputSchema } from './FloatFieldUpdateOperationsInputSchema'
import { LabTestUpdateOneWithoutServicesNestedInputSchema } from './LabTestUpdateOneWithoutServicesNestedInputSchema'
import { NullableEnumServiceCategoryFieldUpdateOperationsInputSchema } from './NullableEnumServiceCategoryFieldUpdateOperationsInputSchema'
import { NullableIntFieldUpdateOperationsInputSchema } from './NullableIntFieldUpdateOperationsInputSchema'
import { ServiceCategorySchema } from './ServiceCategorySchema'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'

export const ServicesUpdateWithoutBillsInputSchema: z.ZodType<Prisma.ServicesUpdateWithoutBillsInput> =
	z
		.object({
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
			labtest: z.lazy(() => LabTestUpdateOneWithoutServicesNestedInputSchema).optional(),
			appointments: z.lazy(() => AppointmentUpdateManyWithoutServiceNestedInputSchema).optional(),
		})
		.strict()

export default ServicesUpdateWithoutBillsInputSchema
