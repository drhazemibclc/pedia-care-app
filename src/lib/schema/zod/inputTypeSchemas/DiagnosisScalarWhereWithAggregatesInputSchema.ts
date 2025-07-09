import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema'
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema'
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'

export const DiagnosisScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.DiagnosisScalarWhereWithAggregatesInput> =
	z
		.object({
			AND: z
				.union([
					z.lazy(() => DiagnosisScalarWhereWithAggregatesInputSchema),
					z.lazy(() => DiagnosisScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			OR: z
				.lazy(() => DiagnosisScalarWhereWithAggregatesInputSchema)
				.array()
				.optional(),
			NOT: z
				.union([
					z.lazy(() => DiagnosisScalarWhereWithAggregatesInputSchema),
					z.lazy(() => DiagnosisScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
			patientId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			medicalId: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
			doctorId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			symptoms: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			diagnosis: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			notes: z
				.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			prescribedMedications: z
				.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			followUpPlan: z
				.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			createdAt: z
				.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()])
				.optional(),
			updatedAt: z
				.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()])
				.optional(),
		})
		.strict()

export default DiagnosisScalarWhereWithAggregatesInputSchema
