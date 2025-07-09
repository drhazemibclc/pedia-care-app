import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentWhereInputSchema } from './AppointmentWhereInputSchema'

export const AppointmentScalarRelationFilterSchema: z.ZodType<Prisma.AppointmentScalarRelationFilter> =
	z
		.object({
			is: z.lazy(() => AppointmentWhereInputSchema).optional(),
			isNot: z.lazy(() => AppointmentWhereInputSchema).optional(),
		})
		.strict()

export default AppointmentScalarRelationFilterSchema
