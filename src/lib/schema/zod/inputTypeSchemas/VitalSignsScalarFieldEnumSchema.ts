import { z } from 'zod'

export const VitalSignsScalarFieldEnumSchema = z.enum([
	'id',
	'patientId',
	'medicalId',
	'bodyTemperature',
	'systolic',
	'diastolic',
	'heartRate',
	'respiratoryRate',
	'oxygenSaturation',
	'weight',
	'height',
	'createdAt',
	'updatedAt',
])

export default VitalSignsScalarFieldEnumSchema
