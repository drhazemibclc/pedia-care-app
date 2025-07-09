import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DoctorCreateWithoutPrescriptionInputSchema } from './DoctorCreateWithoutPrescriptionInputSchema'
import { DoctorUncheckedCreateWithoutPrescriptionInputSchema } from './DoctorUncheckedCreateWithoutPrescriptionInputSchema'
import { DoctorWhereUniqueInputSchema } from './DoctorWhereUniqueInputSchema'

export const DoctorCreateOrConnectWithoutPrescriptionInputSchema: z.ZodType<Prisma.DoctorCreateOrConnectWithoutPrescriptionInput> =
	z
		.object({
			where: z.lazy(() => DoctorWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => DoctorCreateWithoutPrescriptionInputSchema),
				z.lazy(() => DoctorUncheckedCreateWithoutPrescriptionInputSchema),
			]),
		})
		.strict()

export default DoctorCreateOrConnectWithoutPrescriptionInputSchema
