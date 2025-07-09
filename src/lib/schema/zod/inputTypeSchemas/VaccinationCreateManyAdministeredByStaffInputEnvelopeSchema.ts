import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { VaccinationCreateManyAdministeredByStaffInputSchema } from './VaccinationCreateManyAdministeredByStaffInputSchema'

export const VaccinationCreateManyAdministeredByStaffInputEnvelopeSchema: z.ZodType<Prisma.VaccinationCreateManyAdministeredByStaffInputEnvelope> =
	z
		.object({
			data: z.union([
				z.lazy(() => VaccinationCreateManyAdministeredByStaffInputSchema),
				z.lazy(() => VaccinationCreateManyAdministeredByStaffInputSchema).array(),
			]),
			skipDuplicates: z.boolean().optional(),
		})
		.strict()

export default VaccinationCreateManyAdministeredByStaffInputEnvelopeSchema
