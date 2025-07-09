import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema'
import { IntFilterSchema } from './IntFilterSchema'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'

export const PrescriptionScalarWhereInputSchema: z.ZodType<Prisma.PrescriptionScalarWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => PrescriptionScalarWhereInputSchema),
				z.lazy(() => PrescriptionScalarWhereInputSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => PrescriptionScalarWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => PrescriptionScalarWhereInputSchema),
				z.lazy(() => PrescriptionScalarWhereInputSchema).array(),
			])
			.optional(),
		id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
		medicalRecordId: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
		doctorId: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		patientId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		medicationName: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		dosage: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		frequency: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		duration: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		instructions: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		issuedDate: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		endDate: z
			.union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
			.optional()
			.nullable(),
		status: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
	})
	.strict()

export default PrescriptionScalarWhereInputSchema
