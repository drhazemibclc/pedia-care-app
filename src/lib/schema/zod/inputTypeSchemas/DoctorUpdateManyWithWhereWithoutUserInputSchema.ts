import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DoctorScalarWhereInputSchema } from './DoctorScalarWhereInputSchema'
import { DoctorUncheckedUpdateManyWithoutUserInputSchema } from './DoctorUncheckedUpdateManyWithoutUserInputSchema'
import { DoctorUpdateManyMutationInputSchema } from './DoctorUpdateManyMutationInputSchema'

export const DoctorUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.DoctorUpdateManyWithWhereWithoutUserInput> =
	z
		.object({
			where: z.lazy(() => DoctorScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => DoctorUpdateManyMutationInputSchema),
				z.lazy(() => DoctorUncheckedUpdateManyWithoutUserInputSchema),
			]),
		})
		.strict()

export default DoctorUpdateManyWithWhereWithoutUserInputSchema
