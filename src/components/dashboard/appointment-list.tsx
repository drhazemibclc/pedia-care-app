// app/components/dashboard/appointment-list.tsx

import { motion } from 'framer-motion'
import React from 'react'

import type { Appointment } from '@/lib/schema'

import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import AppointmentItem from './appointment-item'

// --- REMOVE THE LOCAL APPOINTMENT INTERFACE HERE ---
// interface Appointment { ... }

// Import the shared Appointment interface

interface AppointmentListProps {
	appointments: Appointment[]
	title?: string
	onViewAppointmentDetails?: (id: number) => void
}

export const AppointmentList = React.memo(
	({
		appointments,
		title = 'Recent Appointments',
		onViewAppointmentDetails,
	}: AppointmentListProps) => {
		const containerVariants = {
			hidden: { opacity: 0 },
			show: {
				opacity: 1,
				transition: {
					staggerChildren: 0.1,
				},
			},
		}

		const itemVariants = {
			hidden: { opacity: 0, y: 20 },
			show: { opacity: 1, y: 0 },
		}

		return (
			<Card>
				<CardHeader>
					<CardTitle>{title}</CardTitle>
				</CardHeader>
				<CardContent>
					<motion.div
						animate="show"
						className="space-y-4"
						initial="hidden"
						variants={containerVariants}
					>
						{appointments.length === 0 ? (
							<p className="py-4 text-center text-gray-500 dark:text-gray-400">
								No appointments found.
							</p>
						) : (
							appointments.map(appointment => (
								<AppointmentItem
									animationVariants={itemVariants}
									appointment={appointment}
									key={appointment.id}
									onViewDetails={onViewAppointmentDetails}
								/>
							))
						)}
					</motion.div>
				</CardContent>
			</Card>
		)
	},
)

AppointmentList.displayName = 'AppointmentList'
