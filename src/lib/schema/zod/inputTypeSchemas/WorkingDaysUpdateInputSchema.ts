import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'
import { DoctorUpdateOneRequiredWithoutWorkingDaysNestedInputSchema } from './DoctorUpdateOneRequiredWithoutWorkingDaysNestedInputSchema'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'

export const WorkingDaysUpdateInputSchema: z.ZodType<Prisma.WorkingDaysUpdateInput> = z
	.object({
		day: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		startTime: z
			.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
			.optional(),
		closeTime: z
			.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
			.optional(),
		createdAt: z
			.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
			.optional(),
		updatedAt: z
			.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
			.optional(),
		doctor: z.lazy(() => DoctorUpdateOneRequiredWithoutWorkingDaysNestedInputSchema).optional(),
	})
	.strict()

export default WorkingDaysUpdateInputSchema
