import { z } from 'zod'

import { GenderSchema } from '../inputTypeSchemas/GenderSchema'
import { MeasurementTypeSchema } from '../inputTypeSchemas/MeasurementTypeSchema'

/////////////////////////////////////////
// WHO GROWTH STANDARD SCHEMA
/////////////////////////////////////////

export const WHOGrowthStandardSchema = z.object({
	gender: GenderSchema,
	measurementType: MeasurementTypeSchema,
	id: z.number().int(),
	ageInMonths: z.number().int(),
	lValue: z.number(),
	mValue: z.number(),
	sValue: z.number(),
	sd0: z.number(),
	sd1neg: z.number(),
	sd1pos: z.number(),
	sd2neg: z.number(),
	sd2pos: z.number(),
	sd3neg: z.number(),
	sd3pos: z.number(),
	sd4neg: z.number().nullish(),
	sd4pos: z.number().nullish(),
	createdAt: z.coerce.date(),
	updatedAt: z.coerce.date(),
})

export type WHOGrowthStandard = z.infer<typeof WHOGrowthStandardSchema>

/////////////////////////////////////////
// WHO GROWTH STANDARD PARTIAL SCHEMA
/////////////////////////////////////////

export const WHOGrowthStandardPartialSchema = WHOGrowthStandardSchema.partial()

export type WHOGrowthStandardPartial = z.infer<typeof WHOGrowthStandardPartialSchema>

/////////////////////////////////////////
// WHO GROWTH STANDARD OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const WHOGrowthStandardOptionalDefaultsSchema = WHOGrowthStandardSchema.merge(
	z.object({
		id: z.number().int().optional(),
		createdAt: z.coerce.date().optional(),
		updatedAt: z.coerce.date().optional(),
	}),
)

export type WHOGrowthStandardOptionalDefaults = z.infer<
	typeof WHOGrowthStandardOptionalDefaultsSchema
>

export default WHOGrowthStandardSchema
