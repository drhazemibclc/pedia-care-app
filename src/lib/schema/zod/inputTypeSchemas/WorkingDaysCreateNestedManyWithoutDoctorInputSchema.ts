import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { WorkingDaysCreateManyDoctorInputEnvelopeSchema } from './WorkingDaysCreateManyDoctorInputEnvelopeSchema'
import { WorkingDaysCreateOrConnectWithoutDoctorInputSchema } from './WorkingDaysCreateOrConnectWithoutDoctorInputSchema'
import { WorkingDaysCreateWithoutDoctorInputSchema } from './WorkingDaysCreateWithoutDoctorInputSchema'
import { WorkingDaysUncheckedCreateWithoutDoctorInputSchema } from './WorkingDaysUncheckedCreateWithoutDoctorInputSchema'
import { WorkingDaysWhereUniqueInputSchema } from './WorkingDaysWhereUniqueInputSchema'

export const WorkingDaysCreateNestedManyWithoutDoctorInputSchema: z.ZodType<Prisma.WorkingDaysCreateNestedManyWithoutDoctorInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => WorkingDaysCreateWithoutDoctorInputSchema),
					z.lazy(() => WorkingDaysCreateWithoutDoctorInputSchema).array(),
					z.lazy(() => WorkingDaysUncheckedCreateWithoutDoctorInputSchema),
					z.lazy(() => WorkingDaysUncheckedCreateWithoutDoctorInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => WorkingDaysCreateOrConnectWithoutDoctorInputSchema),
					z.lazy(() => WorkingDaysCreateOrConnectWithoutDoctorInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => WorkingDaysCreateManyDoctorInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => WorkingDaysWhereUniqueInputSchema),
					z.lazy(() => WorkingDaysWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict()

export default WorkingDaysCreateNestedManyWithoutDoctorInputSchema
