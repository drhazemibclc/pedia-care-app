import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { IntFilterSchema } from './IntFilterSchema'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'

export const DiagnosisScalarWhereInputSchema: z.ZodType<Prisma.DiagnosisScalarWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => DiagnosisScalarWhereInputSchema),
				z.lazy(() => DiagnosisScalarWhereInputSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => DiagnosisScalarWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => DiagnosisScalarWhereInputSchema),
				z.lazy(() => DiagnosisScalarWhereInputSchema).array(),
			])
			.optional(),
		id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
		patientId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		medicalId: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
		doctorId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		symptoms: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		diagnosis: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		notes: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		prescribedMedications: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		followUpPlan: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
	})
	.strict()

export default DiagnosisScalarWhereInputSchema
