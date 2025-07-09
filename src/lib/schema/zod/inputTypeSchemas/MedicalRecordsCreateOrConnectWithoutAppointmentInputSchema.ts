import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { MedicalRecordsCreateWithoutAppointmentInputSchema } from './MedicalRecordsCreateWithoutAppointmentInputSchema'
import { MedicalRecordsUncheckedCreateWithoutAppointmentInputSchema } from './MedicalRecordsUncheckedCreateWithoutAppointmentInputSchema'
import { MedicalRecordsWhereUniqueInputSchema } from './MedicalRecordsWhereUniqueInputSchema'

export const MedicalRecordsCreateOrConnectWithoutAppointmentInputSchema: z.ZodType<Prisma.MedicalRecordsCreateOrConnectWithoutAppointmentInput> =
	z
		.object({
			where: z.lazy(() => MedicalRecordsWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => MedicalRecordsCreateWithoutAppointmentInputSchema),
				z.lazy(() => MedicalRecordsUncheckedCreateWithoutAppointmentInputSchema),
			]),
		})
		.strict()

export default MedicalRecordsCreateOrConnectWithoutAppointmentInputSchema
