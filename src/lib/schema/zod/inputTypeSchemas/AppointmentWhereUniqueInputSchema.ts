import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentStatusSchema } from './AppointmentStatusSchema'
import { AppointmentWhereInputSchema } from './AppointmentWhereInputSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { DoctorScalarRelationFilterSchema } from './DoctorScalarRelationFilterSchema'
import { DoctorWhereInputSchema } from './DoctorWhereInputSchema'
import { EnumAppointmentStatusFilterSchema } from './EnumAppointmentStatusFilterSchema'
import { IntNullableFilterSchema } from './IntNullableFilterSchema'
import { MedicalRecordsListRelationFilterSchema } from './MedicalRecordsListRelationFilterSchema'
import { PatientScalarRelationFilterSchema } from './PatientScalarRelationFilterSchema'
import { PatientWhereInputSchema } from './PatientWhereInputSchema'
import { PaymentListRelationFilterSchema } from './PaymentListRelationFilterSchema'
import { ServicesNullableScalarRelationFilterSchema } from './ServicesNullableScalarRelationFilterSchema'
import { ServicesWhereInputSchema } from './ServicesWhereInputSchema'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'

export const AppointmentWhereUniqueInputSchema: z.ZodType<Prisma.AppointmentWhereUniqueInput> = z
	.object({
		id: z.number().int(),
	})
	.and(
		z
			.object({
				id: z.number().int().optional(),
				AND: z
					.union([
						z.lazy(() => AppointmentWhereInputSchema),
						z.lazy(() => AppointmentWhereInputSchema).array(),
					])
					.optional(),
				OR: z
					.lazy(() => AppointmentWhereInputSchema)
					.array()
					.optional(),
				NOT: z
					.union([
						z.lazy(() => AppointmentWhereInputSchema),
						z.lazy(() => AppointmentWhereInputSchema).array(),
					])
					.optional(),
				patientId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
				doctorId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
				serviceId: z
					.union([z.lazy(() => IntNullableFilterSchema), z.number().int()])
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
				patient: z
					.union([
						z.lazy(() => PatientScalarRelationFilterSchema),
						z.lazy(() => PatientWhereInputSchema),
					])
					.optional(),
				doctor: z
					.union([
						z.lazy(() => DoctorScalarRelationFilterSchema),
						z.lazy(() => DoctorWhereInputSchema),
					])
					.optional(),
				service: z
					.union([
						z.lazy(() => ServicesNullableScalarRelationFilterSchema),
						z.lazy(() => ServicesWhereInputSchema),
					])
					.optional()
					.nullable(),
				bills: z.lazy(() => PaymentListRelationFilterSchema).optional(),
				medical: z.lazy(() => MedicalRecordsListRelationFilterSchema).optional(),
			})
			.strict(),
	)

export default AppointmentWhereUniqueInputSchema
