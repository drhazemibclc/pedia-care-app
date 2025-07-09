import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PrescriptionCreateWithoutDoctorInputSchema } from './PrescriptionCreateWithoutDoctorInputSchema'
import { PrescriptionUncheckedCreateWithoutDoctorInputSchema } from './PrescriptionUncheckedCreateWithoutDoctorInputSchema'
import { PrescriptionUncheckedUpdateWithoutDoctorInputSchema } from './PrescriptionUncheckedUpdateWithoutDoctorInputSchema'
import { PrescriptionUpdateWithoutDoctorInputSchema } from './PrescriptionUpdateWithoutDoctorInputSchema'
import { PrescriptionWhereUniqueInputSchema } from './PrescriptionWhereUniqueInputSchema'

export const PrescriptionUpsertWithWhereUniqueWithoutDoctorInputSchema: z.ZodType<Prisma.PrescriptionUpsertWithWhereUniqueWithoutDoctorInput> =
	z
		.object({
			where: z.lazy(() => PrescriptionWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => PrescriptionUpdateWithoutDoctorInputSchema),
				z.lazy(() => PrescriptionUncheckedUpdateWithoutDoctorInputSchema),
			]),
			create: z.union([
				z.lazy(() => PrescriptionCreateWithoutDoctorInputSchema),
				z.lazy(() => PrescriptionUncheckedCreateWithoutDoctorInputSchema),
			]),
		})
		.strict()

export default PrescriptionUpsertWithWhereUniqueWithoutDoctorInputSchema
