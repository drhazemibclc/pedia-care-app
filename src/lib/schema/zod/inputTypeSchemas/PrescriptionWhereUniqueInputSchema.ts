import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema'
import { DoctorNullableScalarRelationFilterSchema } from './DoctorNullableScalarRelationFilterSchema'
import { DoctorWhereInputSchema } from './DoctorWhereInputSchema'
import { IntFilterSchema } from './IntFilterSchema'
import { MedicalRecordsScalarRelationFilterSchema } from './MedicalRecordsScalarRelationFilterSchema'
import { MedicalRecordsWhereInputSchema } from './MedicalRecordsWhereInputSchema'
import { PatientScalarRelationFilterSchema } from './PatientScalarRelationFilterSchema'
import { PatientWhereInputSchema } from './PatientWhereInputSchema'
import { PrescriptionWhereInputSchema } from './PrescriptionWhereInputSchema'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'

export const PrescriptionWhereUniqueInputSchema: z.ZodType<Prisma.PrescriptionWhereUniqueInput> = z
	.object({
		id: z.number().int(),
	})
	.and(
		z
			.object({
				id: z.number().int().optional(),
				AND: z
					.union([
						z.lazy(() => PrescriptionWhereInputSchema),
						z.lazy(() => PrescriptionWhereInputSchema).array(),
					])
					.optional(),
				OR: z
					.lazy(() => PrescriptionWhereInputSchema)
					.array()
					.optional(),
				NOT: z
					.union([
						z.lazy(() => PrescriptionWhereInputSchema),
						z.lazy(() => PrescriptionWhereInputSchema).array(),
					])
					.optional(),
				medicalRecordId: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
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
				medicalRecord: z
					.union([
						z.lazy(() => MedicalRecordsScalarRelationFilterSchema),
						z.lazy(() => MedicalRecordsWhereInputSchema),
					])
					.optional(),
				doctor: z
					.union([
						z.lazy(() => DoctorNullableScalarRelationFilterSchema),
						z.lazy(() => DoctorWhereInputSchema),
					])
					.optional()
					.nullable(),
				patient: z
					.union([
						z.lazy(() => PatientScalarRelationFilterSchema),
						z.lazy(() => PatientWhereInputSchema),
					])
					.optional(),
			})
			.strict(),
	)

export default PrescriptionWhereUniqueInputSchema
