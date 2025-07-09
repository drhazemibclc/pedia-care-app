import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DoctorCreateOrConnectWithoutAppointmentsInputSchema } from './DoctorCreateOrConnectWithoutAppointmentsInputSchema'
import { DoctorCreateWithoutAppointmentsInputSchema } from './DoctorCreateWithoutAppointmentsInputSchema'
import { DoctorUncheckedCreateWithoutAppointmentsInputSchema } from './DoctorUncheckedCreateWithoutAppointmentsInputSchema'
import { DoctorWhereUniqueInputSchema } from './DoctorWhereUniqueInputSchema'

export const DoctorCreateNestedOneWithoutAppointmentsInputSchema: z.ZodType<Prisma.DoctorCreateNestedOneWithoutAppointmentsInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => DoctorCreateWithoutAppointmentsInputSchema),
					z.lazy(() => DoctorUncheckedCreateWithoutAppointmentsInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => DoctorCreateOrConnectWithoutAppointmentsInputSchema).optional(),
			connect: z.lazy(() => DoctorWhereUniqueInputSchema).optional(),
		})
		.strict()

export default DoctorCreateNestedOneWithoutAppointmentsInputSchema
