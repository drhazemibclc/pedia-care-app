import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { LabTestCreateWithoutServicesInputSchema } from './LabTestCreateWithoutServicesInputSchema'
import { LabTestUncheckedCreateWithoutServicesInputSchema } from './LabTestUncheckedCreateWithoutServicesInputSchema'
import { LabTestUncheckedUpdateWithoutServicesInputSchema } from './LabTestUncheckedUpdateWithoutServicesInputSchema'
import { LabTestUpdateWithoutServicesInputSchema } from './LabTestUpdateWithoutServicesInputSchema'
import { LabTestWhereInputSchema } from './LabTestWhereInputSchema'

export const LabTestUpsertWithoutServicesInputSchema: z.ZodType<Prisma.LabTestUpsertWithoutServicesInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => LabTestUpdateWithoutServicesInputSchema),
				z.lazy(() => LabTestUncheckedUpdateWithoutServicesInputSchema),
			]),
			create: z.union([
				z.lazy(() => LabTestCreateWithoutServicesInputSchema),
				z.lazy(() => LabTestUncheckedCreateWithoutServicesInputSchema),
			]),
			where: z.lazy(() => LabTestWhereInputSchema).optional(),
		})
		.strict()

export default LabTestUpsertWithoutServicesInputSchema
