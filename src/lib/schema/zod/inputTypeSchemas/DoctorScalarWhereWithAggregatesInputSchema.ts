import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema'
import { EnumJOBTYPEWithAggregatesFilterSchema } from './EnumJOBTYPEWithAggregatesFilterSchema'
import { JOBTYPESchema } from './JOBTYPESchema'
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'

export const DoctorScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.DoctorScalarWhereWithAggregatesInput> =
	z
		.object({
			AND: z
				.union([
					z.lazy(() => DoctorScalarWhereWithAggregatesInputSchema),
					z.lazy(() => DoctorScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			OR: z
				.lazy(() => DoctorScalarWhereWithAggregatesInputSchema)
				.array()
				.optional(),
			NOT: z
				.union([
					z.lazy(() => DoctorScalarWhereWithAggregatesInputSchema),
					z.lazy(() => DoctorScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			email: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			name: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			userId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			specialization: z
				.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
				.optional(),
			licenseNumber: z
				.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
				.optional(),
			phone: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			address: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			department: z
				.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			img: z
				.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			colorCode: z
				.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			availabilityStatus: z
				.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			type: z
				.union([z.lazy(() => EnumJOBTYPEWithAggregatesFilterSchema), z.lazy(() => JOBTYPESchema)])
				.optional(),
			createdAt: z
				.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()])
				.optional(),
			updatedAt: z
				.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()])
				.optional(),
		})
		.strict()

export default DoctorScalarWhereWithAggregatesInputSchema
