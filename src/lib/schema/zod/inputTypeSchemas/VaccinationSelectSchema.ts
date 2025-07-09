import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientArgsSchema } from '../outputTypeSchemas/PatientArgsSchema'
import { StaffArgsSchema } from '../outputTypeSchemas/StaffArgsSchema'

export const VaccinationSelectSchema: z.ZodType<Prisma.VaccinationSelect> = z
	.object({
		id: z.boolean().optional(),
		patientId: z.boolean().optional(),
		administeredBy: z.boolean().optional(),
		vaccineName: z.boolean().optional(),
		vaccineBatchNo: z.boolean().optional(),
		administrationRoute: z.boolean().optional(),
		siteOfInjection: z.boolean().optional(),
		administeredDate: z.boolean().optional(),
		nextDueDate: z.boolean().optional(),
		notes: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		patient: z.union([z.boolean(), z.lazy(() => PatientArgsSchema)]).optional(),
		administeredByStaff: z.union([z.boolean(), z.lazy(() => StaffArgsSchema)]).optional(),
	})
	.strict()

export default VaccinationSelectSchema
