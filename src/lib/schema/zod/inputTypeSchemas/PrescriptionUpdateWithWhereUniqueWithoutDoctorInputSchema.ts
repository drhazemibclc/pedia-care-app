import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PrescriptionUncheckedUpdateWithoutDoctorInputSchema } from './PrescriptionUncheckedUpdateWithoutDoctorInputSchema'
import { PrescriptionUpdateWithoutDoctorInputSchema } from './PrescriptionUpdateWithoutDoctorInputSchema'
import { PrescriptionWhereUniqueInputSchema } from './PrescriptionWhereUniqueInputSchema'

export const PrescriptionUpdateWithWhereUniqueWithoutDoctorInputSchema: z.ZodType<Prisma.PrescriptionUpdateWithWhereUniqueWithoutDoctorInput> =
	z
		.object({
			where: z.lazy(() => PrescriptionWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => PrescriptionUpdateWithoutDoctorInputSchema),
				z.lazy(() => PrescriptionUncheckedUpdateWithoutDoctorInputSchema),
			]),
		})
		.strict()

export default PrescriptionUpdateWithWhereUniqueWithoutDoctorInputSchema
