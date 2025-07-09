import { db } from '@/lib/db'

import { daysOfWeek } from '..'
import { processAppointments } from './patient'

export async function getAdminDashboardStats() {
	try {
		const todayDate = new Date().getDay()
		const today = daysOfWeek[todayDate]

		const [totalPatient, totalDoctors, appointments, doctors] = await Promise.all([
			db.patient.count(),
			db.doctor.count(),
			db.appointment.findMany({
				include: {
					patient: {
						select: {
							id: true,
							lastName: true,
							firstName: true,
							img: true,
							colorCode: true,
							gender: true,
							dateOfBirth: true,
						},
					},
					doctor: {
						select: {
							name: true,
							img: true,
							colorCode: true,
							specialization: true,
						},
					},
				},
				orderBy: { appointmentDate: 'desc' },
			}),
			db.doctor.findMany({
				where: {
					workingDays: {
						some: { day: { equals: today, mode: 'insensitive' } },
					},
				},
				select: {
					id: true,
					name: true,
					specialization: true,
					img: true,
					colorCode: true,
				},
				take: 5,
			}),
		])

		const { appointmentCounts, monthlyData } = await processAppointments(appointments)

		const last5Records = appointments.slice(0, 5)

		return {
			success: true,
			totalPatient,
			totalDoctors,
			appointmentCounts,
			availableDoctors: doctors,
			monthlyData,
			last5Records,
			totalAppointments: appointments.length,
			status: 200,
		}
	} catch (error) {
		console.log(error)

		return { error: true, message: 'Something went wrong' }
	}
}

export async function getServices() {
	try {
		const data = await db.services.findMany({
			orderBy: { serviceName: 'asc' },
		})

		if (!data) {
			return {
				success: false,
				message: 'Data not found',
				status: 404,
				data: [],
			}
		}

		return {
			success: true,
			data,
		}
	} catch (error) {
		console.log(error)
		return { success: false, message: 'Internal Server Error', status: 500 }
	}
}
