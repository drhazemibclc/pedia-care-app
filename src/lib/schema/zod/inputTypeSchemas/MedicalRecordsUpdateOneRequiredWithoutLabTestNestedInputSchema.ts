import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { MedicalRecordsCreateOrConnectWithoutLabTestInputSchema } from './MedicalRecordsCreateOrConnectWithoutLabTestInputSchema'
import { MedicalRecordsCreateWithoutLabTestInputSchema } from './MedicalRecordsCreateWithoutLabTestInputSchema'
import { MedicalRecordsUncheckedCreateWithoutLabTestInputSchema } from './MedicalRecordsUncheckedCreateWithoutLabTestInputSchema'
import { MedicalRecordsUncheckedUpdateWithoutLabTestInputSchema } from './MedicalRecordsUncheckedUpdateWithoutLabTestInputSchema'
import { MedicalRecordsUpdateToOneWithWhereWithoutLabTestInputSchema } from './MedicalRecordsUpdateToOneWithWhereWithoutLabTestInputSchema'
import { MedicalRecordsUpdateWithoutLabTestInputSchema } from './MedicalRecordsUpdateWithoutLabTestInputSchema'
import { MedicalRecordsUpsertWithoutLabTestInputSchema } from './MedicalRecordsUpsertWithoutLabTestInputSchema'
import { MedicalRecordsWhereUniqueInputSchema } from './MedicalRecordsWhereUniqueInputSchema'

export const MedicalRecordsUpdateOneRequiredWithoutLabTestNestedInputSchema: z.ZodType<Prisma.MedicalRecordsUpdateOneRequiredWithoutLabTestNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => MedicalRecordsCreateWithoutLabTestInputSchema),
					z.lazy(() => MedicalRecordsUncheckedCreateWithoutLabTestInputSchema),
				])
				.optional(),
			connectOrCreate: z
				.lazy(() => MedicalRecordsCreateOrConnectWithoutLabTestInputSchema)
				.optional(),
			upsert: z.lazy(() => MedicalRecordsUpsertWithoutLabTestInputSchema).optional(),
			connect: z.lazy(() => MedicalRecordsWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => MedicalRecordsUpdateToOneWithWhereWithoutLabTestInputSchema),
					z.lazy(() => MedicalRecordsUpdateWithoutLabTestInputSchema),
					z.lazy(() => MedicalRecordsUncheckedUpdateWithoutLabTestInputSchema),
				])
				.optional(),
		})
		.strict()

export default MedicalRecordsUpdateOneRequiredWithoutLabTestNestedInputSchema
