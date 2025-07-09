import { z } from 'zod'

export const VaccinationScalarFieldEnumSchema = z.enum([
	'id',
	'patientId',
	'administeredBy',
	'vaccineName',
	'vaccineBatchNo',
	'administrationRoute',
	'siteOfInjection',
	'administeredDate',
	'nextDueDate',
	'notes',
	'createdAt',
	'updatedAt',
])

export default VaccinationScalarFieldEnumSchema
