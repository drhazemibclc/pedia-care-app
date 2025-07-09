import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { WorkingDaysCreateWithoutDoctorInputSchema } from './WorkingDaysCreateWithoutDoctorInputSchema'
import { WorkingDaysUncheckedCreateWithoutDoctorInputSchema } from './WorkingDaysUncheckedCreateWithoutDoctorInputSchema'
import { WorkingDaysWhereUniqueInputSchema } from './WorkingDaysWhereUniqueInputSchema'

export const WorkingDaysCreateOrConnectWithoutDoctorInputSchema: z.ZodType<Prisma.WorkingDaysCreateOrConnectWithoutDoctorInput> =
	z
		.object({
			where: z.lazy(() => WorkingDaysWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => WorkingDaysCreateWithoutDoctorInputSchema),
				z.lazy(() => WorkingDaysUncheckedCreateWithoutDoctorInputSchema),
			]),
		})
		.strict()

export default WorkingDaysCreateOrConnectWithoutDoctorInputSchema
