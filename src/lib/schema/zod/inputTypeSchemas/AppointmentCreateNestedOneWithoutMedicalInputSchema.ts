import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentCreateOrConnectWithoutMedicalInputSchema } from './AppointmentCreateOrConnectWithoutMedicalInputSchema'
import { AppointmentCreateWithoutMedicalInputSchema } from './AppointmentCreateWithoutMedicalInputSchema'
import { AppointmentUncheckedCreateWithoutMedicalInputSchema } from './AppointmentUncheckedCreateWithoutMedicalInputSchema'
import { AppointmentWhereUniqueInputSchema } from './AppointmentWhereUniqueInputSchema'

export const AppointmentCreateNestedOneWithoutMedicalInputSchema: z.ZodType<Prisma.AppointmentCreateNestedOneWithoutMedicalInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => AppointmentCreateWithoutMedicalInputSchema),
					z.lazy(() => AppointmentUncheckedCreateWithoutMedicalInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => AppointmentCreateOrConnectWithoutMedicalInputSchema).optional(),
			connect: z.lazy(() => AppointmentWhereUniqueInputSchema).optional(),
		})
		.strict()

export default AppointmentCreateNestedOneWithoutMedicalInputSchema
