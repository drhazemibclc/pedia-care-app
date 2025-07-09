import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DiagnosisUncheckedCreateNestedManyWithoutDoctorInputSchema } from './DiagnosisUncheckedCreateNestedManyWithoutDoctorInputSchema'
import { JOBTYPESchema } from './JOBTYPESchema'
import { PrescriptionUncheckedCreateNestedManyWithoutDoctorInputSchema } from './PrescriptionUncheckedCreateNestedManyWithoutDoctorInputSchema'
import { RatingUncheckedCreateNestedManyWithoutDoctorInputSchema } from './RatingUncheckedCreateNestedManyWithoutDoctorInputSchema'
import { WorkingDaysUncheckedCreateNestedManyWithoutDoctorInputSchema } from './WorkingDaysUncheckedCreateNestedManyWithoutDoctorInputSchema'

export const DoctorUncheckedCreateWithoutAppointmentsInputSchema: z.ZodType<Prisma.DoctorUncheckedCreateWithoutAppointmentsInput> =
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
			ratings: z.lazy(() => RatingUncheckedCreateNestedManyWithoutDoctorInputSchema).optional(),
			diagnosis: z
				.lazy(() => DiagnosisUncheckedCreateNestedManyWithoutDoctorInputSchema)
				.optional(),
			Prescription: z
				.lazy(() => PrescriptionUncheckedCreateNestedManyWithoutDoctorInputSchema)
				.optional(),
		})
		.strict()

export default DoctorUncheckedCreateWithoutAppointmentsInputSchema
