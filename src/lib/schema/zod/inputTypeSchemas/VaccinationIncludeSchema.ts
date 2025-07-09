import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientArgsSchema } from '../outputTypeSchemas/PatientArgsSchema'
import { StaffArgsSchema } from '../outputTypeSchemas/StaffArgsSchema'

export const VaccinationIncludeSchema: z.ZodType<Prisma.VaccinationInclude> = z
	.object({
		patient: z.union([z.boolean(), z.lazy(() => PatientArgsSchema)]).optional(),
		administeredByStaff: z.union([z.boolean(), z.lazy(() => StaffArgsSchema)]).optional(),
	})
	.strict()

export default VaccinationIncludeSchema
