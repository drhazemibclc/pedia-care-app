import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientCreateOrConnectWithoutAppointmentsInputSchema } from './PatientCreateOrConnectWithoutAppointmentsInputSchema'
import { PatientCreateWithoutAppointmentsInputSchema } from './PatientCreateWithoutAppointmentsInputSchema'
import { PatientUncheckedCreateWithoutAppointmentsInputSchema } from './PatientUncheckedCreateWithoutAppointmentsInputSchema'
import { PatientWhereUniqueInputSchema } from './PatientWhereUniqueInputSchema'

export const PatientCreateNestedOneWithoutAppointmentsInputSchema: z.ZodType<Prisma.PatientCreateNestedOneWithoutAppointmentsInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => PatientCreateWithoutAppointmentsInputSchema),
					z.lazy(() => PatientUncheckedCreateWithoutAppointmentsInputSchema),
				])
				.optional(),
			connectOrCreate: z
				.lazy(() => PatientCreateOrConnectWithoutAppointmentsInputSchema)
				.optional(),
			connect: z.lazy(() => PatientWhereUniqueInputSchema).optional(),
		})
		.strict()

export default PatientCreateNestedOneWithoutAppointmentsInputSchema
