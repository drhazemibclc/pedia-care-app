import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { IntFilterSchema } from './IntFilterSchema'
import { MedicalRecordsScalarRelationFilterSchema } from './MedicalRecordsScalarRelationFilterSchema'
import { MedicalRecordsWhereInputSchema } from './MedicalRecordsWhereInputSchema'
import { ServicesScalarRelationFilterSchema } from './ServicesScalarRelationFilterSchema'
import { ServicesWhereInputSchema } from './ServicesWhereInputSchema'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'

export const LabTestWhereInputSchema: z.ZodType<Prisma.LabTestWhereInput> = z
	.object({
		AND: z
			.union([z.lazy(() => LabTestWhereInputSchema), z.lazy(() => LabTestWhereInputSchema).array()])
			.optional(),
		OR: z
			.lazy(() => LabTestWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([z.lazy(() => LabTestWhereInputSchema), z.lazy(() => LabTestWhereInputSchema).array()])
			.optional(),
		id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
		recordId: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
		testDate: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		result: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		status: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		notes: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		serviceId: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
		createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		services: z
			.union([
				z.lazy(() => ServicesScalarRelationFilterSchema),
				z.lazy(() => ServicesWhereInputSchema),
			])
			.optional(),
		medicalRecord: z
			.union([
				z.lazy(() => MedicalRecordsScalarRelationFilterSchema),
				z.lazy(() => MedicalRecordsWhereInputSchema),
			])
			.optional(),
	})
	.strict()

export default LabTestWhereInputSchema
