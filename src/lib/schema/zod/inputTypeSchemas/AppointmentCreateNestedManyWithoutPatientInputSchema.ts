import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentCreateManyPatientInputEnvelopeSchema } from './AppointmentCreateManyPatientInputEnvelopeSchema'
import { AppointmentCreateOrConnectWithoutPatientInputSchema } from './AppointmentCreateOrConnectWithoutPatientInputSchema'
import { AppointmentCreateWithoutPatientInputSchema } from './AppointmentCreateWithoutPatientInputSchema'
import { AppointmentUncheckedCreateWithoutPatientInputSchema } from './AppointmentUncheckedCreateWithoutPatientInputSchema'
import { AppointmentWhereUniqueInputSchema } from './AppointmentWhereUniqueInputSchema'

export const AppointmentCreateNestedManyWithoutPatientInputSchema: z.ZodType<Prisma.AppointmentCreateNestedManyWithoutPatientInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => AppointmentCreateWithoutPatientInputSchema),
					z.lazy(() => AppointmentCreateWithoutPatientInputSchema).array(),
					z.lazy(() => AppointmentUncheckedCreateWithoutPatientInputSchema),
					z.lazy(() => AppointmentUncheckedCreateWithoutPatientInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => AppointmentCreateOrConnectWithoutPatientInputSchema),
					z.lazy(() => AppointmentCreateOrConnectWithoutPatientInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => AppointmentCreateManyPatientInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => AppointmentWhereUniqueInputSchema),
					z.lazy(() => AppointmentWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict()

export default AppointmentCreateNestedManyWithoutPatientInputSchema
