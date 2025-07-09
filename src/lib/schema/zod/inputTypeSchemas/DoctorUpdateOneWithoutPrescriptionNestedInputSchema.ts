import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DoctorCreateOrConnectWithoutPrescriptionInputSchema } from './DoctorCreateOrConnectWithoutPrescriptionInputSchema'
import { DoctorCreateWithoutPrescriptionInputSchema } from './DoctorCreateWithoutPrescriptionInputSchema'
import { DoctorUncheckedCreateWithoutPrescriptionInputSchema } from './DoctorUncheckedCreateWithoutPrescriptionInputSchema'
import { DoctorUncheckedUpdateWithoutPrescriptionInputSchema } from './DoctorUncheckedUpdateWithoutPrescriptionInputSchema'
import { DoctorUpdateToOneWithWhereWithoutPrescriptionInputSchema } from './DoctorUpdateToOneWithWhereWithoutPrescriptionInputSchema'
import { DoctorUpdateWithoutPrescriptionInputSchema } from './DoctorUpdateWithoutPrescriptionInputSchema'
import { DoctorUpsertWithoutPrescriptionInputSchema } from './DoctorUpsertWithoutPrescriptionInputSchema'
import { DoctorWhereInputSchema } from './DoctorWhereInputSchema'
import { DoctorWhereUniqueInputSchema } from './DoctorWhereUniqueInputSchema'

export const DoctorUpdateOneWithoutPrescriptionNestedInputSchema: z.ZodType<Prisma.DoctorUpdateOneWithoutPrescriptionNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => DoctorCreateWithoutPrescriptionInputSchema),
					z.lazy(() => DoctorUncheckedCreateWithoutPrescriptionInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => DoctorCreateOrConnectWithoutPrescriptionInputSchema).optional(),
			upsert: z.lazy(() => DoctorUpsertWithoutPrescriptionInputSchema).optional(),
			disconnect: z.union([z.boolean(), z.lazy(() => DoctorWhereInputSchema)]).optional(),
			delete: z.union([z.boolean(), z.lazy(() => DoctorWhereInputSchema)]).optional(),
			connect: z.lazy(() => DoctorWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => DoctorUpdateToOneWithWhereWithoutPrescriptionInputSchema),
					z.lazy(() => DoctorUpdateWithoutPrescriptionInputSchema),
					z.lazy(() => DoctorUncheckedUpdateWithoutPrescriptionInputSchema),
				])
				.optional(),
		})
		.strict()

export default DoctorUpdateOneWithoutPrescriptionNestedInputSchema
