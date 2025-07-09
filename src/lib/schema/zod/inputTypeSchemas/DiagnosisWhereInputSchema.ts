import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { DoctorScalarRelationFilterSchema } from './DoctorScalarRelationFilterSchema'
import { DoctorWhereInputSchema } from './DoctorWhereInputSchema'
import { IntFilterSchema } from './IntFilterSchema'
import { MedicalRecordsScalarRelationFilterSchema } from './MedicalRecordsScalarRelationFilterSchema'
import { MedicalRecordsWhereInputSchema } from './MedicalRecordsWhereInputSchema'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'

export const DiagnosisWhereInputSchema: z.ZodType<Prisma.DiagnosisWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => DiagnosisWhereInputSchema),
				z.lazy(() => DiagnosisWhereInputSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => DiagnosisWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => DiagnosisWhereInputSchema),
				z.lazy(() => DiagnosisWhereInputSchema).array(),
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
		doctor: z
			.union([z.lazy(() => DoctorScalarRelationFilterSchema), z.lazy(() => DoctorWhereInputSchema)])
			.optional(),
		medical: z
			.union([
				z.lazy(() => MedicalRecordsScalarRelationFilterSchema),
				z.lazy(() => MedicalRecordsWhereInputSchema),
			])
			.optional(),
	})
	.strict()

export default DiagnosisWhereInputSchema
