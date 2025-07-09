import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { AccountOrderByRelationAggregateInputSchema } from './AccountOrderByRelationAggregateInputSchema'
import { DoctorOrderByRelationAggregateInputSchema } from './DoctorOrderByRelationAggregateInputSchema'
import { PatientOrderByRelationAggregateInputSchema } from './PatientOrderByRelationAggregateInputSchema'
import { SessionOrderByRelationAggregateInputSchema } from './SessionOrderByRelationAggregateInputSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { SortOrderSchema } from './SortOrderSchema'
import { StaffOrderByRelationAggregateInputSchema } from './StaffOrderByRelationAggregateInputSchema'

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		name: z.lazy(() => SortOrderSchema).optional(),
		email: z.lazy(() => SortOrderSchema).optional(),
		emailVerified: z.lazy(() => SortOrderSchema).optional(),
		image: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		createdAt: z.lazy(() => SortOrderSchema).optional(),
		updatedAt: z.lazy(() => SortOrderSchema).optional(),
		role: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		banned: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		banReason: z
			.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
			.optional(),
		banExpires: z
			.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
			.optional(),
		sessions: z.lazy(() => SessionOrderByRelationAggregateInputSchema).optional(),
		accounts: z.lazy(() => AccountOrderByRelationAggregateInputSchema).optional(),
		Staff: z.lazy(() => StaffOrderByRelationAggregateInputSchema).optional(),
		Doctor: z.lazy(() => DoctorOrderByRelationAggregateInputSchema).optional(),
		Patient: z.lazy(() => PatientOrderByRelationAggregateInputSchema).optional(),
	})
	.strict()

export default UserOrderByWithRelationInputSchema
