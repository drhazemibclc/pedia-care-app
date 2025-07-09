import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { StaffCreateOrConnectWithoutVaccinationInputSchema } from './StaffCreateOrConnectWithoutVaccinationInputSchema'
import { StaffCreateWithoutVaccinationInputSchema } from './StaffCreateWithoutVaccinationInputSchema'
import { StaffUncheckedCreateWithoutVaccinationInputSchema } from './StaffUncheckedCreateWithoutVaccinationInputSchema'
import { StaffWhereUniqueInputSchema } from './StaffWhereUniqueInputSchema'

export const StaffCreateNestedOneWithoutVaccinationInputSchema: z.ZodType<Prisma.StaffCreateNestedOneWithoutVaccinationInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => StaffCreateWithoutVaccinationInputSchema),
					z.lazy(() => StaffUncheckedCreateWithoutVaccinationInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => StaffCreateOrConnectWithoutVaccinationInputSchema).optional(),
			connect: z.lazy(() => StaffWhereUniqueInputSchema).optional(),
		})
		.strict()

export default StaffCreateNestedOneWithoutVaccinationInputSchema
