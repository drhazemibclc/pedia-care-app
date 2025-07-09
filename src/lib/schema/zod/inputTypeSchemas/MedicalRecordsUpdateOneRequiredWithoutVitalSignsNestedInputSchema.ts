import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { MedicalRecordsCreateOrConnectWithoutVitalSignsInputSchema } from './MedicalRecordsCreateOrConnectWithoutVitalSignsInputSchema'
import { MedicalRecordsCreateWithoutVitalSignsInputSchema } from './MedicalRecordsCreateWithoutVitalSignsInputSchema'
import { MedicalRecordsUncheckedCreateWithoutVitalSignsInputSchema } from './MedicalRecordsUncheckedCreateWithoutVitalSignsInputSchema'
import { MedicalRecordsUncheckedUpdateWithoutVitalSignsInputSchema } from './MedicalRecordsUncheckedUpdateWithoutVitalSignsInputSchema'
import { MedicalRecordsUpdateToOneWithWhereWithoutVitalSignsInputSchema } from './MedicalRecordsUpdateToOneWithWhereWithoutVitalSignsInputSchema'
import { MedicalRecordsUpdateWithoutVitalSignsInputSchema } from './MedicalRecordsUpdateWithoutVitalSignsInputSchema'
import { MedicalRecordsUpsertWithoutVitalSignsInputSchema } from './MedicalRecordsUpsertWithoutVitalSignsInputSchema'
import { MedicalRecordsWhereUniqueInputSchema } from './MedicalRecordsWhereUniqueInputSchema'

export const MedicalRecordsUpdateOneRequiredWithoutVitalSignsNestedInputSchema: z.ZodType<Prisma.MedicalRecordsUpdateOneRequiredWithoutVitalSignsNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => MedicalRecordsCreateWithoutVitalSignsInputSchema),
					z.lazy(() => MedicalRecordsUncheckedCreateWithoutVitalSignsInputSchema),
				])
				.optional(),
			connectOrCreate: z
				.lazy(() => MedicalRecordsCreateOrConnectWithoutVitalSignsInputSchema)
				.optional(),
			upsert: z.lazy(() => MedicalRecordsUpsertWithoutVitalSignsInputSchema).optional(),
			connect: z.lazy(() => MedicalRecordsWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => MedicalRecordsUpdateToOneWithWhereWithoutVitalSignsInputSchema),
					z.lazy(() => MedicalRecordsUpdateWithoutVitalSignsInputSchema),
					z.lazy(() => MedicalRecordsUncheckedUpdateWithoutVitalSignsInputSchema),
				])
				.optional(),
		})
		.strict()

export default MedicalRecordsUpdateOneRequiredWithoutVitalSignsNestedInputSchema
