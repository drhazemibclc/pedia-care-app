import type { AppointmentStatus, Doctor, Patient } from '@prisma/client'
import type z from 'zod'

import type {
	AppointmentSchema,
	DiagnosisSchema,
	DoctorSchema,
	PatientBillSchema,
	PatientFormSchema,
	PaymentSchema,
	ServicesSchema,
	StaffSchema,
	VitalSignsSchema,
	WorkingDaysSchema,
} from '@/lib/schema'

export type AppointmentsChartProps = {
	name: string
	appointment: number
	completed: number
}[]

export type Appointment = {
	id: number
	patient_id: string
	doctor_id: string
	type: string
	appointment_date: Date
	time: string
	status: AppointmentStatus

	patient: Patient
	doctor: Doctor
}

export type AvailableDoctorProps = {
	id: string
	name: string
	specialization: string
	img?: string
	colorCode?: string
	working_days: {
		day: string
		start_time: string
		close_time: string
	}[]
}[]

export type PartialPatient = {
	firstName: string
	lastName: string
	gender: string
	img: string | null
	colorCode: string | null
}

export type PartialDoctor = {
	name: string
	img: string | null
	colorCode: string | null
	specialization: string
}

export type PartialAppointment = {
	id: number
	appointment_date: Date
	time: string
	status: AppointmentStatus

	patient: PartialPatient
	doctor: PartialDoctor
}

export type PatientInput = z.infer<typeof PatientFormSchema>
export type StaffInput = z.infer<typeof StaffSchema>
export type DoctorInput = z.infer<typeof DoctorSchema>
export type ServiceInput = z.infer<typeof ServicesSchema>
export type WorkScheduleInput = z.infer<typeof WorkingDaysSchema>
export type AppointmentInput = z.infer<typeof AppointmentSchema>
export type VitalSignsInput = z.infer<typeof VitalSignsSchema>
export type DiagnosisInput = z.infer<typeof DiagnosisSchema>
export type PaymentInput = z.infer<typeof PaymentSchema>
export type PatientBillInput = z.infer<typeof PatientBillSchema>
export type ServicesInput = z.infer<typeof ServicesSchema>
