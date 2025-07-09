import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { StaffCountOutputTypeArgsSchema } from '../outputTypeSchemas/StaffCountOutputTypeArgsSchema'
import { UserArgsSchema } from '../outputTypeSchemas/UserArgsSchema'
import { VaccinationFindManyArgsSchema } from '../outputTypeSchemas/VaccinationFindManyArgsSchema'

export const StaffIncludeSchema: z.ZodType<Prisma.StaffInclude> = z
	.object({
		user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
		Vaccination: z.union([z.boolean(), z.lazy(() => VaccinationFindManyArgsSchema)]).optional(),
		_count: z.union([z.boolean(), z.lazy(() => StaffCountOutputTypeArgsSchema)]).optional(),
	})
	.strict()

export default StaffIncludeSchema
