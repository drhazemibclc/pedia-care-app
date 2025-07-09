import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DoctorUncheckedUpdateWithoutPrescriptionInputSchema } from './DoctorUncheckedUpdateWithoutPrescriptionInputSchema'
import { DoctorUpdateWithoutPrescriptionInputSchema } from './DoctorUpdateWithoutPrescriptionInputSchema'
import { DoctorWhereInputSchema } from './DoctorWhereInputSchema'

export const DoctorUpdateToOneWithWhereWithoutPrescriptionInputSchema: z.ZodType<Prisma.DoctorUpdateToOneWithWhereWithoutPrescriptionInput> =
	z
		.object({
			where: z.lazy(() => DoctorWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => DoctorUpdateWithoutPrescriptionInputSchema),
				z.lazy(() => DoctorUncheckedUpdateWithoutPrescriptionInputSchema),
			]),
		})
		.strict()

export default DoctorUpdateToOneWithWhereWithoutPrescriptionInputSchema
