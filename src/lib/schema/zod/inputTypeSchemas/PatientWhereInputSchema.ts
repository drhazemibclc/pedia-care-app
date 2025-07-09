import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentListRelationFilterSchema } from './AppointmentListRelationFilterSchema'
import { BoolFilterSchema } from './BoolFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { EnumGenderFilterSchema } from './EnumGenderFilterSchema'
import { GenderSchema } from './GenderSchema'
import { MedicalRecordsListRelationFilterSchema } from './MedicalRecordsListRelationFilterSchema'
import { PaymentListRelationFilterSchema } from './PaymentListRelationFilterSchema'
import { PrescriptionListRelationFilterSchema } from './PrescriptionListRelationFilterSchema'
import { RatingListRelationFilterSchema } from './RatingListRelationFilterSchema'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { UserScalarRelationFilterSchema } from './UserScalarRelationFilterSchema'
import { UserWhereInputSchema } from './UserWhereInputSchema'
import { VaccinationListRelationFilterSchema } from './VaccinationListRelationFilterSchema'

export const PatientWhereInputSchema: z.ZodType<Prisma.PatientWhereInput> = z
	.object({
		AND: z
			.union([z.lazy(() => PatientWhereInputSchema), z.lazy(() => PatientWhereInputSchema).array()])
			.optional(),
		OR: z
			.lazy(() => PatientWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([z.lazy(() => PatientWhereInputSchema), z.lazy(() => PatientWhereInputSchema).array()])
			.optional(),
		id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		firstName: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		lastName: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		userId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		dateOfBirth: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		gender: z.union([z.lazy(() => EnumGenderFilterSchema), z.lazy(() => GenderSchema)]).optional(),
		phone: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		email: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		maritalStatus: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		nutritionalStatus: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		address: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		emergencyContactName: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		emergencyContactNumber: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		relation: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		bloodGroup: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		allergies: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		medicalConditions: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		medicalHistory: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		insuranceProvider: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		insuranceNumber: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		privacyConsent: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
		serviceConsent: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
		medicalConsent: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
		img: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		colorCode: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		user: z
			.union([z.lazy(() => UserScalarRelationFilterSchema), z.lazy(() => UserWhereInputSchema)])
			.optional(),
		appointments: z.lazy(() => AppointmentListRelationFilterSchema).optional(),
		medical: z.lazy(() => MedicalRecordsListRelationFilterSchema).optional(),
		payments: z.lazy(() => PaymentListRelationFilterSchema).optional(),
		ratings: z.lazy(() => RatingListRelationFilterSchema).optional(),
		Prescription: z.lazy(() => PrescriptionListRelationFilterSchema).optional(),
		Vaccination: z.lazy(() => VaccinationListRelationFilterSchema).optional(),
	})
	.strict()

export default PatientWhereInputSchema
