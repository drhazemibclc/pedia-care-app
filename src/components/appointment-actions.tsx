import { EllipsisVertical, User } from 'lucide-react'
import Link from 'next/link'

import { getSession } from '@/lib/auth'
import { checkRole } from '@/utils/roles'

import { AppointmentActionDialog } from './appointment-action-dialog'
import { Button } from './ui/button'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'

interface ActionsProps {
	userId: string
	status: string
	patientId: string
	doctorId: string
	appointmentId: number
}

export const AppointmentActionOptions = async ({
	patientId,
	doctorId,
	status,
	appointmentId,
}: ActionsProps) => {
	const session = await getSession()
	const user = session?.user
	const isAdmin = await checkRole('ADMIN')

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					className="flex items-center justify-center rounded-full p-1"
					variant="outline"
				>
					<EllipsisVertical
						className="text-gray-500 text-sm"
						size={16}
					/>
				</Button>
			</PopoverTrigger>

			<PopoverContent className="w-56 p-3">
				<div className="flex flex-col items-start space-y-3">
					<span className="text-gray-400 text-xs">Perform Actions</span>
					<Button
						asChild
						className="w-full justify-start"
						size="sm"
						variant="ghost"
					>
						<Link href={`appointments/${appointmentId}`}>
							<User size={16} /> View Full Details
						</Link>
					</Button>

					{status !== 'SCHEDULED' && (
						<AppointmentActionDialog
							disabled={isAdmin || user.userId === doctorId}
							id={appointmentId}
							type="approve"
						/>
					)}
					<AppointmentActionDialog
						disabled={
							status === 'PENDING' &&
							(isAdmin || user.userId === doctorId || user.userId === patientId)
						}
						id={appointmentId}
						type="cancel"
					/>
				</div>
			</PopoverContent>
		</Popover>
	)
}
