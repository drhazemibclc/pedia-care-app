import { z } from 'zod'

export const DoctorScalarFieldEnumSchema = z.enum([
	'id',
	'email',
	'name',
	'userId',
	'specialization',
	'licenseNumber',
	'phone',
	'address',
	'department',
	'img',
	'colorCode',
	'availabilityStatus',
	'type',
	'createdAt',
	'updatedAt',
])

export default DoctorScalarFieldEnumSchema
