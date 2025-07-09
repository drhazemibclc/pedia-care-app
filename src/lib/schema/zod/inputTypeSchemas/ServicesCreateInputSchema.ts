import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentCreateNestedManyWithoutServiceInputSchema } from './AppointmentCreateNestedManyWithoutServiceInputSchema'
import { LabTestCreateNestedOneWithoutServicesInputSchema } from './LabTestCreateNestedOneWithoutServicesInputSchema'
import { PatientBillsCreateNestedManyWithoutServiceInputSchema } from './PatientBillsCreateNestedManyWithoutServiceInputSchema'
import { ServiceCategorySchema } from './ServiceCategorySchema'

export const ServicesCreateInputSchema: z.ZodType<Prisma.ServicesCreateInput> = z
	.object({
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
		labtest: z.lazy(() => LabTestCreateNestedOneWithoutServicesInputSchema).optional(),
		bills: z.lazy(() => PatientBillsCreateNestedManyWithoutServiceInputSchema).optional(),
		appointments: z.lazy(() => AppointmentCreateNestedManyWithoutServiceInputSchema).optional(),
	})
	.strict()

export default ServicesCreateInputSchema
