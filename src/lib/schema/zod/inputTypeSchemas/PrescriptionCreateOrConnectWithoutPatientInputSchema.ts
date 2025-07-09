import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PrescriptionCreateWithoutPatientInputSchema } from './PrescriptionCreateWithoutPatientInputSchema'
import { PrescriptionUncheckedCreateWithoutPatientInputSchema } from './PrescriptionUncheckedCreateWithoutPatientInputSchema'
import { PrescriptionWhereUniqueInputSchema } from './PrescriptionWhereUniqueInputSchema'

export const PrescriptionCreateOrConnectWithoutPatientInputSchema: z.ZodType<Prisma.PrescriptionCreateOrConnectWithoutPatientInput> =
	z
		.object({
			where: z.lazy(() => PrescriptionWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => PrescriptionCreateWithoutPatientInputSchema),
				z.lazy(() => PrescriptionUncheckedCreateWithoutPatientInputSchema),
			]),
		})
		.strict()

export default PrescriptionCreateOrConnectWithoutPatientInputSchema
