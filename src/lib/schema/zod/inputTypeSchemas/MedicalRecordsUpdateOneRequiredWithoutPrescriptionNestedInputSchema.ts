import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { MedicalRecordsCreateOrConnectWithoutPrescriptionInputSchema } from './MedicalRecordsCreateOrConnectWithoutPrescriptionInputSchema'
import { MedicalRecordsCreateWithoutPrescriptionInputSchema } from './MedicalRecordsCreateWithoutPrescriptionInputSchema'
import { MedicalRecordsUncheckedCreateWithoutPrescriptionInputSchema } from './MedicalRecordsUncheckedCreateWithoutPrescriptionInputSchema'
import { MedicalRecordsUncheckedUpdateWithoutPrescriptionInputSchema } from './MedicalRecordsUncheckedUpdateWithoutPrescriptionInputSchema'
import { MedicalRecordsUpdateToOneWithWhereWithoutPrescriptionInputSchema } from './MedicalRecordsUpdateToOneWithWhereWithoutPrescriptionInputSchema'
import { MedicalRecordsUpdateWithoutPrescriptionInputSchema } from './MedicalRecordsUpdateWithoutPrescriptionInputSchema'
import { MedicalRecordsUpsertWithoutPrescriptionInputSchema } from './MedicalRecordsUpsertWithoutPrescriptionInputSchema'
import { MedicalRecordsWhereUniqueInputSchema } from './MedicalRecordsWhereUniqueInputSchema'

export const MedicalRecordsUpdateOneRequiredWithoutPrescriptionNestedInputSchema: z.ZodType<Prisma.MedicalRecordsUpdateOneRequiredWithoutPrescriptionNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => MedicalRecordsCreateWithoutPrescriptionInputSchema),
					z.lazy(() => MedicalRecordsUncheckedCreateWithoutPrescriptionInputSchema),
				])
				.optional(),
			connectOrCreate: z
				.lazy(() => MedicalRecordsCreateOrConnectWithoutPrescriptionInputSchema)
				.optional(),
			upsert: z.lazy(() => MedicalRecordsUpsertWithoutPrescriptionInputSchema).optional(),
			connect: z.lazy(() => MedicalRecordsWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => MedicalRecordsUpdateToOneWithWhereWithoutPrescriptionInputSchema),
					z.lazy(() => MedicalRecordsUpdateWithoutPrescriptionInputSchema),
					z.lazy(() => MedicalRecordsUncheckedUpdateWithoutPrescriptionInputSchema),
				])
				.optional(),
		})
		.strict()

export default MedicalRecordsUpdateOneRequiredWithoutPrescriptionNestedInputSchema
