import { z } from 'zod'

export const PrescriptionScalarFieldEnumSchema = z.enum([
	'id',
	'medicalRecordId',
	'doctorId',
	'patientId',
	'medicationName',
	'dosage',
	'frequency',
	'duration',
	'instructions',
	'issuedDate',
	'endDate',
	'status',
	'createdAt',
	'updatedAt',
])

export default PrescriptionScalarFieldEnumSchema
