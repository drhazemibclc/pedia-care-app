import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { DoctorScalarRelationFilterSchema } from './DoctorScalarRelationFilterSchema'
import { DoctorWhereInputSchema } from './DoctorWhereInputSchema'
import { IntFilterSchema } from './IntFilterSchema'
import { PatientScalarRelationFilterSchema } from './PatientScalarRelationFilterSchema'
import { PatientWhereInputSchema } from './PatientWhereInputSchema'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'

export const RatingWhereInputSchema: z.ZodType<Prisma.RatingWhereInput> = z
	.object({
		AND: z
			.union([z.lazy(() => RatingWhereInputSchema), z.lazy(() => RatingWhereInputSchema).array()])
			.optional(),
		OR: z
			.lazy(() => RatingWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([z.lazy(() => RatingWhereInputSchema), z.lazy(() => RatingWhereInputSchema).array()])
			.optional(),
		id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
		staffId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		patientId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		rating: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
		comment: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		doctor: z
			.union([z.lazy(() => DoctorScalarRelationFilterSchema), z.lazy(() => DoctorWhereInputSchema)])
			.optional(),
		patient: z
			.union([
				z.lazy(() => PatientScalarRelationFilterSchema),
				z.lazy(() => PatientWhereInputSchema),
			])
			.optional(),
	})
	.strict()

export default RatingWhereInputSchema
