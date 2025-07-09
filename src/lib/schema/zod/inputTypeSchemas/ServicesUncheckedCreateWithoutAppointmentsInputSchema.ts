import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { LabTestUncheckedCreateNestedOneWithoutServicesInputSchema } from './LabTestUncheckedCreateNestedOneWithoutServicesInputSchema'
import { PatientBillsUncheckedCreateNestedManyWithoutServiceInputSchema } from './PatientBillsUncheckedCreateNestedManyWithoutServiceInputSchema'
import { ServiceCategorySchema } from './ServiceCategorySchema'

export const ServicesUncheckedCreateWithoutAppointmentsInputSchema: z.ZodType<Prisma.ServicesUncheckedCreateWithoutAppointmentsInput> =
	z
		.object({
			id: z.number().int().optional(),
			serviceName: z.string(),
			description: z.string(),
			price: z.number(),
			category: z
				.lazy(() => ServiceCategorySchema)
				.optional()
				.nullable(),
			duration: z.number().int().optional().nullable(),
			isAvailable: z.boolean().optional(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			labtest: z.lazy(() => LabTestUncheckedCreateNestedOneWithoutServicesInputSchema).optional(),
			bills: z
				.lazy(() => PatientBillsUncheckedCreateNestedManyWithoutServiceInputSchema)
				.optional(),
		})
		.strict()

export default ServicesUncheckedCreateWithoutAppointmentsInputSchema
