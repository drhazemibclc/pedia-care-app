import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { GenderSchema } from './GenderSchema'
import { MeasurementTypeSchema } from './MeasurementTypeSchema'

export const WHOGrowthStandardCreateManyInputSchema: z.ZodType<Prisma.WHOGrowthStandardCreateManyInput> =
	z
		.object({
			id: z.number().int().optional(),
			ageInMonths: z.number().int(),
			gender: z.lazy(() => GenderSchema),
			measurementType: z.lazy(() => MeasurementTypeSchema),
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
			sd4neg: z.number().optional().nullable(),
			sd4pos: z.number().optional().nullable(),
			createdAt: z.coerce.date().optional(),
			updatedAt: z.coerce.date().optional(),
		})
		.strict()

export default WHOGrowthStandardCreateManyInputSchema
