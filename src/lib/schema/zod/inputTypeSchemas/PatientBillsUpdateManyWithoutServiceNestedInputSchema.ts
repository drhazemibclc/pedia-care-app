import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientBillsCreateManyServiceInputEnvelopeSchema } from './PatientBillsCreateManyServiceInputEnvelopeSchema'
import { PatientBillsCreateOrConnectWithoutServiceInputSchema } from './PatientBillsCreateOrConnectWithoutServiceInputSchema'
import { PatientBillsCreateWithoutServiceInputSchema } from './PatientBillsCreateWithoutServiceInputSchema'
import { PatientBillsScalarWhereInputSchema } from './PatientBillsScalarWhereInputSchema'
import { PatientBillsUncheckedCreateWithoutServiceInputSchema } from './PatientBillsUncheckedCreateWithoutServiceInputSchema'
import { PatientBillsUpdateManyWithWhereWithoutServiceInputSchema } from './PatientBillsUpdateManyWithWhereWithoutServiceInputSchema'
import { PatientBillsUpdateWithWhereUniqueWithoutServiceInputSchema } from './PatientBillsUpdateWithWhereUniqueWithoutServiceInputSchema'
import { PatientBillsUpsertWithWhereUniqueWithoutServiceInputSchema } from './PatientBillsUpsertWithWhereUniqueWithoutServiceInputSchema'
import { PatientBillsWhereUniqueInputSchema } from './PatientBillsWhereUniqueInputSchema'

export const PatientBillsUpdateManyWithoutServiceNestedInputSchema: z.ZodType<Prisma.PatientBillsUpdateManyWithoutServiceNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => PatientBillsCreateWithoutServiceInputSchema),
					z.lazy(() => PatientBillsCreateWithoutServiceInputSchema).array(),
					z.lazy(() => PatientBillsUncheckedCreateWithoutServiceInputSchema),
					z.lazy(() => PatientBillsUncheckedCreateWithoutServiceInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => PatientBillsCreateOrConnectWithoutServiceInputSchema),
					z.lazy(() => PatientBillsCreateOrConnectWithoutServiceInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => PatientBillsUpsertWithWhereUniqueWithoutServiceInputSchema),
					z.lazy(() => PatientBillsUpsertWithWhereUniqueWithoutServiceInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => PatientBillsCreateManyServiceInputEnvelopeSchema).optional(),
			set: z
				.union([
					z.lazy(() => PatientBillsWhereUniqueInputSchema),
					z.lazy(() => PatientBillsWhereUniqueInputSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => PatientBillsWhereUniqueInputSchema),
					z.lazy(() => PatientBillsWhereUniqueInputSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => PatientBillsWhereUniqueInputSchema),
					z.lazy(() => PatientBillsWhereUniqueInputSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => PatientBillsWhereUniqueInputSchema),
					z.lazy(() => PatientBillsWhereUniqueInputSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(() => PatientBillsUpdateWithWhereUniqueWithoutServiceInputSchema),
					z.lazy(() => PatientBillsUpdateWithWhereUniqueWithoutServiceInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => PatientBillsUpdateManyWithWhereWithoutServiceInputSchema),
					z.lazy(() => PatientBillsUpdateManyWithWhereWithoutServiceInputSchema).array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => PatientBillsScalarWhereInputSchema),
					z.lazy(() => PatientBillsScalarWhereInputSchema).array(),
				])
				.optional(),
		})
		.strict()

export default PatientBillsUpdateManyWithoutServiceNestedInputSchema
