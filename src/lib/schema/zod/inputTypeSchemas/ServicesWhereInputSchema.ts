import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentListRelationFilterSchema } from './AppointmentListRelationFilterSchema'
import { BoolFilterSchema } from './BoolFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { EnumServiceCategoryNullableFilterSchema } from './EnumServiceCategoryNullableFilterSchema'
import { FloatFilterSchema } from './FloatFilterSchema'
import { IntFilterSchema } from './IntFilterSchema'
import { IntNullableFilterSchema } from './IntNullableFilterSchema'
import { LabTestNullableScalarRelationFilterSchema } from './LabTestNullableScalarRelationFilterSchema'
import { LabTestWhereInputSchema } from './LabTestWhereInputSchema'
import { PatientBillsListRelationFilterSchema } from './PatientBillsListRelationFilterSchema'
import { ServiceCategorySchema } from './ServiceCategorySchema'
import { StringFilterSchema } from './StringFilterSchema'

export const ServicesWhereInputSchema: z.ZodType<Prisma.ServicesWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => ServicesWhereInputSchema),
				z.lazy(() => ServicesWhereInputSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => ServicesWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => ServicesWhereInputSchema),
				z.lazy(() => ServicesWhereInputSchema).array(),
			])
			.optional(),
		id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
		serviceName: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		description: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		price: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
		category: z
			.union([
				z.lazy(() => EnumServiceCategoryNullableFilterSchema),
				z.lazy(() => ServiceCategorySchema),
			])
			.optional()
			.nullable(),
		duration: z
			.union([z.lazy(() => IntNullableFilterSchema), z.number()])
			.optional()
			.nullable(),
		isAvailable: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
		createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		labtest: z
			.union([
				z.lazy(() => LabTestNullableScalarRelationFilterSchema),
				z.lazy(() => LabTestWhereInputSchema),
			])
			.optional()
			.nullable(),
		bills: z.lazy(() => PatientBillsListRelationFilterSchema).optional(),
		appointments: z.lazy(() => AppointmentListRelationFilterSchema).optional(),
	})
	.strict()

export default ServicesWhereInputSchema
