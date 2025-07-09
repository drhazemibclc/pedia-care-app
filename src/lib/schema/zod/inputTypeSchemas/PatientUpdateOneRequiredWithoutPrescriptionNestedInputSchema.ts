import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientCreateOrConnectWithoutPrescriptionInputSchema } from './PatientCreateOrConnectWithoutPrescriptionInputSchema'
import { PatientCreateWithoutPrescriptionInputSchema } from './PatientCreateWithoutPrescriptionInputSchema'
import { PatientUncheckedCreateWithoutPrescriptionInputSchema } from './PatientUncheckedCreateWithoutPrescriptionInputSchema'
import { PatientUncheckedUpdateWithoutPrescriptionInputSchema } from './PatientUncheckedUpdateWithoutPrescriptionInputSchema'
import { PatientUpdateToOneWithWhereWithoutPrescriptionInputSchema } from './PatientUpdateToOneWithWhereWithoutPrescriptionInputSchema'
import { PatientUpdateWithoutPrescriptionInputSchema } from './PatientUpdateWithoutPrescriptionInputSchema'
import { PatientUpsertWithoutPrescriptionInputSchema } from './PatientUpsertWithoutPrescriptionInputSchema'
import { PatientWhereUniqueInputSchema } from './PatientWhereUniqueInputSchema'

export const PatientUpdateOneRequiredWithoutPrescriptionNestedInputSchema: z.ZodType<Prisma.PatientUpdateOneRequiredWithoutPrescriptionNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => PatientCreateWithoutPrescriptionInputSchema),
					z.lazy(() => PatientUncheckedCreateWithoutPrescriptionInputSchema),
				])
				.optional(),
			connectOrCreate: z
				.lazy(() => PatientCreateOrConnectWithoutPrescriptionInputSchema)
				.optional(),
			upsert: z.lazy(() => PatientUpsertWithoutPrescriptionInputSchema).optional(),
			connect: z.lazy(() => PatientWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => PatientUpdateToOneWithWhereWithoutPrescriptionInputSchema),
					z.lazy(() => PatientUpdateWithoutPrescriptionInputSchema),
					z.lazy(() => PatientUncheckedUpdateWithoutPrescriptionInputSchema),
				])
				.optional(),
		})
		.strict()

export default PatientUpdateOneRequiredWithoutPrescriptionNestedInputSchema
