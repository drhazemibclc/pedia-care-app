import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema'
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema'
import { PatientUpdateOneRequiredWithoutRatingsNestedInputSchema } from './PatientUpdateOneRequiredWithoutRatingsNestedInputSchema'

export const RatingUpdateWithoutDoctorInputSchema: z.ZodType<Prisma.RatingUpdateWithoutDoctorInput> =
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
			patient: z.lazy(() => PatientUpdateOneRequiredWithoutRatingsNestedInputSchema).optional(),
		})
		.strict()

export default RatingUpdateWithoutDoctorInputSchema
