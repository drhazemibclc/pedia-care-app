import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientCreateOrConnectWithoutMedicalInputSchema } from './PatientCreateOrConnectWithoutMedicalInputSchema'
import { PatientCreateWithoutMedicalInputSchema } from './PatientCreateWithoutMedicalInputSchema'
import { PatientUncheckedCreateWithoutMedicalInputSchema } from './PatientUncheckedCreateWithoutMedicalInputSchema'
import { PatientWhereUniqueInputSchema } from './PatientWhereUniqueInputSchema'

export const PatientCreateNestedOneWithoutMedicalInputSchema: z.ZodType<Prisma.PatientCreateNestedOneWithoutMedicalInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => PatientCreateWithoutMedicalInputSchema),
					z.lazy(() => PatientUncheckedCreateWithoutMedicalInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => PatientCreateOrConnectWithoutMedicalInputSchema).optional(),
			connect: z.lazy(() => PatientWhereUniqueInputSchema).optional(),
		})
		.strict()

export default PatientCreateNestedOneWithoutMedicalInputSchema
