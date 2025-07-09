import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PatientBillsCreateManyServiceInputEnvelopeSchema } from './PatientBillsCreateManyServiceInputEnvelopeSchema'
import { PatientBillsCreateOrConnectWithoutServiceInputSchema } from './PatientBillsCreateOrConnectWithoutServiceInputSchema'
import { PatientBillsCreateWithoutServiceInputSchema } from './PatientBillsCreateWithoutServiceInputSchema'
import { PatientBillsUncheckedCreateWithoutServiceInputSchema } from './PatientBillsUncheckedCreateWithoutServiceInputSchema'
import { PatientBillsWhereUniqueInputSchema } from './PatientBillsWhereUniqueInputSchema'

export const PatientBillsUncheckedCreateNestedManyWithoutServiceInputSchema: z.ZodType<Prisma.PatientBillsUncheckedCreateNestedManyWithoutServiceInput> =
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
			createMany: z.lazy(() => PatientBillsCreateManyServiceInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => PatientBillsWhereUniqueInputSchema),
					z.lazy(() => PatientBillsWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict()

export default PatientBillsUncheckedCreateNestedManyWithoutServiceInputSchema
