import { z } from 'zod'

export const StaffScalarFieldEnumSchema = z.enum([
	'id',
	'email',
	'name',
	'phone',
	'userId',
	'address',
	'department',
	'img',
	'licenseNumber',
	'colorCode',
	'hireDate',
	'salary',
	'role',
	'status',
	'createdAt',
	'updatedAt',
])

export default StaffScalarFieldEnumSchema
