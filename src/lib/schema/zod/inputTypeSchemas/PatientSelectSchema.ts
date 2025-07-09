import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentFindManyArgsSchema } from '../outputTypeSchemas/AppointmentFindManyArgsSchema'
import { MedicalRecordsFindManyArgsSchema } from '../outputTypeSchemas/MedicalRecordsFindManyArgsSchema'
import { PatientCountOutputTypeArgsSchema } from '../outputTypeSchemas/PatientCountOutputTypeArgsSchema'
import { PaymentFindManyArgsSchema } from '../outputTypeSchemas/PaymentFindManyArgsSchema'
import { PrescriptionFindManyArgsSchema } from '../outputTypeSchemas/PrescriptionFindManyArgsSchema'
import { RatingFindManyArgsSchema } from '../outputTypeSchemas/RatingFindManyArgsSchema'
import { UserArgsSchema } from '../outputTypeSchemas/UserArgsSchema'
import { VaccinationFindManyArgsSchema } from '../outputTypeSchemas/VaccinationFindManyArgsSchema'

export const PatientSelectSchema: z.ZodType<Prisma.PatientSelect> = z
	.object({
		id: z.boolean().optional(),
		firstName: z.boolean().optional(),
		lastName: z.boolean().optional(),
		userId: z.boolean().optional(),
		dateOfBirth: z.boolean().optional(),
		gender: z.boolean().optional(),
		phone: z.boolean().optional(),
		email: z.boolean().optional(),
		maritalStatus: z.boolean().optional(),
		nutritionalStatus: z.boolean().optional(),
		address: z.boolean().optional(),
		emergencyContactName: z.boolean().optional(),
		emergencyContactNumber: z.boolean().optional(),
		relation: z.boolean().optional(),
		bloodGroup: z.boolean().optional(),
		allergies: z.boolean().optional(),
		medicalConditions: z.boolean().optional(),
		medicalHistory: z.boolean().optional(),
		insuranceProvider: z.boolean().optional(),
		insuranceNumber: z.boolean().optional(),
		privacyConsent: z.boolean().optional(),
		serviceConsent: z.boolean().optional(),
		medicalConsent: z.boolean().optional(),
		img: z.boolean().optional(),
		colorCode: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
		appointments: z.union([z.boolean(), z.lazy(() => AppointmentFindManyArgsSchema)]).optional(),
		medical: z.union([z.boolean(), z.lazy(() => MedicalRecordsFindManyArgsSchema)]).optional(),
		payments: z.union([z.boolean(), z.lazy(() => PaymentFindManyArgsSchema)]).optional(),
		ratings: z.union([z.boolean(), z.lazy(() => RatingFindManyArgsSchema)]).optional(),
		Prescription: z.union([z.boolean(), z.lazy(() => PrescriptionFindManyArgsSchema)]).optional(),
		Vaccination: z.union([z.boolean(), z.lazy(() => VaccinationFindManyArgsSchema)]).optional(),
		_count: z.union([z.boolean(), z.lazy(() => PatientCountOutputTypeArgsSchema)]).optional(),
	})
	.strict()

export default PatientSelectSchema
