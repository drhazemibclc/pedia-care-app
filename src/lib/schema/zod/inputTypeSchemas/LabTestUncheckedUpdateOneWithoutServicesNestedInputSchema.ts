import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { LabTestCreateOrConnectWithoutServicesInputSchema } from './LabTestCreateOrConnectWithoutServicesInputSchema'
import { LabTestCreateWithoutServicesInputSchema } from './LabTestCreateWithoutServicesInputSchema'
import { LabTestUncheckedCreateWithoutServicesInputSchema } from './LabTestUncheckedCreateWithoutServicesInputSchema'
import { LabTestUncheckedUpdateWithoutServicesInputSchema } from './LabTestUncheckedUpdateWithoutServicesInputSchema'
import { LabTestUpdateToOneWithWhereWithoutServicesInputSchema } from './LabTestUpdateToOneWithWhereWithoutServicesInputSchema'
import { LabTestUpdateWithoutServicesInputSchema } from './LabTestUpdateWithoutServicesInputSchema'
import { LabTestUpsertWithoutServicesInputSchema } from './LabTestUpsertWithoutServicesInputSchema'
import { LabTestWhereInputSchema } from './LabTestWhereInputSchema'
import { LabTestWhereUniqueInputSchema } from './LabTestWhereUniqueInputSchema'

export const LabTestUncheckedUpdateOneWithoutServicesNestedInputSchema: z.ZodType<Prisma.LabTestUncheckedUpdateOneWithoutServicesNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => LabTestCreateWithoutServicesInputSchema),
					z.lazy(() => LabTestUncheckedCreateWithoutServicesInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => LabTestCreateOrConnectWithoutServicesInputSchema).optional(),
			upsert: z.lazy(() => LabTestUpsertWithoutServicesInputSchema).optional(),
			disconnect: z.union([z.boolean(), z.lazy(() => LabTestWhereInputSchema)]).optional(),
			delete: z.union([z.boolean(), z.lazy(() => LabTestWhereInputSchema)]).optional(),
			connect: z.lazy(() => LabTestWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => LabTestUpdateToOneWithWhereWithoutServicesInputSchema),
					z.lazy(() => LabTestUpdateWithoutServicesInputSchema),
					z.lazy(() => LabTestUncheckedUpdateWithoutServicesInputSchema),
				])
				.optional(),
		})
		.strict()

export default LabTestUncheckedUpdateOneWithoutServicesNestedInputSchema
