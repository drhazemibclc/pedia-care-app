import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DoctorCreateWithoutPrescriptionInputSchema } from './DoctorCreateWithoutPrescriptionInputSchema'
import { DoctorUncheckedCreateWithoutPrescriptionInputSchema } from './DoctorUncheckedCreateWithoutPrescriptionInputSchema'
import { DoctorUncheckedUpdateWithoutPrescriptionInputSchema } from './DoctorUncheckedUpdateWithoutPrescriptionInputSchema'
import { DoctorUpdateWithoutPrescriptionInputSchema } from './DoctorUpdateWithoutPrescriptionInputSchema'
import { DoctorWhereInputSchema } from './DoctorWhereInputSchema'

export const DoctorUpsertWithoutPrescriptionInputSchema: z.ZodType<Prisma.DoctorUpsertWithoutPrescriptionInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => DoctorUpdateWithoutPrescriptionInputSchema),
				z.lazy(() => DoctorUncheckedUpdateWithoutPrescriptionInputSchema),
			]),
			create: z.union([
				z.lazy(() => DoctorCreateWithoutPrescriptionInputSchema),
				z.lazy(() => DoctorUncheckedCreateWithoutPrescriptionInputSchema),
			]),
			where: z.lazy(() => DoctorWhereInputSchema).optional(),
		})
		.strict()

export default DoctorUpsertWithoutPrescriptionInputSchema
