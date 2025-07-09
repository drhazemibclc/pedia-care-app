import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PrescriptionCreateManyDoctorInputEnvelopeSchema } from './PrescriptionCreateManyDoctorInputEnvelopeSchema'
import { PrescriptionCreateOrConnectWithoutDoctorInputSchema } from './PrescriptionCreateOrConnectWithoutDoctorInputSchema'
import { PrescriptionCreateWithoutDoctorInputSchema } from './PrescriptionCreateWithoutDoctorInputSchema'
import { PrescriptionUncheckedCreateWithoutDoctorInputSchema } from './PrescriptionUncheckedCreateWithoutDoctorInputSchema'
import { PrescriptionWhereUniqueInputSchema } from './PrescriptionWhereUniqueInputSchema'

export const PrescriptionCreateNestedManyWithoutDoctorInputSchema: z.ZodType<Prisma.PrescriptionCreateNestedManyWithoutDoctorInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => PrescriptionCreateWithoutDoctorInputSchema),
					z.lazy(() => PrescriptionCreateWithoutDoctorInputSchema).array(),
					z.lazy(() => PrescriptionUncheckedCreateWithoutDoctorInputSchema),
					z.lazy(() => PrescriptionUncheckedCreateWithoutDoctorInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => PrescriptionCreateOrConnectWithoutDoctorInputSchema),
					z.lazy(() => PrescriptionCreateOrConnectWithoutDoctorInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => PrescriptionCreateManyDoctorInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => PrescriptionWhereUniqueInputSchema),
					z.lazy(() => PrescriptionWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict()

export default PrescriptionCreateNestedManyWithoutDoctorInputSchema
