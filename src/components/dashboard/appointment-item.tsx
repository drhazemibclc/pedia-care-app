// app/components/dashboard/appointment-item.tsx

import { format } from 'date-fns'
import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'

import { cn } from '@/lib/utils'

import { Button } from '../ui/button'
import { Image } from '../ui/image' // <--- Import your new Image component here

// Define the Appointment interface if it's not already globally available or shared
interface Appointment {
	id: number
	appointmentDate: Date | string
	time: string
	patient: {
		id: string // Ensure patient has an ID for navigation
		firstName: string
		lastName: string
		img?: string | null
		colorCode?: string | null
	}
	doctor: {
		name: string
		specialization: string
	}
	status: 'COMPLETED' | 'CANCELLED' | 'SCHEDULED' | string
}

interface AppointmentItemProps {
	appointment: Appointment
	animationVariants: {
		hidden: { opacity: number; y: number }
		show: { opacity: number; y: number }
	}
	onViewDetails?: (id: number) => void
}

const AppointmentItem: React.FC<AppointmentItemProps> = ({
	appointment,
	animationVariants,
	onViewDetails,
}) => {
	const statusClasses = React.useMemo(() => {
		return cn('rounded-full px-2 py-1 text-xs', {
			'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400':
				appointment.status === 'COMPLETED',
			'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400':
				appointment.status === 'CANCELLED',
			'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400':
				appointment.status === 'SCHEDULED',
			'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400': ![
				'COMPLETED',
				'CANCELLED',
				'SCHEDULED',
			].includes(appointment.status),
		})
	}, [appointment.status])

	const appointmentDateTime = React.useMemo(() => {
		return typeof appointment.appointmentDate === 'string'
			? new Date(appointment.appointmentDate)
			: appointment.appointmentDate
	}, [appointment.appointmentDate])

	const patientInitials = React.useMemo(() => {
		return `${appointment.patient.firstName[0]?.toUpperCase()}${appointment.patient.lastName[0]?.toUpperCase()}`
	}, [appointment.patient.firstName, appointment.patient.lastName])

	const handleViewDetailsClick = React.useCallback(() => {
		onViewDetails?.(appointment.id)
	}, [onViewDetails, appointment.id])

	return (
		<motion.div
			className="flex items-center justify-between rounded-lg border p-4"
			variants={animationVariants}
		>
			<div className="flex items-center space-x-4">
				<Link
					className="group flex items-center space-x-4"
					to={`/patients/${appointment.patient.id}`}
				>
					<div
						className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-white transition-colors group-hover:brightness-90"
						style={{ backgroundColor: appointment.patient.colorCode || '#6366F1' }}
					>
						{appointment.patient.img ? (
							<Image // <--- Use your Image component here
								alt={`${appointment.patient.firstName} ${appointment.patient.lastName}'s avatar`}
								className="h-full w-full rounded-full object-cover"
								src={appointment.patient.img}
							/>
						) : (
							<span className="font-semibold text-sm">{patientInitials}</span>
						)}
					</div>
					<div>
						<h3 className="font-medium group-hover:underline">
							{appointment.patient.firstName} {appointment.patient.lastName}
						</h3>
						<p className="text-gray-500 text-sm dark:text-gray-400">
							{format(appointmentDateTime, 'MMM dd, yyyy')} • {appointment.time}{' '}
							{/* Changed 'â€¢' to '•' and added 'yyyy' */}
						</p>
					</div>
				</Link>
			</div>

			<div className="flex items-center space-x-2">
				<span className={statusClasses}>{appointment.status}</span>
				<Button
					asChild={!onViewDetails}
					onClick={onViewDetails ? handleViewDetailsClick : undefined}
					size="sm"
					variant="ghost"
				>
					{onViewDetails ? (
						<span>View</span>
					) : (
						<Link to={`/appointments/${appointment.id}`}>View</Link>
					)}
				</Button>
			</div>
		</motion.div>
	)
}

export default React.memo(AppointmentItem)
