import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientCreateWithoutMedicalInputSchema } from './PatientCreateWithoutMedicalInputSchema'
import { PatientUncheckedCreateWithoutMedicalInputSchema } from './PatientUncheckedCreateWithoutMedicalInputSchema'
import { PatientWhereUniqueInputSchema } from './PatientWhereUniqueInputSchema'

export const PatientCreateOrConnectWithoutMedicalInputSchema: z.ZodType<Prisma.PatientCreateOrConnectWithoutMedicalInput> =
	z
		.object({
			where: z.lazy(() => PatientWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => PatientCreateWithoutMedicalInputSchema),
				z.lazy(() => PatientUncheckedCreateWithoutMedicalInputSchema),
			]),
		})
		.strict()

export default PatientCreateOrConnectWithoutMedicalInputSchema
