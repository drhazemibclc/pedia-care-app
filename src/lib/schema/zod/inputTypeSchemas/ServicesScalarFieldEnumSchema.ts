import { z } from 'zod'

export const ServicesScalarFieldEnumSchema = z.enum([
	'id',
	'serviceName',
	'description',
	'price',
	'category',
	'duration',
	'isAvailable',
	'createdAt',
	'updatedAt',
])

export default ServicesScalarFieldEnumSchema
