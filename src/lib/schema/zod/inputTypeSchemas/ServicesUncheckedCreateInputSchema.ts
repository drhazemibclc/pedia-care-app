import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentUncheckedCreateNestedManyWithoutServiceInputSchema } from './AppointmentUncheckedCreateNestedManyWithoutServiceInputSchema'
import { LabTestUncheckedCreateNestedOneWithoutServicesInputSchema } from './LabTestUncheckedCreateNestedOneWithoutServicesInputSchema'
import { PatientBillsUncheckedCreateNestedManyWithoutServiceInputSchema } from './PatientBillsUncheckedCreateNestedManyWithoutServiceInputSchema'
import { ServiceCategorySchema } from './ServiceCategorySchema'

export const ServicesUncheckedCreateInputSchema: z.ZodType<Prisma.ServicesUncheckedCreateInput> = z
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
		bills: z.lazy(() => PatientBillsUncheckedCreateNestedManyWithoutServiceInputSchema).optional(),
		appointments: z
			.lazy(() => AppointmentUncheckedCreateNestedManyWithoutServiceInputSchema)
			.optional(),
	})
	.strict()

export default ServicesUncheckedCreateInputSchema
