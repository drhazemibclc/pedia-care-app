import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { MeasurementTypeSchema } from './MeasurementTypeSchema'

export const EnumMeasurementTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumMeasurementTypeFieldUpdateOperationsInput> =
	z
		.object({
			set: z.lazy(() => MeasurementTypeSchema).optional(),
		})
		.strict()

export default EnumMeasurementTypeFieldUpdateOperationsInputSchema
