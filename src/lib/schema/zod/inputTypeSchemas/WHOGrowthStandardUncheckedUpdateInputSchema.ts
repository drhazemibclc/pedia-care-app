import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'
import { EnumGenderFieldUpdateOperationsInputSchema } from './EnumGenderFieldUpdateOperationsInputSchema'
import { EnumMeasurementTypeFieldUpdateOperationsInputSchema } from './EnumMeasurementTypeFieldUpdateOperationsInputSchema'
import { FloatFieldUpdateOperationsInputSchema } from './FloatFieldUpdateOperationsInputSchema'
import { GenderSchema } from './GenderSchema'
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema'
import { MeasurementTypeSchema } from './MeasurementTypeSchema'
import { NullableFloatFieldUpdateOperationsInputSchema } from './NullableFloatFieldUpdateOperationsInputSchema'

export const WHOGrowthStandardUncheckedUpdateInputSchema: z.ZodType<Prisma.WHOGrowthStandardUncheckedUpdateInput> =
	z
		.object({
			id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
			ageInMonths: z
				.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)])
				.optional(),
			gender: z
				.union([
					z.lazy(() => GenderSchema),
					z.lazy(() => EnumGenderFieldUpdateOperationsInputSchema),
				])
				.optional(),
			measurementType: z
				.union([
					z.lazy(() => MeasurementTypeSchema),
					z.lazy(() => EnumMeasurementTypeFieldUpdateOperationsInputSchema),
				])
				.optional(),
			lValue: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
			mValue: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
			sValue: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
			sd0: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
			sd1neg: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
			sd1pos: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
			sd2neg: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
			sd2pos: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
			sd3neg: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
			sd3pos: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
			sd4neg: z
				.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			sd4pos: z
				.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			createdAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
			updatedAt: z
				.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
				.optional(),
		})
		.strict()

export default WHOGrowthStandardUncheckedUpdateInputSchema
