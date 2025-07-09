import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PrescriptionScalarWhereInputSchema } from './PrescriptionScalarWhereInputSchema'
import { PrescriptionUncheckedUpdateManyWithoutDoctorInputSchema } from './PrescriptionUncheckedUpdateManyWithoutDoctorInputSchema'
import { PrescriptionUpdateManyMutationInputSchema } from './PrescriptionUpdateManyMutationInputSchema'

export const PrescriptionUpdateManyWithWhereWithoutDoctorInputSchema: z.ZodType<Prisma.PrescriptionUpdateManyWithWhereWithoutDoctorInput> =
	z
		.object({
			where: z.lazy(() => PrescriptionScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => PrescriptionUpdateManyMutationInputSchema),
				z.lazy(() => PrescriptionUncheckedUpdateManyWithoutDoctorInputSchema),
			]),
		})
		.strict()

export default PrescriptionUpdateManyWithWhereWithoutDoctorInputSchema
