import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentCreateNestedManyWithoutDoctorInputSchema } from './AppointmentCreateNestedManyWithoutDoctorInputSchema'
import { DiagnosisCreateNestedManyWithoutDoctorInputSchema } from './DiagnosisCreateNestedManyWithoutDoctorInputSchema'
import { JOBTYPESchema } from './JOBTYPESchema'
import { RatingCreateNestedManyWithoutDoctorInputSchema } from './RatingCreateNestedManyWithoutDoctorInputSchema'
import { UserCreateNestedOneWithoutDoctorInputSchema } from './UserCreateNestedOneWithoutDoctorInputSchema'
import { WorkingDaysCreateNestedManyWithoutDoctorInputSchema } from './WorkingDaysCreateNestedManyWithoutDoctorInputSchema'

export const DoctorCreateWithoutPrescriptionInputSchema: z.ZodType<Prisma.DoctorCreateWithoutPrescriptionInput> =
	z
		.object({
			id: z.string(),
			email: z.string(),
			name: z.string(),
			specialization: z.string(),
			licenseNumber: z.string(),
			phone: z.string(),
			address: z.string(),
			department: z.string().optional().nullable(),
			img: z.string().optional().nullable(),
			colorCode: z.string().optional().nullable(),
			availabilityStatus: z.string().optional().nullable(),
			type: z.lazy(() => JOBTYPESchema).optional(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
			user: z.lazy(() => UserCreateNestedOneWithoutDoctorInputSchema),
			workingDays: z.lazy(() => WorkingDaysCreateNestedManyWithoutDoctorInputSchema).optional(),
			appointments: z.lazy(() => AppointmentCreateNestedManyWithoutDoctorInputSchema).optional(),
			ratings: z.lazy(() => RatingCreateNestedManyWithoutDoctorInputSchema).optional(),
			diagnosis: z.lazy(() => DiagnosisCreateNestedManyWithoutDoctorInputSchema).optional(),
		})
		.strict()

export default DoctorCreateWithoutPrescriptionInputSchema
