import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { WorkingDaysCreateWithoutDoctorInputSchema } from './WorkingDaysCreateWithoutDoctorInputSchema'
import { WorkingDaysUncheckedCreateWithoutDoctorInputSchema } from './WorkingDaysUncheckedCreateWithoutDoctorInputSchema'
import { WorkingDaysUncheckedUpdateWithoutDoctorInputSchema } from './WorkingDaysUncheckedUpdateWithoutDoctorInputSchema'
import { WorkingDaysUpdateWithoutDoctorInputSchema } from './WorkingDaysUpdateWithoutDoctorInputSchema'
import { WorkingDaysWhereUniqueInputSchema } from './WorkingDaysWhereUniqueInputSchema'

export const WorkingDaysUpsertWithWhereUniqueWithoutDoctorInputSchema: z.ZodType<Prisma.WorkingDaysUpsertWithWhereUniqueWithoutDoctorInput> =
	z
		.object({
			where: z.lazy(() => WorkingDaysWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => WorkingDaysUpdateWithoutDoctorInputSchema),
				z.lazy(() => WorkingDaysUncheckedUpdateWithoutDoctorInputSchema),
			]),
			create: z.union([
				z.lazy(() => WorkingDaysCreateWithoutDoctorInputSchema),
				z.lazy(() => WorkingDaysUncheckedCreateWithoutDoctorInputSchema),
			]),
		})
		.strict()

export default WorkingDaysUpsertWithWhereUniqueWithoutDoctorInputSchema
