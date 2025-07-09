import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'
import { DoctorUpdateOneRequiredWithoutRatingsNestedInputSchema } from './DoctorUpdateOneRequiredWithoutRatingsNestedInputSchema'
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema'
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema'

export const RatingUpdateWithoutPatientInputSchema: z.ZodType<Prisma.RatingUpdateWithoutPatientInput> =
	z
		.object({
			rating: z
				.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)])
				.optional(),
			comment: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			createdAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			updatedAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			doctor: z.lazy(() => DoctorUpdateOneRequiredWithoutRatingsNestedInputSchema).optional(),
		})
		.strict()

export default RatingUpdateWithoutPatientInputSchema
