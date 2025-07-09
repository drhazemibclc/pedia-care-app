import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentScalarWhereInputSchema } from './AppointmentScalarWhereInputSchema'
import { AppointmentUncheckedUpdateManyWithoutPatientInputSchema } from './AppointmentUncheckedUpdateManyWithoutPatientInputSchema'
import { AppointmentUpdateManyMutationInputSchema } from './AppointmentUpdateManyMutationInputSchema'

export const AppointmentUpdateManyWithWhereWithoutPatientInputSchema: z.ZodType<Prisma.AppointmentUpdateManyWithWhereWithoutPatientInput> =
	z
		.object({
			where: z.lazy(() => AppointmentScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => AppointmentUpdateManyMutationInputSchema),
				z.lazy(() => AppointmentUncheckedUpdateManyWithoutPatientInputSchema),
			]),
		})
		.strict()

export default AppointmentUpdateManyWithWhereWithoutPatientInputSchema
