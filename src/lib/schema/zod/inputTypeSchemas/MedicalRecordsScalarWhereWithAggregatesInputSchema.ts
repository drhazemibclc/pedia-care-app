import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema'
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema'
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'

export const MedicalRecordsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.MedicalRecordsScalarWhereWithAggregatesInput> =
	z
		.object({
			AND: z
				.union([
					z.lazy(() => MedicalRecordsScalarWhereWithAggregatesInputSchema),
					z.lazy(() => MedicalRecordsScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			OR: z
				.lazy(() => MedicalRecordsScalarWhereWithAggregatesInputSchema)
				.array()
				.optional(),
			NOT: z
				.union([
					z.lazy(() => MedicalRecordsScalarWhereWithAggregatesInputSchema),
					z.lazy(() => MedicalRecordsScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			id: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
			patientId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			appointmentId: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
			doctorId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			treatmentPlan: z
				.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			prescriptions: z
				.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			labRequest: z
				.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			notes: z
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

export default MedicalRecordsScalarWhereWithAggregatesInputSchema
