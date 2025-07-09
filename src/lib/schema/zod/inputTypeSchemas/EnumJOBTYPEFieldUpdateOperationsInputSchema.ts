import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { JOBTYPESchema } from './JOBTYPESchema'

export const EnumJOBTYPEFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumJOBTYPEFieldUpdateOperationsInput> =
	z
		.object({
			set: z.lazy(() => JOBTYPESchema).optional(),
		})
		.strict()

export default EnumJOBTYPEFieldUpdateOperationsInputSchema
