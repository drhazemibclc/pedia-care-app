import type { AppointmentStatus } from '@prisma/client'

import { cn } from '@/lib/utils'

const status_color = {
	PENDING: 'bg-yellow-600/15 text-yellow-600',
	SCHEDULED: 'bg-emerald-600/15 text-emerald-600',
	CANCELLED: 'bg-red-600/15 text-red-600',
	COMPLETED: 'bg-blue-600/15 text-blue-600',
}

export const AppointmentStatusIndicator = ({ status }: { status: AppointmentStatus }) => {
	return (
		<p
			className={cn(
				'w-fit rounded-full px-2 py-1 text-xs capitalize lg:text-sm',
				status_color[status],
			)}
		>
			{status}
		</p>
	)
}
