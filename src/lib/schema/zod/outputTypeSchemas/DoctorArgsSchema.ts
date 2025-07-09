import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DoctorIncludeSchema } from '../inputTypeSchemas/DoctorIncludeSchema'
import { DoctorSelectSchema } from '../inputTypeSchemas/DoctorSelectSchema'

export const DoctorArgsSchema: z.ZodType<Prisma.DoctorDefaultArgs> = z
	.object({
		select: z.lazy(() => DoctorSelectSchema).optional(),
		include: z.lazy(() => DoctorIncludeSchema).optional(),
	})
	.strict()

export default DoctorArgsSchema
