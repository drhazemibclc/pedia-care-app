import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { WorkingDaysCreateManyDoctorInputEnvelopeSchema } from './WorkingDaysCreateManyDoctorInputEnvelopeSchema'
import { WorkingDaysCreateOrConnectWithoutDoctorInputSchema } from './WorkingDaysCreateOrConnectWithoutDoctorInputSchema'
import { WorkingDaysCreateWithoutDoctorInputSchema } from './WorkingDaysCreateWithoutDoctorInputSchema'
import { WorkingDaysScalarWhereInputSchema } from './WorkingDaysScalarWhereInputSchema'
import { WorkingDaysUncheckedCreateWithoutDoctorInputSchema } from './WorkingDaysUncheckedCreateWithoutDoctorInputSchema'
import { WorkingDaysUpdateManyWithWhereWithoutDoctorInputSchema } from './WorkingDaysUpdateManyWithWhereWithoutDoctorInputSchema'
import { WorkingDaysUpdateWithWhereUniqueWithoutDoctorInputSchema } from './WorkingDaysUpdateWithWhereUniqueWithoutDoctorInputSchema'
import { WorkingDaysUpsertWithWhereUniqueWithoutDoctorInputSchema } from './WorkingDaysUpsertWithWhereUniqueWithoutDoctorInputSchema'
import { WorkingDaysWhereUniqueInputSchema } from './WorkingDaysWhereUniqueInputSchema'

export const WorkingDaysUncheckedUpdateManyWithoutDoctorNestedInputSchema: z.ZodType<Prisma.WorkingDaysUncheckedUpdateManyWithoutDoctorNestedInput> =
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
			upsert: z
				.union([
					z.lazy(() => WorkingDaysUpsertWithWhereUniqueWithoutDoctorInputSchema),
					z.lazy(() => WorkingDaysUpsertWithWhereUniqueWithoutDoctorInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => WorkingDaysCreateManyDoctorInputEnvelopeSchema).optional(),
			set: z
				.union([
					z.lazy(() => WorkingDaysWhereUniqueInputSchema),
					z.lazy(() => WorkingDaysWhereUniqueInputSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => WorkingDaysWhereUniqueInputSchema),
					z.lazy(() => WorkingDaysWhereUniqueInputSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => WorkingDaysWhereUniqueInputSchema),
					z.lazy(() => WorkingDaysWhereUniqueInputSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => WorkingDaysWhereUniqueInputSchema),
					z.lazy(() => WorkingDaysWhereUniqueInputSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(() => WorkingDaysUpdateWithWhereUniqueWithoutDoctorInputSchema),
					z.lazy(() => WorkingDaysUpdateWithWhereUniqueWithoutDoctorInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => WorkingDaysUpdateManyWithWhereWithoutDoctorInputSchema),
					z.lazy(() => WorkingDaysUpdateManyWithWhereWithoutDoctorInputSchema).array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => WorkingDaysScalarWhereInputSchema),
					z.lazy(() => WorkingDaysScalarWhereInputSchema).array(),
				])
				.optional(),
		})
		.strict()

export default WorkingDaysUncheckedUpdateManyWithoutDoctorNestedInputSchema
