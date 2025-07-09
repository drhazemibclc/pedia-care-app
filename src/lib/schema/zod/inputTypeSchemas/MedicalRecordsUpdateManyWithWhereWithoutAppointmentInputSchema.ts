import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { MedicalRecordsScalarWhereInputSchema } from './MedicalRecordsScalarWhereInputSchema'
import { MedicalRecordsUncheckedUpdateManyWithoutAppointmentInputSchema } from './MedicalRecordsUncheckedUpdateManyWithoutAppointmentInputSchema'
import { MedicalRecordsUpdateManyMutationInputSchema } from './MedicalRecordsUpdateManyMutationInputSchema'

export const MedicalRecordsUpdateManyWithWhereWithoutAppointmentInputSchema: z.ZodType<Prisma.MedicalRecordsUpdateManyWithWhereWithoutAppointmentInput> =
	z
		.object({
			where: z.lazy(() => MedicalRecordsScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => MedicalRecordsUpdateManyMutationInputSchema),
				z.lazy(() => MedicalRecordsUncheckedUpdateManyWithoutAppointmentInputSchema),
			]),
		})
		.strict()

export default MedicalRecordsUpdateManyWithWhereWithoutAppointmentInputSchema
