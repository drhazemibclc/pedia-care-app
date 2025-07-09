import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientCreateWithoutAppointmentsInputSchema } from './PatientCreateWithoutAppointmentsInputSchema'
import { PatientUncheckedCreateWithoutAppointmentsInputSchema } from './PatientUncheckedCreateWithoutAppointmentsInputSchema'
import { PatientWhereUniqueInputSchema } from './PatientWhereUniqueInputSchema'

export const PatientCreateOrConnectWithoutAppointmentsInputSchema: z.ZodType<Prisma.PatientCreateOrConnectWithoutAppointmentsInput> =
	z
		.object({
			where: z.lazy(() => PatientWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => PatientCreateWithoutAppointmentsInputSchema),
				z.lazy(() => PatientUncheckedCreateWithoutAppointmentsInputSchema),
			]),
		})
		.strict()

export default PatientCreateOrConnectWithoutAppointmentsInputSchema
