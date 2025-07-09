import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { ServicesIncludeSchema } from '../inputTypeSchemas/ServicesIncludeSchema'
import { ServicesSelectSchema } from '../inputTypeSchemas/ServicesSelectSchema'

export const ServicesArgsSchema: z.ZodType<Prisma.ServicesDefaultArgs> = z
	.object({
		select: z.lazy(() => ServicesSelectSchema).optional(),
		include: z.lazy(() => ServicesIncludeSchema).optional(),
	})
	.strict()

export default ServicesArgsSchema
