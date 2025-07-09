import { endOfMonth, format, getMonth, startOfYear } from 'date-fns'

// --- Utility types and functions from your original file ---
export type AppointmentStatus = 'CANCELLED' | 'COMPLETED' | 'PENDING' | 'SCHEDULED'

interface Appointment {
	appointmentDate: Date // Renamed from appointment_date to match Drizzle schema
	status: AppointmentStatus
}

function isValidStatus(status: string): status is AppointmentStatus {
	return ['CANCELLED', 'COMPLETED', 'PENDING', 'SCHEDULED'].includes(status)
}

const initializeMonthlyData = () => {
	const this_year = new Date().getFullYear()

	const months = Array.from({ length: getMonth(new Date()) + 1 }, (_, index) => ({
		appointment: 0,
		completed: 0,
		name: format(new Date(this_year, index), 'MMM'),
	}))
	return months
}

// Exported for use in other routers (e.g., doctor.router.ts and admin.router.ts)
export const processAppointments = async (appointments: Appointment[]) => {
	const monthlyData = initializeMonthlyData()

	const appointmentCounts = appointments.reduce<Record<AppointmentStatus, number>>(
		(acc, appointment) => {
			const status = appointment.status
			const appointmentDate = appointment?.appointmentDate // Renamed

			const monthIndex = getMonth(appointmentDate)

			if (
				appointmentDate >= startOfYear(new Date()) &&
				appointmentDate <= endOfMonth(new Date()) &&
				monthlyData[monthIndex] // check that this exists
			) {
				monthlyData[monthIndex].appointment += 1

				if (status === 'COMPLETED') {
					monthlyData[monthIndex].completed += 1
				}
			}

			if (isValidStatus(status)) {
				acc[status] = (acc[status] || 0) + 1
			}

			return acc
		},
		{
			CANCELLED: 0,
			COMPLETED: 0,
			PENDING: 0,
			SCHEDULED: 0,
		},
	)

	return { appointmentCounts, monthlyData }
}

export interface AllAppointmentsProps {
	page: number | string
	limit?: number | string
	search?: string
	id?: string
}
