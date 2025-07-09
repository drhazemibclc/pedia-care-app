import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentScalarRelationFilterSchema } from './AppointmentScalarRelationFilterSchema'
import { AppointmentWhereInputSchema } from './AppointmentWhereInputSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { DiagnosisListRelationFilterSchema } from './DiagnosisListRelationFilterSchema'
import { IntFilterSchema } from './IntFilterSchema'
import { LabTestListRelationFilterSchema } from './LabTestListRelationFilterSchema'
import { MedicalRecordsWhereInputSchema } from './MedicalRecordsWhereInputSchema'
import { PatientScalarRelationFilterSchema } from './PatientScalarRelationFilterSchema'
import { PatientWhereInputSchema } from './PatientWhereInputSchema'
import { PrescriptionListRelationFilterSchema } from './PrescriptionListRelationFilterSchema'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { VitalSignsListRelationFilterSchema } from './VitalSignsListRelationFilterSchema'

export const MedicalRecordsWhereUniqueInputSchema: z.ZodType<Prisma.MedicalRecordsWhereUniqueInput> =
	z
		.object({
			id: z.number().int(),
		})
		.and(
			z
				.object({
					id: z.number().int().optional(),
					AND: z
						.union([
							z.lazy(() => MedicalRecordsWhereInputSchema),
							z.lazy(() => MedicalRecordsWhereInputSchema).array(),
						])
						.optional(),
					OR: z
						.lazy(() => MedicalRecordsWhereInputSchema)
						.array()
						.optional(),
					NOT: z
						.union([
							z.lazy(() => MedicalRecordsWhereInputSchema),
							z.lazy(() => MedicalRecordsWhereInputSchema).array(),
						])
						.optional(),
					patientId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
					appointmentId: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
					doctorId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
					treatmentPlan: z
						.union([z.lazy(() => StringNullableFilterSchema), z.string()])
						.optional()
						.nullable(),
					prescriptions: z
						.union([z.lazy(() => StringNullableFilterSchema), z.string()])
						.optional()
						.nullable(),
					labRequest: z
						.union([z.lazy(() => StringNullableFilterSchema), z.string()])
						.optional()
						.nullable(),
					notes: z
						.union([z.lazy(() => StringNullableFilterSchema), z.string()])
						.optional()
						.nullable(),
					createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
					updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
					appointment: z
						.union([
							z.lazy(() => AppointmentScalarRelationFilterSchema),
							z.lazy(() => AppointmentWhereInputSchema),
						])
						.optional(),
					patient: z
						.union([
							z.lazy(() => PatientScalarRelationFilterSchema),
							z.lazy(() => PatientWhereInputSchema),
						])
						.optional(),
					labTest: z.lazy(() => LabTestListRelationFilterSchema).optional(),
					vitalSigns: z.lazy(() => VitalSignsListRelationFilterSchema).optional(),
					diagnosis: z.lazy(() => DiagnosisListRelationFilterSchema).optional(),
					Prescription: z.lazy(() => PrescriptionListRelationFilterSchema).optional(),
				})
				.strict(),
		)

export default MedicalRecordsWhereUniqueInputSchema
