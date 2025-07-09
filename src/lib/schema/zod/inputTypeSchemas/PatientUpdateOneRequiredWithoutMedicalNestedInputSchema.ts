import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientCreateOrConnectWithoutMedicalInputSchema } from './PatientCreateOrConnectWithoutMedicalInputSchema'
import { PatientCreateWithoutMedicalInputSchema } from './PatientCreateWithoutMedicalInputSchema'
import { PatientUncheckedCreateWithoutMedicalInputSchema } from './PatientUncheckedCreateWithoutMedicalInputSchema'
import { PatientUncheckedUpdateWithoutMedicalInputSchema } from './PatientUncheckedUpdateWithoutMedicalInputSchema'
import { PatientUpdateToOneWithWhereWithoutMedicalInputSchema } from './PatientUpdateToOneWithWhereWithoutMedicalInputSchema'
import { PatientUpdateWithoutMedicalInputSchema } from './PatientUpdateWithoutMedicalInputSchema'
import { PatientUpsertWithoutMedicalInputSchema } from './PatientUpsertWithoutMedicalInputSchema'
import { PatientWhereUniqueInputSchema } from './PatientWhereUniqueInputSchema'

export const PatientUpdateOneRequiredWithoutMedicalNestedInputSchema: z.ZodType<Prisma.PatientUpdateOneRequiredWithoutMedicalNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => PatientCreateWithoutMedicalInputSchema),
					z.lazy(() => PatientUncheckedCreateWithoutMedicalInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => PatientCreateOrConnectWithoutMedicalInputSchema).optional(),
			upsert: z.lazy(() => PatientUpsertWithoutMedicalInputSchema).optional(),
			connect: z.lazy(() => PatientWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => PatientUpdateToOneWithWhereWithoutMedicalInputSchema),
					z.lazy(() => PatientUpdateWithoutMedicalInputSchema),
					z.lazy(() => PatientUncheckedUpdateWithoutMedicalInputSchema),
				])
				.optional(),
		})
		.strict()

export default PatientUpdateOneRequiredWithoutMedicalNestedInputSchema
