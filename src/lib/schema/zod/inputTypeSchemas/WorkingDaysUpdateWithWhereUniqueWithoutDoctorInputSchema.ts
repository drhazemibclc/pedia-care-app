import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { WorkingDaysUncheckedUpdateWithoutDoctorInputSchema } from './WorkingDaysUncheckedUpdateWithoutDoctorInputSchema'
import { WorkingDaysUpdateWithoutDoctorInputSchema } from './WorkingDaysUpdateWithoutDoctorInputSchema'
import { WorkingDaysWhereUniqueInputSchema } from './WorkingDaysWhereUniqueInputSchema'

export const WorkingDaysUpdateWithWhereUniqueWithoutDoctorInputSchema: z.ZodType<Prisma.WorkingDaysUpdateWithWhereUniqueWithoutDoctorInput> =
	z
		.object({
			where: z.lazy(() => WorkingDaysWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => WorkingDaysUpdateWithoutDoctorInputSchema),
				z.lazy(() => WorkingDaysUncheckedUpdateWithoutDoctorInputSchema),
			]),
		})
		.strict()

export default WorkingDaysUpdateWithWhereUniqueWithoutDoctorInputSchema
