import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DoctorUncheckedUpdateWithoutDiagnosisInputSchema } from './DoctorUncheckedUpdateWithoutDiagnosisInputSchema'
import { DoctorUpdateWithoutDiagnosisInputSchema } from './DoctorUpdateWithoutDiagnosisInputSchema'
import { DoctorWhereInputSchema } from './DoctorWhereInputSchema'

export const DoctorUpdateToOneWithWhereWithoutDiagnosisInputSchema: z.ZodType<Prisma.DoctorUpdateToOneWithWhereWithoutDiagnosisInput> =
	z
		.object({
			where: z.lazy(() => DoctorWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => DoctorUpdateWithoutDiagnosisInputSchema),
				z.lazy(() => DoctorUncheckedUpdateWithoutDiagnosisInputSchema),
			]),
		})
		.strict()

export default DoctorUpdateToOneWithWhereWithoutDiagnosisInputSchema
