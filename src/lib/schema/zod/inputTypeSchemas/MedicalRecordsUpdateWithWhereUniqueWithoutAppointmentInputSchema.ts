import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { MedicalRecordsUncheckedUpdateWithoutAppointmentInputSchema } from './MedicalRecordsUncheckedUpdateWithoutAppointmentInputSchema'
import { MedicalRecordsUpdateWithoutAppointmentInputSchema } from './MedicalRecordsUpdateWithoutAppointmentInputSchema'
import { MedicalRecordsWhereUniqueInputSchema } from './MedicalRecordsWhereUniqueInputSchema'

export const MedicalRecordsUpdateWithWhereUniqueWithoutAppointmentInputSchema: z.ZodType<Prisma.MedicalRecordsUpdateWithWhereUniqueWithoutAppointmentInput> =
	z
		.object({
			where: z.lazy(() => MedicalRecordsWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => MedicalRecordsUpdateWithoutAppointmentInputSchema),
				z.lazy(() => MedicalRecordsUncheckedUpdateWithoutAppointmentInputSchema),
			]),
		})
		.strict()

export default MedicalRecordsUpdateWithWhereUniqueWithoutAppointmentInputSchema
