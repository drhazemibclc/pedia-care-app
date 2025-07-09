import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AccountCreateNestedManyWithoutUserInputSchema } from './AccountCreateNestedManyWithoutUserInputSchema'
import { DoctorCreateNestedManyWithoutUserInputSchema } from './DoctorCreateNestedManyWithoutUserInputSchema'
import { PatientCreateNestedManyWithoutUserInputSchema } from './PatientCreateNestedManyWithoutUserInputSchema'
import { StaffCreateNestedManyWithoutUserInputSchema } from './StaffCreateNestedManyWithoutUserInputSchema'

export const UserCreateWithoutSessionsInputSchema: z.ZodType<Prisma.UserCreateWithoutSessionsInput> =
	z
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
			accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
			Staff: z.lazy(() => StaffCreateNestedManyWithoutUserInputSchema).optional(),
			Doctor: z.lazy(() => DoctorCreateNestedManyWithoutUserInputSchema).optional(),
			Patient: z.lazy(() => PatientCreateNestedManyWithoutUserInputSchema).optional(),
		})
		.strict()

export default UserCreateWithoutSessionsInputSchema
