import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AccountCreateNestedManyWithoutUserInputSchema } from './AccountCreateNestedManyWithoutUserInputSchema'
import { PatientCreateNestedManyWithoutUserInputSchema } from './PatientCreateNestedManyWithoutUserInputSchema'
import { SessionCreateNestedManyWithoutUserInputSchema } from './SessionCreateNestedManyWithoutUserInputSchema'
import { StaffCreateNestedManyWithoutUserInputSchema } from './StaffCreateNestedManyWithoutUserInputSchema'

export const UserCreateWithoutDoctorInputSchema: z.ZodType<Prisma.UserCreateWithoutDoctorInput> = z
	.object({
		id: z.string(),
		name: z.string(),
		email: z.string(),
		emailVerified: z.boolean(),
		image: z.string().optional().nullable(),
		createdAt: z.coerce.date(),
		updatedAt: z.coerce.date(),
		role: z.string().optional().nullable(),
		banned: z.boolean().optional().nullable(),
		banReason: z.string().optional().nullable(),
		banExpires: z.coerce.date().optional().nullable(),
		sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
		accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
		Staff: z.lazy(() => StaffCreateNestedManyWithoutUserInputSchema).optional(),
		Patient: z.lazy(() => PatientCreateNestedManyWithoutUserInputSchema).optional(),
	})
	.strict()

export default UserCreateWithoutDoctorInputSchema
