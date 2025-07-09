import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { StatusSchema } from './StatusSchema'

export const EnumStatusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumStatusFieldUpdateOperationsInput> =
	z
		.object({
			set: z.lazy(() => StatusSchema).optional(),
		})
		.strict()

export default EnumStatusFieldUpdateOperationsInputSchema
