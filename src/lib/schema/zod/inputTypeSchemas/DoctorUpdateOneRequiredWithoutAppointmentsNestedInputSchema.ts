import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DoctorCreateOrConnectWithoutAppointmentsInputSchema } from './DoctorCreateOrConnectWithoutAppointmentsInputSchema'
import { DoctorCreateWithoutAppointmentsInputSchema } from './DoctorCreateWithoutAppointmentsInputSchema'
import { DoctorUncheckedCreateWithoutAppointmentsInputSchema } from './DoctorUncheckedCreateWithoutAppointmentsInputSchema'
import { DoctorUncheckedUpdateWithoutAppointmentsInputSchema } from './DoctorUncheckedUpdateWithoutAppointmentsInputSchema'
import { DoctorUpdateToOneWithWhereWithoutAppointmentsInputSchema } from './DoctorUpdateToOneWithWhereWithoutAppointmentsInputSchema'
import { DoctorUpdateWithoutAppointmentsInputSchema } from './DoctorUpdateWithoutAppointmentsInputSchema'
import { DoctorUpsertWithoutAppointmentsInputSchema } from './DoctorUpsertWithoutAppointmentsInputSchema'
import { DoctorWhereUniqueInputSchema } from './DoctorWhereUniqueInputSchema'

export const DoctorUpdateOneRequiredWithoutAppointmentsNestedInputSchema: z.ZodType<Prisma.DoctorUpdateOneRequiredWithoutAppointmentsNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => DoctorCreateWithoutAppointmentsInputSchema),
					z.lazy(() => DoctorUncheckedCreateWithoutAppointmentsInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => DoctorCreateOrConnectWithoutAppointmentsInputSchema).optional(),
			upsert: z.lazy(() => DoctorUpsertWithoutAppointmentsInputSchema).optional(),
			connect: z.lazy(() => DoctorWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => DoctorUpdateToOneWithWhereWithoutAppointmentsInputSchema),
					z.lazy(() => DoctorUpdateWithoutAppointmentsInputSchema),
					z.lazy(() => DoctorUncheckedUpdateWithoutAppointmentsInputSchema),
				])
				.optional(),
		})
		.strict()

export default DoctorUpdateOneRequiredWithoutAppointmentsNestedInputSchema
