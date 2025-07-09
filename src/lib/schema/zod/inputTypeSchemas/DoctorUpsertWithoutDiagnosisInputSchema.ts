import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DoctorCreateWithoutDiagnosisInputSchema } from './DoctorCreateWithoutDiagnosisInputSchema'
import { DoctorUncheckedCreateWithoutDiagnosisInputSchema } from './DoctorUncheckedCreateWithoutDiagnosisInputSchema'
import { DoctorUncheckedUpdateWithoutDiagnosisInputSchema } from './DoctorUncheckedUpdateWithoutDiagnosisInputSchema'
import { DoctorUpdateWithoutDiagnosisInputSchema } from './DoctorUpdateWithoutDiagnosisInputSchema'
import { DoctorWhereInputSchema } from './DoctorWhereInputSchema'

export const DoctorUpsertWithoutDiagnosisInputSchema: z.ZodType<Prisma.DoctorUpsertWithoutDiagnosisInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => DoctorUpdateWithoutDiagnosisInputSchema),
				z.lazy(() => DoctorUncheckedUpdateWithoutDiagnosisInputSchema),
			]),
			create: z.union([
				z.lazy(() => DoctorCreateWithoutDiagnosisInputSchema),
				z.lazy(() => DoctorUncheckedCreateWithoutDiagnosisInputSchema),
			]),
			where: z.lazy(() => DoctorWhereInputSchema).optional(),
		})
		.strict()

export default DoctorUpsertWithoutDiagnosisInputSchema
