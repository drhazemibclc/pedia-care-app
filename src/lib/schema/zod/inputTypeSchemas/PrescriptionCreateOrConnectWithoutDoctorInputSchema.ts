import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PrescriptionCreateWithoutDoctorInputSchema } from './PrescriptionCreateWithoutDoctorInputSchema'
import { PrescriptionUncheckedCreateWithoutDoctorInputSchema } from './PrescriptionUncheckedCreateWithoutDoctorInputSchema'
import { PrescriptionWhereUniqueInputSchema } from './PrescriptionWhereUniqueInputSchema'

export const PrescriptionCreateOrConnectWithoutDoctorInputSchema: z.ZodType<Prisma.PrescriptionCreateOrConnectWithoutDoctorInput> =
	z
		.object({
			where: z.lazy(() => PrescriptionWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => PrescriptionCreateWithoutDoctorInputSchema),
				z.lazy(() => PrescriptionUncheckedCreateWithoutDoctorInputSchema),
			]),
		})
		.strict()

export default PrescriptionCreateOrConnectWithoutDoctorInputSchema
