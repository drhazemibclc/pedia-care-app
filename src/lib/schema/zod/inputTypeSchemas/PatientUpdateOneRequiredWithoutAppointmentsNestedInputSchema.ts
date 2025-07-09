import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientCreateOrConnectWithoutAppointmentsInputSchema } from './PatientCreateOrConnectWithoutAppointmentsInputSchema'
import { PatientCreateWithoutAppointmentsInputSchema } from './PatientCreateWithoutAppointmentsInputSchema'
import { PatientUncheckedCreateWithoutAppointmentsInputSchema } from './PatientUncheckedCreateWithoutAppointmentsInputSchema'
import { PatientUncheckedUpdateWithoutAppointmentsInputSchema } from './PatientUncheckedUpdateWithoutAppointmentsInputSchema'
import { PatientUpdateToOneWithWhereWithoutAppointmentsInputSchema } from './PatientUpdateToOneWithWhereWithoutAppointmentsInputSchema'
import { PatientUpdateWithoutAppointmentsInputSchema } from './PatientUpdateWithoutAppointmentsInputSchema'
import { PatientUpsertWithoutAppointmentsInputSchema } from './PatientUpsertWithoutAppointmentsInputSchema'
import { PatientWhereUniqueInputSchema } from './PatientWhereUniqueInputSchema'

export const PatientUpdateOneRequiredWithoutAppointmentsNestedInputSchema: z.ZodType<Prisma.PatientUpdateOneRequiredWithoutAppointmentsNestedInput> =
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
			upsert: z.lazy(() => PatientUpsertWithoutAppointmentsInputSchema).optional(),
			connect: z.lazy(() => PatientWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => PatientUpdateToOneWithWhereWithoutAppointmentsInputSchema),
					z.lazy(() => PatientUpdateWithoutAppointmentsInputSchema),
					z.lazy(() => PatientUncheckedUpdateWithoutAppointmentsInputSchema),
				])
				.optional(),
		})
		.strict()

export default PatientUpdateOneRequiredWithoutAppointmentsNestedInputSchema
