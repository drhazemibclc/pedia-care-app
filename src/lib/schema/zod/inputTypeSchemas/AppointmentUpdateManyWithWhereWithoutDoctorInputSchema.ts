import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentScalarWhereInputSchema } from './AppointmentScalarWhereInputSchema'
import { AppointmentUncheckedUpdateManyWithoutDoctorInputSchema } from './AppointmentUncheckedUpdateManyWithoutDoctorInputSchema'
import { AppointmentUpdateManyMutationInputSchema } from './AppointmentUpdateManyMutationInputSchema'

export const AppointmentUpdateManyWithWhereWithoutDoctorInputSchema: z.ZodType<Prisma.AppointmentUpdateManyWithWhereWithoutDoctorInput> =
	z
		.object({
			where: z.lazy(() => AppointmentScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => AppointmentUpdateManyMutationInputSchema),
				z.lazy(() => AppointmentUncheckedUpdateManyWithoutDoctorInputSchema),
			]),
		})
		.strict()

export default AppointmentUpdateManyWithWhereWithoutDoctorInputSchema
