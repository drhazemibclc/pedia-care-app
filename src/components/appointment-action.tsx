'use client'

import type { AppointmentStatus } from '@prisma/client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'

import { appointmentAction } from '@/app/actions/appointment'

import { Button } from './ui/button'
import { Textarea } from './ui/textarea'

interface ActionProps {
	id: string | number
	status: string
}
export const AppointmentAction = ({ id, status }: ActionProps) => {
	const [isLoading, setIsLoading] = useState(false)
	const [selected, setSelected] = useState('')
	const [reason, setReason] = useState('')
	const router = useRouter()

	const handleAction = async () => {
		try {
			setIsLoading(true)
			const newReason = reason || `Appointment has ben ${selected.toLowerCase()} on ${new Date()}`

			const resp = await appointmentAction(id, selected as AppointmentStatus, newReason)

			if (resp.success) {
				toast.success(resp.msg)

				router.refresh()
			} else if (resp.error) {
				toast.error(resp.msg)
			}
		} catch (error) {
			console.log(error)
			toast.error('Something went wrong. Try again later.')
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<div>
			<div className="flex items-center space-x-3">
				<Button
					className="bg-yellow-200 text-black"
					disabled={status === 'PENDING' || isLoading || status === 'COMPLETED'}
					onClick={() => setSelected('PENDING')}
					variant="outline"
				>
					Pending
				</Button>
				<Button
					className="bg-blue-200 text-black"
					disabled={status === 'SCHEDULED' || isLoading || status === 'COMPLETED'}
					onClick={() => setSelected('SCHEDULED')}
					variant="outline"
				>
					Approve
				</Button>
				<Button
					className="bg-emerald-200 text-black"
					disabled={status === 'COMPLETED' || isLoading || status === 'COMPLETED'}
					onClick={() => setSelected('COMPLETED')}
					variant="outline"
				>
					Completed
				</Button>
				<Button
					className="bg-red-200 text-black"
					disabled={status === 'CANCELLED' || isLoading || status === 'COMPLETED'}
					onClick={() => setSelected('CANCELLED')}
					variant="outline"
				>
					Cancel
				</Button>
			</div>
			{selected === 'CANCELLED' && (
				<Textarea
					className="mt-4"
					disabled={isLoading}
					onChange={e => setReason(e.target.value)}
					placeholder="Enter reason...."
				/>
			)}

			{selected && (
				<div className="mt-6 flex items-center justify-between rounded bg-red-100 p-4">
					<p className="">Are you sure you want to perform this action?</p>
					<Button
						disabled={isLoading}
						onClick={handleAction}
						type="button"
					>
						Yes
					</Button>
				</div>
			)}
		</div>
	)
}
