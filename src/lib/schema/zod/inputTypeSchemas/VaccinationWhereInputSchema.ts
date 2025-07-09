import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema'
import { IntFilterSchema } from './IntFilterSchema'
import { PatientScalarRelationFilterSchema } from './PatientScalarRelationFilterSchema'
import { PatientWhereInputSchema } from './PatientWhereInputSchema'
import { StaffNullableScalarRelationFilterSchema } from './StaffNullableScalarRelationFilterSchema'
import { StaffWhereInputSchema } from './StaffWhereInputSchema'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'

export const VaccinationWhereInputSchema: z.ZodType<Prisma.VaccinationWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => VaccinationWhereInputSchema),
				z.lazy(() => VaccinationWhereInputSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => VaccinationWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => VaccinationWhereInputSchema),
				z.lazy(() => VaccinationWhereInputSchema).array(),
			])
			.optional(),
		id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
		patientId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		administeredBy: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		vaccineName: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		vaccineBatchNo: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		administrationRoute: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		siteOfInjection: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		administeredDate: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		nextDueDate: z
			.union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
			.optional()
			.nullable(),
		notes: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		patient: z
			.union([
				z.lazy(() => PatientScalarRelationFilterSchema),
				z.lazy(() => PatientWhereInputSchema),
			])
			.optional(),
		administeredByStaff: z
			.union([
				z.lazy(() => StaffNullableScalarRelationFilterSchema),
				z.lazy(() => StaffWhereInputSchema),
			])
			.optional()
			.nullable(),
	})
	.strict()

export default VaccinationWhereInputSchema
