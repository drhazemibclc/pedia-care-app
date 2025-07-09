import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AccountFindManyArgsSchema } from '../outputTypeSchemas/AccountFindManyArgsSchema'
import { DoctorFindManyArgsSchema } from '../outputTypeSchemas/DoctorFindManyArgsSchema'
import { PatientFindManyArgsSchema } from '../outputTypeSchemas/PatientFindManyArgsSchema'
import { SessionFindManyArgsSchema } from '../outputTypeSchemas/SessionFindManyArgsSchema'
import { StaffFindManyArgsSchema } from '../outputTypeSchemas/StaffFindManyArgsSchema'
import { UserCountOutputTypeArgsSchema } from '../outputTypeSchemas/UserCountOutputTypeArgsSchema'

export const UserIncludeSchema: z.ZodType<Prisma.UserInclude> = z
	.object({
		sessions: z.union([z.boolean(), z.lazy(() => SessionFindManyArgsSchema)]).optional(),
		accounts: z.union([z.boolean(), z.lazy(() => AccountFindManyArgsSchema)]).optional(),
		Staff: z.union([z.boolean(), z.lazy(() => StaffFindManyArgsSchema)]).optional(),
		Doctor: z.union([z.boolean(), z.lazy(() => DoctorFindManyArgsSchema)]).optional(),
		Patient: z.union([z.boolean(), z.lazy(() => PatientFindManyArgsSchema)]).optional(),
		_count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
	})
	.strict()

export default UserIncludeSchema
