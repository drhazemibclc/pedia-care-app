import { z } from 'zod'

export const MedicalRecordsScalarFieldEnumSchema = z.enum([
	'id',
	'patientId',
	'appointmentId',
	'doctorId',
	'treatmentPlan',
	'prescriptions',
	'labRequest',
	'notes',
	'createdAt',
	'updatedAt',
])

export default MedicalRecordsScalarFieldEnumSchema
