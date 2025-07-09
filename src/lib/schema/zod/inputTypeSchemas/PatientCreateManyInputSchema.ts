import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { GenderSchema } from './GenderSchema'

export const PatientCreateManyInputSchema: z.ZodType<Prisma.PatientCreateManyInput> = z
	.object({
		id: z.string(),
		firstName: z.string(),
		lastName: z.string(),
		userId: z.string(),
		dateOfBirth: z.coerce.date(),
		gender: z.lazy(() => GenderSchema).optional(),
		phone: z.string(),
		email: z.string(),
		maritalStatus: z.string(),
		nutritionalStatus: z.string(),
		address: z.string(),
		emergencyContactName: z.string(),
		emergencyContactNumber: z.string(),
		relation: z.string(),
		bloodGroup: z.string().optional().nullable(),
		allergies: z.string().optional().nullable(),
		medicalConditions: z.string().optional().nullable(),
		medicalHistory: z.string().optional().nullable(),
		insuranceProvider: z.string().optional().nullable(),
		insuranceNumber: z.string().optional().nullable(),
		privacyConsent: z.boolean(),
		serviceConsent: z.boolean(),
		medicalConsent: z.boolean(),
		img: z.string().optional().nullable(),
		colorCode: z.string().optional().nullable(),
		createdAt: z.coerce.date().optional(),
		updatedAt: z.coerce.date().optional(),
	})
	.strict()

export default PatientCreateManyInputSchema
