import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentFindManyArgsSchema } from '../outputTypeSchemas/AppointmentFindManyArgsSchema'
import { LabTestArgsSchema } from '../outputTypeSchemas/LabTestArgsSchema'
import { PatientBillsFindManyArgsSchema } from '../outputTypeSchemas/PatientBillsFindManyArgsSchema'
import { ServicesCountOutputTypeArgsSchema } from '../outputTypeSchemas/ServicesCountOutputTypeArgsSchema'

export const ServicesSelectSchema: z.ZodType<Prisma.ServicesSelect> = z
	.object({
		id: z.boolean().optional(),
		serviceName: z.boolean().optional(),
		description: z.boolean().optional(),
		price: z.boolean().optional(),
		category: z.boolean().optional(),
		duration: z.boolean().optional(),
		isAvailable: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		labtest: z.union([z.boolean(), z.lazy(() => LabTestArgsSchema)]).optional(),
		bills: z.union([z.boolean(), z.lazy(() => PatientBillsFindManyArgsSchema)]).optional(),
		appointments: z.union([z.boolean(), z.lazy(() => AppointmentFindManyArgsSchema)]).optional(),
		_count: z.union([z.boolean(), z.lazy(() => ServicesCountOutputTypeArgsSchema)]).optional(),
	})
	.strict()

export default ServicesSelectSchema
