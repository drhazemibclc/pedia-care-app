import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema'
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema'
import { EnumGenderWithAggregatesFilterSchema } from './EnumGenderWithAggregatesFilterSchema'
import { GenderSchema } from './GenderSchema'
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'

export const PatientScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PatientScalarWhereWithAggregatesInput> =
	z
		.object({
			AND: z
				.union([
					z.lazy(() => PatientScalarWhereWithAggregatesInputSchema),
					z.lazy(() => PatientScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			OR: z
				.lazy(() => PatientScalarWhereWithAggregatesInputSchema)
				.array()
				.optional(),
			NOT: z
				.union([
					z.lazy(() => PatientScalarWhereWithAggregatesInputSchema),
					z.lazy(() => PatientScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			firstName: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			lastName: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			userId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			dateOfBirth: z
				.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()])
				.optional(),
			gender: z
				.union([z.lazy(() => EnumGenderWithAggregatesFilterSchema), z.lazy(() => GenderSchema)])
				.optional(),
			phone: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			email: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			maritalStatus: z
				.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
				.optional(),
			nutritionalStatus: z
				.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
				.optional(),
			address: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			emergencyContactName: z
				.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
				.optional(),
			emergencyContactNumber: z
				.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
				.optional(),
			relation: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			bloodGroup: z
				.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			allergies: z
				.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			medicalConditions: z
				.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			medicalHistory: z
				.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			insuranceProvider: z
				.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			insuranceNumber: z
				.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			privacyConsent: z
				.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()])
				.optional(),
			serviceConsent: z
				.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()])
				.optional(),
			medicalConsent: z
				.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()])
				.optional(),
			img: z
				.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			colorCode: z
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

export default PatientScalarWhereWithAggregatesInputSchema
