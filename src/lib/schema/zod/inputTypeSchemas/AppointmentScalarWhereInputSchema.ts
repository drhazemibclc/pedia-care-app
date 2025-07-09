import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentStatusSchema } from './AppointmentStatusSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { EnumAppointmentStatusFilterSchema } from './EnumAppointmentStatusFilterSchema'
import { IntFilterSchema } from './IntFilterSchema'
import { IntNullableFilterSchema } from './IntNullableFilterSchema'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'

export const AppointmentScalarWhereInputSchema: z.ZodType<Prisma.AppointmentScalarWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => AppointmentScalarWhereInputSchema),
				z.lazy(() => AppointmentScalarWhereInputSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => AppointmentScalarWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => AppointmentScalarWhereInputSchema),
				z.lazy(() => AppointmentScalarWhereInputSchema).array(),
			])
			.optional(),
		id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
		patientId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		doctorId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		serviceId: z
			.union([z.lazy(() => IntNullableFilterSchema), z.number()])
			.optional()
			.nullable(),
		appointmentDate: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		time: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		status: z
			.union([
				z.lazy(() => EnumAppointmentStatusFilterSchema),
				z.lazy(() => AppointmentStatusSchema),
			])
			.optional(),
		type: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		note: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		reason: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
		updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
	})
	.strict()

export default AppointmentScalarWhereInputSchema
