import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { FloatFilterSchema } from './FloatFilterSchema'
import { IntFilterSchema } from './IntFilterSchema'
import { IntNullableFilterSchema } from './IntNullableFilterSchema'
import { MedicalRecordsScalarRelationFilterSchema } from './MedicalRecordsScalarRelationFilterSchema'
import { MedicalRecordsWhereInputSchema } from './MedicalRecordsWhereInputSchema'
import { StringFilterSchema } from './StringFilterSchema'
import { VitalSignsWhereInputSchema } from './VitalSignsWhereInputSchema'

export const VitalSignsWhereUniqueInputSchema: z.ZodType<Prisma.VitalSignsWhereUniqueInput> = z
	.object({
		id: z.number().int(),
	})
	.and(
		z
			.object({
				id: z.number().int().optional(),
				AND: z
					.union([
						z.lazy(() => VitalSignsWhereInputSchema),
						z.lazy(() => VitalSignsWhereInputSchema).array(),
					])
					.optional(),
				OR: z
					.lazy(() => VitalSignsWhereInputSchema)
					.array()
					.optional(),
				NOT: z
					.union([
						z.lazy(() => VitalSignsWhereInputSchema),
						z.lazy(() => VitalSignsWhereInputSchema).array(),
					])
					.optional(),
				patientId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
				medicalId: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
				bodyTemperature: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
				systolic: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
				diastolic: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
				heartRate: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
				respiratoryRate: z
					.union([z.lazy(() => IntNullableFilterSchema), z.number().int()])
					.optional()
					.nullable(),
				oxygenSaturation: z
					.union([z.lazy(() => IntNullableFilterSchema), z.number().int()])
					.optional()
					.nullable(),
				weight: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
				height: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
				createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
				updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
				medical: z
					.union([
						z.lazy(() => MedicalRecordsScalarRelationFilterSchema),
						z.lazy(() => MedicalRecordsWhereInputSchema),
					])
					.optional(),
			})
			.strict(),
	)

export default VitalSignsWhereUniqueInputSchema
