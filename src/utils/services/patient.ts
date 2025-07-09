import type { Patient } from '@prisma/client'

import { db } from '@/lib/db'
import { processAppointments } from '@/types/helper'

import { daysOfWeek } from '..'

export async function getPatientDashboardStatistics(id: string) {
	try {
		if (!id) {
			return {
				success: false,
				message: 'No data found',
				data: null,
			}
		}

		const data = await db.patient.findUnique({
			where: { id },
			select: {
				id: true,
				firstName: true,
				lastName: true,
				gender: true,
				img: true,
				colorCode: true,
			},
		})

		if (!data) {
			return {
				success: false,
				message: 'Patient data not found',
				status: 200,
				data: null,
			}
		}

		const appointments = await db.appointment.findMany({
			where: { patientId: data?.id },
			include: {
				doctor: {
					select: {
						id: true,
						name: true,
						img: true,
						specialization: true,
						colorCode: true,
					},
				},
				patient: {
					select: {
						firstName: true,
						lastName: true,
						gender: true,
						dateOfBirth: true,
						img: true,
						colorCode: true,
					},
				},
			},

			orderBy: { appointmentDate: 'desc' },
		})

		const { appointmentCounts, monthlyData } = await processAppointments(appointments)
		const last5Records = appointments.slice(0, 5)

		const today = daysOfWeek[new Date().getDay()]

		const availableDoctor = await db.doctor.findMany({
			select: {
				id: true,
				name: true,
				specialization: true,
				img: true,
				workingDays: true,
				colorCode: true,
			},
			where: {
				workingDays: {
					some: {
						day: {
							equals: today,
							mode: 'insensitive',
						},
					},
				},
			},
			take: 4,
		})

		return {
			success: true,
			data,
			appointmentCounts,
			last5Records,
			totalAppointments: appointments.length,
			availableDoctor,
			monthlyData,
			status: 200,
		}
	} catch (error) {
		console.log(error)
		return { success: false, message: 'Internal Server Error', status: 500 }
	}
}

export async function getPatientById(id: string) {
	try {
		const patient = await db.patient.findUnique({
			where: { id },
		})

		if (!patient) {
			return {
				success: false,
				message: 'Patient data not found',
				status: 200,
				data: null,
			}
		}

		return { success: true, data: patient, status: 200 }
	} catch (error) {
		console.log(error)
		return { success: false, message: 'Internal Server Error', status: 500 }
	}
}

interface ApiResponse<T> {
	success: boolean
	data?: T
	message?: string
	status: number
}

// --- getPatientFullDataById ---

// Corrected PatientWithAppointments interface:
// It extends the base Patient type and explicitly adds the included relations.
interface PatientWithAppointments extends Patient {
	_count: {
		appointments: number
	}
	appointments: {
		appointmentDate: Date
	}[]
}

// Define the structure of the data returned by getPatientFullDataById
interface PatientFullData {
	id: string
	firstName: string
	lastName: string
	email: string | null
	phone: string | null
	address: string | null
	gender: 'MALE' | 'FEMALE' | 'OTHER' // Adjust based on your Prisma enum
	dateOfBirth: Date | null
	colorCode: string | null
	img: string | null
	createdAt: Date
	updatedAt: Date
	totalAppointments: number
	lastVisit: Date | null
}

export async function getPatientFullDataById(id: string): Promise<ApiResponse<PatientFullData>> {
	try {
		// Prisma's generated types are powerful. When you use `include`,
		// the returned type from Prisma will already correctly include those properties.
		// We can leverage `Prisma.PatientGetPayload` for this.
		const patient = (await db.patient.findFirst({
			where: {
				OR: [{ id }, { email: id }],
			},
			include: {
				_count: { select: { appointments: true } },
				appointments: {
					select: { appointmentDate: true },
					orderBy: { appointmentDate: 'desc' },
					take: 1,
				},
			},
		})) as PatientWithAppointments | null // Explicitly cast the result to our defined interface

		if (!patient) {
			return {
				success: false,
				message: 'Patient data not found.',
				status: 404,
			}
		}

		// Safely get the last visit date
		const lastVisit: Date | null = patient.appointments[0]?.appointmentDate || null

		// Destructure patient to exclude _count and appointments from the top level
		// and then add formatted/derived fields
		const { _count, ...restPatient } = patient

		return {
			success: true,
			data: {
				...restPatient, // Spread the base patient data
				totalAppointments: _count.appointments, // Use the count from _count
				lastVisit,
			},
			status: 200,
		}
	} catch (error) {
		console.error(
			'Error fetching patient full data by ID:',
			error instanceof Error ? error.message : error,
		)
		return { success: false, message: 'Failed to retrieve patient data.', status: 500 }
	}
}

export async function getAllPatients({
	page,
	limit,
	search,
}: {
	page: number | string
	limit?: number | string
	search?: string
}) {
	try {
		const PAGE_NUMBER = Number(page) <= 0 ? 1 : Number(page)
		const LIMIT = Number(limit) || 10

		const SKIP = (PAGE_NUMBER - 1) * LIMIT

		const [patients, totalRecords] = await Promise.all([
			db.patient.findMany({
				where: {
					OR: [
						{ firstName: { contains: search, mode: 'insensitive' } },
						{ lastName: { contains: search, mode: 'insensitive' } },
						{ phone: { contains: search, mode: 'insensitive' } },
						{ email: { contains: search, mode: 'insensitive' } },
					],
				},
				include: {
					appointments: {
						select: {
							medical: {
								select: { createdAt: true, treatmentPlan: true },
								orderBy: { createdAt: 'desc' },
								take: 1,
							},
						},
						orderBy: { appointmentDate: 'desc' },
						take: 1,
					},
				},
				skip: SKIP,
				take: LIMIT,
				orderBy: { firstName: 'asc' },
			}),
			db.patient.count(),
		])

		const totalPages = Math.ceil(totalRecords / LIMIT)

		return {
			success: true,
			data: patients,
			totalRecords,
			totalPages,
			currentPage: PAGE_NUMBER,
			status: 200,
		}
	} catch (error) {
		console.log(error)
		return { success: false, message: 'Internal Server Error', status: 500 }
	}
}
