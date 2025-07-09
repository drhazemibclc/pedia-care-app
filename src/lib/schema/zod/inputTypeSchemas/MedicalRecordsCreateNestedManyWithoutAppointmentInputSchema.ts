import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { MedicalRecordsCreateManyAppointmentInputEnvelopeSchema } from './MedicalRecordsCreateManyAppointmentInputEnvelopeSchema'
import { MedicalRecordsCreateOrConnectWithoutAppointmentInputSchema } from './MedicalRecordsCreateOrConnectWithoutAppointmentInputSchema'
import { MedicalRecordsCreateWithoutAppointmentInputSchema } from './MedicalRecordsCreateWithoutAppointmentInputSchema'
import { MedicalRecordsUncheckedCreateWithoutAppointmentInputSchema } from './MedicalRecordsUncheckedCreateWithoutAppointmentInputSchema'
import { MedicalRecordsWhereUniqueInputSchema } from './MedicalRecordsWhereUniqueInputSchema'

export const MedicalRecordsCreateNestedManyWithoutAppointmentInputSchema: z.ZodType<Prisma.MedicalRecordsCreateNestedManyWithoutAppointmentInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => MedicalRecordsCreateWithoutAppointmentInputSchema),
					z.lazy(() => MedicalRecordsCreateWithoutAppointmentInputSchema).array(),
					z.lazy(() => MedicalRecordsUncheckedCreateWithoutAppointmentInputSchema),
					z.lazy(() => MedicalRecordsUncheckedCreateWithoutAppointmentInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => MedicalRecordsCreateOrConnectWithoutAppointmentInputSchema),
					z.lazy(() => MedicalRecordsCreateOrConnectWithoutAppointmentInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => MedicalRecordsCreateManyAppointmentInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => MedicalRecordsWhereUniqueInputSchema),
					z.lazy(() => MedicalRecordsWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict()

export default MedicalRecordsCreateNestedManyWithoutAppointmentInputSchema
