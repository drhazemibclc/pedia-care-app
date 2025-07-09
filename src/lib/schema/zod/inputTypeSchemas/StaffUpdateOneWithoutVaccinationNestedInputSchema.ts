import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { StaffCreateOrConnectWithoutVaccinationInputSchema } from './StaffCreateOrConnectWithoutVaccinationInputSchema'
import { StaffCreateWithoutVaccinationInputSchema } from './StaffCreateWithoutVaccinationInputSchema'
import { StaffUncheckedCreateWithoutVaccinationInputSchema } from './StaffUncheckedCreateWithoutVaccinationInputSchema'
import { StaffUncheckedUpdateWithoutVaccinationInputSchema } from './StaffUncheckedUpdateWithoutVaccinationInputSchema'
import { StaffUpdateToOneWithWhereWithoutVaccinationInputSchema } from './StaffUpdateToOneWithWhereWithoutVaccinationInputSchema'
import { StaffUpdateWithoutVaccinationInputSchema } from './StaffUpdateWithoutVaccinationInputSchema'
import { StaffUpsertWithoutVaccinationInputSchema } from './StaffUpsertWithoutVaccinationInputSchema'
import { StaffWhereInputSchema } from './StaffWhereInputSchema'
import { StaffWhereUniqueInputSchema } from './StaffWhereUniqueInputSchema'

export const StaffUpdateOneWithoutVaccinationNestedInputSchema: z.ZodType<Prisma.StaffUpdateOneWithoutVaccinationNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => StaffCreateWithoutVaccinationInputSchema),
					z.lazy(() => StaffUncheckedCreateWithoutVaccinationInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => StaffCreateOrConnectWithoutVaccinationInputSchema).optional(),
			upsert: z.lazy(() => StaffUpsertWithoutVaccinationInputSchema).optional(),
			disconnect: z.union([z.boolean(), z.lazy(() => StaffWhereInputSchema)]).optional(),
			delete: z.union([z.boolean(), z.lazy(() => StaffWhereInputSchema)]).optional(),
			connect: z.lazy(() => StaffWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => StaffUpdateToOneWithWhereWithoutVaccinationInputSchema),
					z.lazy(() => StaffUpdateWithoutVaccinationInputSchema),
					z.lazy(() => StaffUncheckedUpdateWithoutVaccinationInputSchema),
				])
				.optional(),
		})
		.strict()

export default StaffUpdateOneWithoutVaccinationNestedInputSchema
