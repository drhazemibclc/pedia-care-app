import { z } from 'zod'

export const WHOGrowthStandardScalarFieldEnumSchema = z.enum([
	'id',
	'ageInMonths',
	'gender',
	'measurementType',
	'lValue',
	'mValue',
	'sValue',
	'sd0',
	'sd1neg',
	'sd1pos',
	'sd2neg',
	'sd2pos',
	'sd3neg',
	'sd3pos',
	'sd4neg',
	'sd4pos',
	'createdAt',
	'updatedAt',
])

export default WHOGrowthStandardScalarFieldEnumSchema
