import { z } from 'zod'

export const RatingScalarFieldEnumSchema = z.enum([
	'id',
	'staffId',
	'patientId',
	'rating',
	'comment',
	'createdAt',
	'updatedAt',
])

export default RatingScalarFieldEnumSchema
