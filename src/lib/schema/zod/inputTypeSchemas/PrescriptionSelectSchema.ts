import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DoctorArgsSchema } from '../outputTypeSchemas/DoctorArgsSchema'
import { MedicalRecordsArgsSchema } from '../outputTypeSchemas/MedicalRecordsArgsSchema'
import { PatientArgsSchema } from '../outputTypeSchemas/PatientArgsSchema'

export const PrescriptionSelectSchema: z.ZodType<Prisma.PrescriptionSelect> = z
	.object({
		id: z.boolean().optional(),
		medicalRecordId: z.boolean().optional(),
		doctorId: z.boolean().optional(),
		patientId: z.boolean().optional(),
		medicationName: z.boolean().optional(),
		dosage: z.boolean().optional(),
		frequency: z.boolean().optional(),
		duration: z.boolean().optional(),
		instructions: z.boolean().optional(),
		issuedDate: z.boolean().optional(),
		endDate: z.boolean().optional(),
		status: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		medicalRecord: z.union([z.boolean(), z.lazy(() => MedicalRecordsArgsSchema)]).optional(),
		doctor: z.union([z.boolean(), z.lazy(() => DoctorArgsSchema)]).optional(),
		patient: z.union([z.boolean(), z.lazy(() => PatientArgsSchema)]).optional(),
	})
	.strict()

export default PrescriptionSelectSchema
