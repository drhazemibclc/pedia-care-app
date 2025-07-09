import { z } from 'zod'

export const DiagnosisScalarFieldEnumSchema = z.enum([
	'id',
	'patientId',
	'medicalId',
	'doctorId',
	'symptoms',
	'diagnosis',
	'notes',
	'prescribedMedications',
	'followUpPlan',
	'createdAt',
	'updatedAt',
])

export default DiagnosisScalarFieldEnumSchema
