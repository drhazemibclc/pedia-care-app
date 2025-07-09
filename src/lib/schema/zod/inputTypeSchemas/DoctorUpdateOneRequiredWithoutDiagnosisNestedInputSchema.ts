import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DoctorCreateOrConnectWithoutDiagnosisInputSchema } from './DoctorCreateOrConnectWithoutDiagnosisInputSchema'
import { DoctorCreateWithoutDiagnosisInputSchema } from './DoctorCreateWithoutDiagnosisInputSchema'
import { DoctorUncheckedCreateWithoutDiagnosisInputSchema } from './DoctorUncheckedCreateWithoutDiagnosisInputSchema'
import { DoctorUncheckedUpdateWithoutDiagnosisInputSchema } from './DoctorUncheckedUpdateWithoutDiagnosisInputSchema'
import { DoctorUpdateToOneWithWhereWithoutDiagnosisInputSchema } from './DoctorUpdateToOneWithWhereWithoutDiagnosisInputSchema'
import { DoctorUpdateWithoutDiagnosisInputSchema } from './DoctorUpdateWithoutDiagnosisInputSchema'
import { DoctorUpsertWithoutDiagnosisInputSchema } from './DoctorUpsertWithoutDiagnosisInputSchema'
import { DoctorWhereUniqueInputSchema } from './DoctorWhereUniqueInputSchema'

export const DoctorUpdateOneRequiredWithoutDiagnosisNestedInputSchema: z.ZodType<Prisma.DoctorUpdateOneRequiredWithoutDiagnosisNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => DoctorCreateWithoutDiagnosisInputSchema),
					z.lazy(() => DoctorUncheckedCreateWithoutDiagnosisInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => DoctorCreateOrConnectWithoutDiagnosisInputSchema).optional(),
			upsert: z.lazy(() => DoctorUpsertWithoutDiagnosisInputSchema).optional(),
			connect: z.lazy(() => DoctorWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => DoctorUpdateToOneWithWhereWithoutDiagnosisInputSchema),
					z.lazy(() => DoctorUpdateWithoutDiagnosisInputSchema),
					z.lazy(() => DoctorUncheckedUpdateWithoutDiagnosisInputSchema),
				])
				.optional(),
		})
		.strict()

export default DoctorUpdateOneRequiredWithoutDiagnosisNestedInputSchema
