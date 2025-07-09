import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { StaffScalarWhereInputSchema } from './StaffScalarWhereInputSchema'
import { StaffUncheckedUpdateManyWithoutUserInputSchema } from './StaffUncheckedUpdateManyWithoutUserInputSchema'
import { StaffUpdateManyMutationInputSchema } from './StaffUpdateManyMutationInputSchema'

export const StaffUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.StaffUpdateManyWithWhereWithoutUserInput> =
	z
		.object({
			where: z.lazy(() => StaffScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => StaffUpdateManyMutationInputSchema),
				z.lazy(() => StaffUncheckedUpdateManyWithoutUserInputSchema),
			]),
		})
		.strict()

export default StaffUpdateManyWithWhereWithoutUserInputSchema
