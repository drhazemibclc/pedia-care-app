import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { VaccinationCreateManyAdministeredByStaffInputEnvelopeSchema } from './VaccinationCreateManyAdministeredByStaffInputEnvelopeSchema'
import { VaccinationCreateOrConnectWithoutAdministeredByStaffInputSchema } from './VaccinationCreateOrConnectWithoutAdministeredByStaffInputSchema'
import { VaccinationCreateWithoutAdministeredByStaffInputSchema } from './VaccinationCreateWithoutAdministeredByStaffInputSchema'
import { VaccinationUncheckedCreateWithoutAdministeredByStaffInputSchema } from './VaccinationUncheckedCreateWithoutAdministeredByStaffInputSchema'
import { VaccinationWhereUniqueInputSchema } from './VaccinationWhereUniqueInputSchema'

export const VaccinationCreateNestedManyWithoutAdministeredByStaffInputSchema: z.ZodType<Prisma.VaccinationCreateNestedManyWithoutAdministeredByStaffInput> =
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
			createMany: z
				.lazy(() => VaccinationCreateManyAdministeredByStaffInputEnvelopeSchema)
				.optional(),
			connect: z
				.union([
					z.lazy(() => VaccinationWhereUniqueInputSchema),
					z.lazy(() => VaccinationWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict()

export default VaccinationCreateNestedManyWithoutAdministeredByStaffInputSchema
