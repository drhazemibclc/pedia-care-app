import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { EnumJOBTYPEFilterSchema } from './EnumJOBTYPEFilterSchema'
import { JOBTYPESchema } from './JOBTYPESchema'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'

export const DoctorScalarWhereInputSchema: z.ZodType<Prisma.DoctorScalarWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => DoctorScalarWhereInputSchema),
				z.lazy(() => DoctorScalarWhereInputSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => DoctorScalarWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => DoctorScalarWhereInputSchema),
				z.lazy(() => DoctorScalarWhereInputSchema).array(),
			])
			.optional(),
		id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		email: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		userId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		specialization: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		licenseNumber: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		phone: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		address: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		department: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		img: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		colorCode: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		availabilityStatus: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		type: z.union([z.lazy(() => EnumJOBTYPEFilterSchema), z.lazy(() => JOBTYPESchema)]).optional(),
		createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
	})
	.strict()

export default DoctorScalarWhereInputSchema
