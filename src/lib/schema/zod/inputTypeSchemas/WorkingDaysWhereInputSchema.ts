import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { DoctorScalarRelationFilterSchema } from './DoctorScalarRelationFilterSchema'
import { DoctorWhereInputSchema } from './DoctorWhereInputSchema'
import { IntFilterSchema } from './IntFilterSchema'
import { StringFilterSchema } from './StringFilterSchema'

export const WorkingDaysWhereInputSchema: z.ZodType<Prisma.WorkingDaysWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => WorkingDaysWhereInputSchema),
				z.lazy(() => WorkingDaysWhereInputSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => WorkingDaysWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => WorkingDaysWhereInputSchema),
				z.lazy(() => WorkingDaysWhereInputSchema).array(),
			])
			.optional(),
		id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
		doctorId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		day: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		startTime: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		closeTime: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		doctor: z
			.union([z.lazy(() => DoctorScalarRelationFilterSchema), z.lazy(() => DoctorWhereInputSchema)])
			.optional(),
	})
	.strict()

export default WorkingDaysWhereInputSchema
