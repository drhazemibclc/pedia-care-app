import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { LabTestCreateWithoutServicesInputSchema } from './LabTestCreateWithoutServicesInputSchema'
import { LabTestUncheckedCreateWithoutServicesInputSchema } from './LabTestUncheckedCreateWithoutServicesInputSchema'
import { LabTestWhereUniqueInputSchema } from './LabTestWhereUniqueInputSchema'

export const LabTestCreateOrConnectWithoutServicesInputSchema: z.ZodType<Prisma.LabTestCreateOrConnectWithoutServicesInput> =
	z
		.object({
			where: z.lazy(() => LabTestWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => LabTestCreateWithoutServicesInputSchema),
				z.lazy(() => LabTestUncheckedCreateWithoutServicesInputSchema),
			]),
		})
		.strict()

export default LabTestCreateOrConnectWithoutServicesInputSchema
