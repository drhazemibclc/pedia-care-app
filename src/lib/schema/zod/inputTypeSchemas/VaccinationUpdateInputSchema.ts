import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema'
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema'
import { PatientUpdateOneRequiredWithoutVaccinationNestedInputSchema } from './PatientUpdateOneRequiredWithoutVaccinationNestedInputSchema'
import { StaffUpdateOneWithoutVaccinationNestedInputSchema } from './StaffUpdateOneWithoutVaccinationNestedInputSchema'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'

export const VaccinationUpdateInputSchema: z.ZodType<Prisma.VaccinationUpdateInput> = z
	.object({
		vaccineName: z
			.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
			.optional(),
		vaccineBatchNo: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		administrationRoute: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		siteOfInjection: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		administeredDate: z
			.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
			.optional(),
		nextDueDate: z
			.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
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
		patient: z.lazy(() => PatientUpdateOneRequiredWithoutVaccinationNestedInputSchema).optional(),
		administeredByStaff: z.lazy(() => StaffUpdateOneWithoutVaccinationNestedInputSchema).optional(),
	})
	.strict()

export default VaccinationUpdateInputSchema
