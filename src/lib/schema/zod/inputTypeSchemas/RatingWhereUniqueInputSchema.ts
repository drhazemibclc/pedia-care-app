import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { DoctorScalarRelationFilterSchema } from './DoctorScalarRelationFilterSchema'
import { DoctorWhereInputSchema } from './DoctorWhereInputSchema'
import { IntFilterSchema } from './IntFilterSchema'
import { PatientScalarRelationFilterSchema } from './PatientScalarRelationFilterSchema'
import { PatientWhereInputSchema } from './PatientWhereInputSchema'
import { RatingWhereInputSchema } from './RatingWhereInputSchema'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'

export const RatingWhereUniqueInputSchema: z.ZodType<Prisma.RatingWhereUniqueInput> = z
	.object({
		id: z.number().int(),
	})
	.and(
		z
			.object({
				id: z.number().int().optional(),
				AND: z
					.union([
						z.lazy(() => RatingWhereInputSchema),
						z.lazy(() => RatingWhereInputSchema).array(),
					])
					.optional(),
				OR: z
					.lazy(() => RatingWhereInputSchema)
					.array()
					.optional(),
				NOT: z
					.union([
						z.lazy(() => RatingWhereInputSchema),
						z.lazy(() => RatingWhereInputSchema).array(),
					])
					.optional(),
				staffId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
				patientId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
				rating: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
				comment: z
					.union([z.lazy(() => StringNullableFilterSchema), z.string()])
					.optional()
					.nullable(),
				createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
				updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
				doctor: z
					.union([
						z.lazy(() => DoctorScalarRelationFilterSchema),
						z.lazy(() => DoctorWhereInputSchema),
					])
					.optional(),
				patient: z
					.union([
						z.lazy(() => PatientScalarRelationFilterSchema),
						z.lazy(() => PatientWhereInputSchema),
					])
					.optional(),
			})
			.strict(),
	)

export default RatingWhereUniqueInputSchema
