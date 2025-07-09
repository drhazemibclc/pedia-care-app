import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AccountUncheckedCreateNestedManyWithoutUserInputSchema } from './AccountUncheckedCreateNestedManyWithoutUserInputSchema'
import { DoctorUncheckedCreateNestedManyWithoutUserInputSchema } from './DoctorUncheckedCreateNestedManyWithoutUserInputSchema'
import { SessionUncheckedCreateNestedManyWithoutUserInputSchema } from './SessionUncheckedCreateNestedManyWithoutUserInputSchema'
import { StaffUncheckedCreateNestedManyWithoutUserInputSchema } from './StaffUncheckedCreateNestedManyWithoutUserInputSchema'

export const UserUncheckedCreateWithoutPatientInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutPatientInput> =
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
			sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
			accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
			Staff: z.lazy(() => StaffUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
			Doctor: z.lazy(() => DoctorUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
		})
		.strict()

export default UserUncheckedCreateWithoutPatientInputSchema
