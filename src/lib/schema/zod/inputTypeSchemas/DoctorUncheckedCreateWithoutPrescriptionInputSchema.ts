import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentUncheckedCreateNestedManyWithoutDoctorInputSchema } from './AppointmentUncheckedCreateNestedManyWithoutDoctorInputSchema'
import { DiagnosisUncheckedCreateNestedManyWithoutDoctorInputSchema } from './DiagnosisUncheckedCreateNestedManyWithoutDoctorInputSchema'
import { JOBTYPESchema } from './JOBTYPESchema'
import { RatingUncheckedCreateNestedManyWithoutDoctorInputSchema } from './RatingUncheckedCreateNestedManyWithoutDoctorInputSchema'
import { WorkingDaysUncheckedCreateNestedManyWithoutDoctorInputSchema } from './WorkingDaysUncheckedCreateNestedManyWithoutDoctorInputSchema'

export const DoctorUncheckedCreateWithoutPrescriptionInputSchema: z.ZodType<Prisma.DoctorUncheckedCreateWithoutPrescriptionInput> =
	z
		.object({
			id: z.string(),
			email: z.string(),
			name: z.string(),
			userId: z.string(),
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
			workingDays: z
				.lazy(() => WorkingDaysUncheckedCreateNestedManyWithoutDoctorInputSchema)
				.optional(),
			appointments: z
				.lazy(() => AppointmentUncheckedCreateNestedManyWithoutDoctorInputSchema)
				.optional(),
			ratings: z.lazy(() => RatingUncheckedCreateNestedManyWithoutDoctorInputSchema).optional(),
			diagnosis: z
				.lazy(() => DiagnosisUncheckedCreateNestedManyWithoutDoctorInputSchema)
				.optional(),
		})
		.strict()

export default DoctorUncheckedCreateWithoutPrescriptionInputSchema
