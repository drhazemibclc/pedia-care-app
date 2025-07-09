import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { LabTestUncheckedUpdateWithoutServicesInputSchema } from './LabTestUncheckedUpdateWithoutServicesInputSchema'
import { LabTestUpdateWithoutServicesInputSchema } from './LabTestUpdateWithoutServicesInputSchema'
import { LabTestWhereInputSchema } from './LabTestWhereInputSchema'

export const LabTestUpdateToOneWithWhereWithoutServicesInputSchema: z.ZodType<Prisma.LabTestUpdateToOneWithWhereWithoutServicesInput> =
	z
		.object({
			where: z.lazy(() => LabTestWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => LabTestUpdateWithoutServicesInputSchema),
				z.lazy(() => LabTestUncheckedUpdateWithoutServicesInputSchema),
			]),
		})
		.strict()

export default LabTestUpdateToOneWithWhereWithoutServicesInputSchema
