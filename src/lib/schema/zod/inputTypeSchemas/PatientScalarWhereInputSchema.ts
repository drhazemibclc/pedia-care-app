import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { BoolFilterSchema } from './BoolFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { EnumGenderFilterSchema } from './EnumGenderFilterSchema'
import { GenderSchema } from './GenderSchema'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'

export const PatientScalarWhereInputSchema: z.ZodType<Prisma.PatientScalarWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => PatientScalarWhereInputSchema),
				z.lazy(() => PatientScalarWhereInputSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => PatientScalarWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => PatientScalarWhereInputSchema),
				z.lazy(() => PatientScalarWhereInputSchema).array(),
			])
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
	})
	.strict()

export default PatientScalarWhereInputSchema
