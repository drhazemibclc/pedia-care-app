import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentScalarWhereInputSchema } from './AppointmentScalarWhereInputSchema'
import { AppointmentUncheckedUpdateManyWithoutServiceInputSchema } from './AppointmentUncheckedUpdateManyWithoutServiceInputSchema'
import { AppointmentUpdateManyMutationInputSchema } from './AppointmentUpdateManyMutationInputSchema'

export const AppointmentUpdateManyWithWhereWithoutServiceInputSchema: z.ZodType<Prisma.AppointmentUpdateManyWithWhereWithoutServiceInput> =
	z
		.object({
			where: z.lazy(() => AppointmentScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => AppointmentUpdateManyMutationInputSchema),
				z.lazy(() => AppointmentUncheckedUpdateManyWithoutServiceInputSchema),
			]),
		})
		.strict()

export default AppointmentUpdateManyWithWhereWithoutServiceInputSchema
