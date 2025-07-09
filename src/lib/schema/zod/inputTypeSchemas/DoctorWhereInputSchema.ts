import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentListRelationFilterSchema } from './AppointmentListRelationFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { DiagnosisListRelationFilterSchema } from './DiagnosisListRelationFilterSchema'
import { EnumJOBTYPEFilterSchema } from './EnumJOBTYPEFilterSchema'
import { JOBTYPESchema } from './JOBTYPESchema'
import { PrescriptionListRelationFilterSchema } from './PrescriptionListRelationFilterSchema'
import { RatingListRelationFilterSchema } from './RatingListRelationFilterSchema'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { UserScalarRelationFilterSchema } from './UserScalarRelationFilterSchema'
import { UserWhereInputSchema } from './UserWhereInputSchema'
import { WorkingDaysListRelationFilterSchema } from './WorkingDaysListRelationFilterSchema'

export const DoctorWhereInputSchema: z.ZodType<Prisma.DoctorWhereInput> = z
	.object({
		AND: z
			.union([z.lazy(() => DoctorWhereInputSchema), z.lazy(() => DoctorWhereInputSchema).array()])
			.optional(),
		OR: z
			.lazy(() => DoctorWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([z.lazy(() => DoctorWhereInputSchema), z.lazy(() => DoctorWhereInputSchema).array()])
			.optional(),
		id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		email: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		userId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		specialization: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		licenseNumber: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		phone: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		address: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		department: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		img: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		colorCode: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		availabilityStatus: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		type: z.union([z.lazy(() => EnumJOBTYPEFilterSchema), z.lazy(() => JOBTYPESchema)]).optional(),
		createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		user: z
			.union([z.lazy(() => UserScalarRelationFilterSchema), z.lazy(() => UserWhereInputSchema)])
			.optional(),
		workingDays: z.lazy(() => WorkingDaysListRelationFilterSchema).optional(),
		appointments: z.lazy(() => AppointmentListRelationFilterSchema).optional(),
		ratings: z.lazy(() => RatingListRelationFilterSchema).optional(),
		diagnosis: z.lazy(() => DiagnosisListRelationFilterSchema).optional(),
		Prescription: z.lazy(() => PrescriptionListRelationFilterSchema).optional(),
	})
	.strict()

export default DoctorWhereInputSchema
