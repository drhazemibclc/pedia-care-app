import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { WorkingDaysScalarWhereInputSchema } from './WorkingDaysScalarWhereInputSchema'
import { WorkingDaysUncheckedUpdateManyWithoutDoctorInputSchema } from './WorkingDaysUncheckedUpdateManyWithoutDoctorInputSchema'
import { WorkingDaysUpdateManyMutationInputSchema } from './WorkingDaysUpdateManyMutationInputSchema'

export const WorkingDaysUpdateManyWithWhereWithoutDoctorInputSchema: z.ZodType<Prisma.WorkingDaysUpdateManyWithWhereWithoutDoctorInput> =
	z
		.object({
			where: z.lazy(() => WorkingDaysScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => WorkingDaysUpdateManyMutationInputSchema),
				z.lazy(() => WorkingDaysUncheckedUpdateManyWithoutDoctorInputSchema),
			]),
		})
		.strict()

export default WorkingDaysUpdateManyWithWhereWithoutDoctorInputSchema
