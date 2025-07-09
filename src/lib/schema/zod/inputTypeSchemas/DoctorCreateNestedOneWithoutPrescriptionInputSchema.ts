import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DoctorCreateOrConnectWithoutPrescriptionInputSchema } from './DoctorCreateOrConnectWithoutPrescriptionInputSchema'
import { DoctorCreateWithoutPrescriptionInputSchema } from './DoctorCreateWithoutPrescriptionInputSchema'
import { DoctorUncheckedCreateWithoutPrescriptionInputSchema } from './DoctorUncheckedCreateWithoutPrescriptionInputSchema'
import { DoctorWhereUniqueInputSchema } from './DoctorWhereUniqueInputSchema'

export const DoctorCreateNestedOneWithoutPrescriptionInputSchema: z.ZodType<Prisma.DoctorCreateNestedOneWithoutPrescriptionInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => DoctorCreateWithoutPrescriptionInputSchema),
					z.lazy(() => DoctorUncheckedCreateWithoutPrescriptionInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => DoctorCreateOrConnectWithoutPrescriptionInputSchema).optional(),
			connect: z.lazy(() => DoctorWhereUniqueInputSchema).optional(),
		})
		.strict()

export default DoctorCreateNestedOneWithoutPrescriptionInputSchema
