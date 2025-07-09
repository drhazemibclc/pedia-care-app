import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AppointmentArgsSchema } from '../outputTypeSchemas/AppointmentArgsSchema'
import { DiagnosisFindManyArgsSchema } from '../outputTypeSchemas/DiagnosisFindManyArgsSchema'
import { LabTestFindManyArgsSchema } from '../outputTypeSchemas/LabTestFindManyArgsSchema'
import { MedicalRecordsCountOutputTypeArgsSchema } from '../outputTypeSchemas/MedicalRecordsCountOutputTypeArgsSchema'
import { PatientArgsSchema } from '../outputTypeSchemas/PatientArgsSchema'
import { PrescriptionFindManyArgsSchema } from '../outputTypeSchemas/PrescriptionFindManyArgsSchema'
import { VitalSignsFindManyArgsSchema } from '../outputTypeSchemas/VitalSignsFindManyArgsSchema'

export const MedicalRecordsSelectSchema: z.ZodType<Prisma.MedicalRecordsSelect> = z
	.object({
		id: z.boolean().optional(),
		patientId: z.boolean().optional(),
		appointmentId: z.boolean().optional(),
		doctorId: z.boolean().optional(),
		treatmentPlan: z.boolean().optional(),
		prescriptions: z.boolean().optional(),
		labRequest: z.boolean().optional(),
		notes: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
		appointment: z.union([z.boolean(), z.lazy(() => AppointmentArgsSchema)]).optional(),
		patient: z.union([z.boolean(), z.lazy(() => PatientArgsSchema)]).optional(),
		labTest: z.union([z.boolean(), z.lazy(() => LabTestFindManyArgsSchema)]).optional(),
		vitalSigns: z.union([z.boolean(), z.lazy(() => VitalSignsFindManyArgsSchema)]).optional(),
		diagnosis: z.union([z.boolean(), z.lazy(() => DiagnosisFindManyArgsSchema)]).optional(),
		Prescription: z.union([z.boolean(), z.lazy(() => PrescriptionFindManyArgsSchema)]).optional(),
		_count: z
			.union([z.boolean(), z.lazy(() => MedicalRecordsCountOutputTypeArgsSchema)])
			.optional(),
	})
	.strict()

export default MedicalRecordsSelectSchema
