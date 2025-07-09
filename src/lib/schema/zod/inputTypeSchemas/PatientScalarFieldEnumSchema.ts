import { z } from 'zod'

export const PatientScalarFieldEnumSchema = z.enum([
	'id',
	'firstName',
	'lastName',
	'userId',
	'dateOfBirth',
	'gender',
	'phone',
	'email',
	'maritalStatus',
	'nutritionalStatus',
	'address',
	'emergencyContactName',
	'emergencyContactNumber',
	'relation',
	'bloodGroup',
	'allergies',
	'medicalConditions',
	'medicalHistory',
	'insuranceProvider',
	'insuranceNumber',
	'privacyConsent',
	'serviceConsent',
	'medicalConsent',
	'img',
	'colorCode',
	'createdAt',
	'updatedAt',
])

export default PatientScalarFieldEnumSchema
