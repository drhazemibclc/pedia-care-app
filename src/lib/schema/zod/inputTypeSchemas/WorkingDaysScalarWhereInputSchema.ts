import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { IntFilterSchema } from './IntFilterSchema'
import { StringFilterSchema } from './StringFilterSchema'

export const WorkingDaysScalarWhereInputSchema: z.ZodType<Prisma.WorkingDaysScalarWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => WorkingDaysScalarWhereInputSchema),
				z.lazy(() => WorkingDaysScalarWhereInputSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => WorkingDaysScalarWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => WorkingDaysScalarWhereInputSchema),
				z.lazy(() => WorkingDaysScalarWhereInputSchema).array(),
			])
			.optional(),
		id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
		doctorId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		day: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		startTime: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		closeTime: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
	})
	.strict()

export default WorkingDaysScalarWhereInputSchema
