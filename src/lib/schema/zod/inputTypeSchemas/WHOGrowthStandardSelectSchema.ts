import type { Prisma } from '@prisma/client'
import { z } from 'zod'

export const WHOGrowthStandardSelectSchema: z.ZodType<Prisma.WHOGrowthStandardSelect> = z
	.object({
		id: z.boolean().optional(),
		ageInMonths: z.boolean().optional(),
		gender: z.boolean().optional(),
		measurementType: z.boolean().optional(),
		lValue: z.boolean().optional(),
		mValue: z.boolean().optional(),
		sValue: z.boolean().optional(),
		sd0: z.boolean().optional(),
		sd1neg: z.boolean().optional(),
		sd1pos: z.boolean().optional(),
		sd2neg: z.boolean().optional(),
		sd2pos: z.boolean().optional(),
		sd3neg: z.boolean().optional(),
		sd3pos: z.boolean().optional(),
		sd4neg: z.boolean().optional(),
		sd4pos: z.boolean().optional(),
		createdAt: z.boolean().optional(),
		updatedAt: z.boolean().optional(),
	})
	.strict()

export default WHOGrowthStandardSelectSchema
