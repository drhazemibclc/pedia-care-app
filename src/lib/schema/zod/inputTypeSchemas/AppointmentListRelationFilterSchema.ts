import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentWhereInputSchema } from './AppointmentWhereInputSchema'

export const AppointmentListRelationFilterSchema: z.ZodType<Prisma.AppointmentListRelationFilter> =
	z
		.object({
			every: z.lazy(() => AppointmentWhereInputSchema).optional(),
			some: z.lazy(() => AppointmentWhereInputSchema).optional(),
			none: z.lazy(() => AppointmentWhereInputSchema).optional(),
		})
		.strict()

export default AppointmentListRelationFilterSchema
