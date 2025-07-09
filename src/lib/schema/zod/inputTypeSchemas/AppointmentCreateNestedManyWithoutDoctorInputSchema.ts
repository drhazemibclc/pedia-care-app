import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentCreateManyDoctorInputEnvelopeSchema } from './AppointmentCreateManyDoctorInputEnvelopeSchema'
import { AppointmentCreateOrConnectWithoutDoctorInputSchema } from './AppointmentCreateOrConnectWithoutDoctorInputSchema'
import { AppointmentCreateWithoutDoctorInputSchema } from './AppointmentCreateWithoutDoctorInputSchema'
import { AppointmentUncheckedCreateWithoutDoctorInputSchema } from './AppointmentUncheckedCreateWithoutDoctorInputSchema'
import { AppointmentWhereUniqueInputSchema } from './AppointmentWhereUniqueInputSchema'

export const AppointmentCreateNestedManyWithoutDoctorInputSchema: z.ZodType<Prisma.AppointmentCreateNestedManyWithoutDoctorInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => AppointmentCreateWithoutDoctorInputSchema),
					z.lazy(() => AppointmentCreateWithoutDoctorInputSchema).array(),
					z.lazy(() => AppointmentUncheckedCreateWithoutDoctorInputSchema),
					z.lazy(() => AppointmentUncheckedCreateWithoutDoctorInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => AppointmentCreateOrConnectWithoutDoctorInputSchema),
					z.lazy(() => AppointmentCreateOrConnectWithoutDoctorInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => AppointmentCreateManyDoctorInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => AppointmentWhereUniqueInputSchema),
					z.lazy(() => AppointmentWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict()

export default AppointmentCreateNestedManyWithoutDoctorInputSchema
