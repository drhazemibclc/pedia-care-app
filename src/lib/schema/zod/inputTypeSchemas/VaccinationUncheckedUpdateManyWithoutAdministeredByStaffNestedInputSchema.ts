import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { VaccinationCreateManyAdministeredByStaffInputEnvelopeSchema } from './VaccinationCreateManyAdministeredByStaffInputEnvelopeSchema'
import { VaccinationCreateOrConnectWithoutAdministeredByStaffInputSchema } from './VaccinationCreateOrConnectWithoutAdministeredByStaffInputSchema'
import { VaccinationCreateWithoutAdministeredByStaffInputSchema } from './VaccinationCreateWithoutAdministeredByStaffInputSchema'
import { VaccinationScalarWhereInputSchema } from './VaccinationScalarWhereInputSchema'
import { VaccinationUncheckedCreateWithoutAdministeredByStaffInputSchema } from './VaccinationUncheckedCreateWithoutAdministeredByStaffInputSchema'
import { VaccinationUpdateManyWithWhereWithoutAdministeredByStaffInputSchema } from './VaccinationUpdateManyWithWhereWithoutAdministeredByStaffInputSchema'
import { VaccinationUpdateWithWhereUniqueWithoutAdministeredByStaffInputSchema } from './VaccinationUpdateWithWhereUniqueWithoutAdministeredByStaffInputSchema'
import { VaccinationUpsertWithWhereUniqueWithoutAdministeredByStaffInputSchema } from './VaccinationUpsertWithWhereUniqueWithoutAdministeredByStaffInputSchema'
import { VaccinationWhereUniqueInputSchema } from './VaccinationWhereUniqueInputSchema'

export const VaccinationUncheckedUpdateManyWithoutAdministeredByStaffNestedInputSchema: z.ZodType<Prisma.VaccinationUncheckedUpdateManyWithoutAdministeredByStaffNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => VaccinationCreateWithoutAdministeredByStaffInputSchema),
					z.lazy(() => VaccinationCreateWithoutAdministeredByStaffInputSchema).array(),
					z.lazy(() => VaccinationUncheckedCreateWithoutAdministeredByStaffInputSchema),
					z.lazy(() => VaccinationUncheckedCreateWithoutAdministeredByStaffInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => VaccinationCreateOrConnectWithoutAdministeredByStaffInputSchema),
					z.lazy(() => VaccinationCreateOrConnectWithoutAdministeredByStaffInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => VaccinationUpsertWithWhereUniqueWithoutAdministeredByStaffInputSchema),
					z
						.lazy(() => VaccinationUpsertWithWhereUniqueWithoutAdministeredByStaffInputSchema)
						.array(),
				])
				.optional(),
			createMany: z
				.lazy(() => VaccinationCreateManyAdministeredByStaffInputEnvelopeSchema)
				.optional(),
			set: z
				.union([
					z.lazy(() => VaccinationWhereUniqueInputSchema),
					z.lazy(() => VaccinationWhereUniqueInputSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => VaccinationWhereUniqueInputSchema),
					z.lazy(() => VaccinationWhereUniqueInputSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => VaccinationWhereUniqueInputSchema),
					z.lazy(() => VaccinationWhereUniqueInputSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => VaccinationWhereUniqueInputSchema),
					z.lazy(() => VaccinationWhereUniqueInputSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(() => VaccinationUpdateWithWhereUniqueWithoutAdministeredByStaffInputSchema),
					z
						.lazy(() => VaccinationUpdateWithWhereUniqueWithoutAdministeredByStaffInputSchema)
						.array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => VaccinationUpdateManyWithWhereWithoutAdministeredByStaffInputSchema),
					z.lazy(() => VaccinationUpdateManyWithWhereWithoutAdministeredByStaffInputSchema).array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => VaccinationScalarWhereInputSchema),
					z.lazy(() => VaccinationScalarWhereInputSchema).array(),
				])
				.optional(),
		})
		.strict()

export default VaccinationUncheckedUpdateManyWithoutAdministeredByStaffNestedInputSchema
