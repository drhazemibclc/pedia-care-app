import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { MedicalRecordsCreateWithoutAppointmentInputSchema } from './MedicalRecordsCreateWithoutAppointmentInputSchema'
import { MedicalRecordsUncheckedCreateWithoutAppointmentInputSchema } from './MedicalRecordsUncheckedCreateWithoutAppointmentInputSchema'
import { MedicalRecordsUncheckedUpdateWithoutAppointmentInputSchema } from './MedicalRecordsUncheckedUpdateWithoutAppointmentInputSchema'
import { MedicalRecordsUpdateWithoutAppointmentInputSchema } from './MedicalRecordsUpdateWithoutAppointmentInputSchema'
import { MedicalRecordsWhereUniqueInputSchema } from './MedicalRecordsWhereUniqueInputSchema'

export const MedicalRecordsUpsertWithWhereUniqueWithoutAppointmentInputSchema: z.ZodType<Prisma.MedicalRecordsUpsertWithWhereUniqueWithoutAppointmentInput> =
	z
		.object({
			where: z.lazy(() => MedicalRecordsWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => MedicalRecordsUpdateWithoutAppointmentInputSchema),
				z.lazy(() => MedicalRecordsUncheckedUpdateWithoutAppointmentInputSchema),
			]),
			create: z.union([
				z.lazy(() => MedicalRecordsCreateWithoutAppointmentInputSchema),
				z.lazy(() => MedicalRecordsUncheckedCreateWithoutAppointmentInputSchema),
			]),
		})
		.strict()

export default MedicalRecordsUpsertWithWhereUniqueWithoutAppointmentInputSchema
