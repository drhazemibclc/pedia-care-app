import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { ServicesCountOutputTypeSelectSchema } from './ServicesCountOutputTypeSelectSchema'

export const ServicesCountOutputTypeArgsSchema: z.ZodType<Prisma.ServicesCountOutputTypeDefaultArgs> =
	z
		.object({
			select: z.lazy(() => ServicesCountOutputTypeSelectSchema).nullish(),
		})
		.strict()

export default ServicesCountOutputTypeSelectSchema
