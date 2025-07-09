import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AccountUncheckedCreateNestedManyWithoutUserInputSchema } from './AccountUncheckedCreateNestedManyWithoutUserInputSchema'
import { DoctorUncheckedCreateNestedManyWithoutUserInputSchema } from './DoctorUncheckedCreateNestedManyWithoutUserInputSchema'
import { PatientUncheckedCreateNestedManyWithoutUserInputSchema } from './PatientUncheckedCreateNestedManyWithoutUserInputSchema'
import { SessionUncheckedCreateNestedManyWithoutUserInputSchema } from './SessionUncheckedCreateNestedManyWithoutUserInputSchema'

export const UserUncheckedCreateWithoutStaffInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutStaffInput> =
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
			Doctor: z.lazy(() => DoctorUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
			Patient: z.lazy(() => PatientUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
		})
		.strict()

export default UserUncheckedCreateWithoutStaffInputSchema
