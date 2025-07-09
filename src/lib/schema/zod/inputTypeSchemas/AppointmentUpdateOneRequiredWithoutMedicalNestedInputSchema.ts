import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentCreateOrConnectWithoutMedicalInputSchema } from './AppointmentCreateOrConnectWithoutMedicalInputSchema'
import { AppointmentCreateWithoutMedicalInputSchema } from './AppointmentCreateWithoutMedicalInputSchema'
import { AppointmentUncheckedCreateWithoutMedicalInputSchema } from './AppointmentUncheckedCreateWithoutMedicalInputSchema'
import { AppointmentUncheckedUpdateWithoutMedicalInputSchema } from './AppointmentUncheckedUpdateWithoutMedicalInputSchema'
import { AppointmentUpdateToOneWithWhereWithoutMedicalInputSchema } from './AppointmentUpdateToOneWithWhereWithoutMedicalInputSchema'
import { AppointmentUpdateWithoutMedicalInputSchema } from './AppointmentUpdateWithoutMedicalInputSchema'
import { AppointmentUpsertWithoutMedicalInputSchema } from './AppointmentUpsertWithoutMedicalInputSchema'
import { AppointmentWhereUniqueInputSchema } from './AppointmentWhereUniqueInputSchema'

export const AppointmentUpdateOneRequiredWithoutMedicalNestedInputSchema: z.ZodType<Prisma.AppointmentUpdateOneRequiredWithoutMedicalNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => AppointmentCreateWithoutMedicalInputSchema),
					z.lazy(() => AppointmentUncheckedCreateWithoutMedicalInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => AppointmentCreateOrConnectWithoutMedicalInputSchema).optional(),
			upsert: z.lazy(() => AppointmentUpsertWithoutMedicalInputSchema).optional(),
			connect: z.lazy(() => AppointmentWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => AppointmentUpdateToOneWithWhereWithoutMedicalInputSchema),
					z.lazy(() => AppointmentUpdateWithoutMedicalInputSchema),
					z.lazy(() => AppointmentUncheckedUpdateWithoutMedicalInputSchema),
				])
				.optional(),
		})
		.strict()

export default AppointmentUpdateOneRequiredWithoutMedicalNestedInputSchema
