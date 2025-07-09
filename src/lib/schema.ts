import { z } from 'zod'

export const PatientFormSchema = z.object({
	firstName: z
		.string()
		.trim()
		.min(2, 'First name must be at least 2 characters')
		.max(30, "First name can't be more than 50 characters"),
	lastName: z
		.string()
		.trim()
		.min(2, 'dLast name must be at least 2 characters')
		.max(30, "First name can't be more than 50 characters"),
	dateOfBirth: z.coerce.date(),
	gender: z.enum(['MALE', 'FEMALE'], { message: 'Gender is required' }),

	phone: z.string().min(10, 'Enter phone number').max(10, 'Enter phone number'),
	email: z.string().email('Invalid email address.'),
	address: z
		.string()
		.min(5, 'Address must be at least 5 characters')
		.max(500, 'Address must be at most 500 characters'),
	maritalStatus: z.enum(['married', 'single', 'divorced', 'widowed', 'separated'], {
		message: 'Marital status is required.',
	}),
	nutritionalStatus: z.enum(['Normal', 'Wasted', 'Stunted', 'Malnourished', 'Overweight'], {
		message: 'Nutritional status is required.',
	}),
	emergencyContactName: z
		.string()
		.min(2, 'Emergency contact name is required.')
		.max(50, 'Emergency contact must be at most 50 characters'),
	emergencyContactNumber: z.string().min(10, 'Enter phone number').max(10, 'Enter phone number'),
	relation: z.enum(['mother', 'father', 'husband', 'wife', 'other'], {
		message: 'Relations with contact person required',
	}),
	bloodGroup: z.string().optional(),
	allergies: z.string().optional(),
	medicalConditions: z.string().optional(),
	medicalHistory: z.string().optional(),
	insuranceProvider: z.string().optional(),
	insuranceNumber: z.string().optional(),
	privacyConsent: z
		.boolean()
		.default(false)
		.refine(val => val === true, {
			message: 'You must agree to the privacy policy.',
		}),
	serviceConsent: z
		.boolean()
		.default(false)
		.refine(val => val === true, {
			message: 'You must agree to the terms of service.',
		}),
	medicalConsent: z
		.boolean()
		.default(false)
		.refine(val => val === true, {
			message: 'You must agree to the medical treatment terms.',
		}),
	img: z.string().optional(),
})

export const AppointmentSchema = z.object({
	doctorId: z.string().min(1, 'Select physician'),
	type: z.string().min(1, 'Select type of appointment'),
	appointmentDate: z.string().min(1, 'Select appointment date'),
	time: z.string().min(1, 'Select appointment time'),
	note: z.string().optional(),
})

export const DoctorSchema = z.object({
	name: z
		.string()
		.trim()
		.min(2, 'Name must be at least 2 characters')
		.max(50, 'Name must be at most 50 characters'),
	phone: z.string().min(10, 'Enter phone number').max(10, 'Enter phone number'),
	email: z.string().email('Invalid email address.'),
	address: z
		.string()
		.min(5, 'Address must be at least 5 characters')
		.max(500, 'Address must be at most 500 characters'),
	specialization: z.string().min(2, 'Specialization is required.'),
	licenseNumber: z.string().min(2, 'License number is required'),
	type: z.enum(['FULL', 'PART'], { message: 'Type is required.' }),
	department: z.string().min(2, 'Department is required.'),
	img: z.string().optional(),
	password: z
		.string()
		.min(8, { message: 'Password must be at least 8 characters long!' })
		.optional()
		.or(z.literal('')),
})

export const workingDaySchema = z.object({
	day: z.enum(['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']),
	startTime: z.string(),
	closeTime: z.string(),
})
export const WorkingDaysSchema = z.array(workingDaySchema).optional()

export const StaffSchema = z.object({
	name: z
		.string()
		.trim()
		.min(2, 'Name must be at least 2 characters')
		.max(50, 'Name must be at most 50 characters'),
	role: z.enum(['NURSE'], { message: 'Role is required.' }),
	phone: z.string().min(10, 'Contact must be 10-digits').max(10, 'Contact must be 10-digits'),
	email: z.string().email('Invalid email address.'),
	address: z
		.string()
		.min(5, 'Address must be at least 5 characters')
		.max(500, 'Address must be at most 500 characters'),
	licenseNumber: z.string().optional(),
	department: z.string().optional(),
	img: z.string().optional(),
	password: z
		.string()
		.min(8, { message: 'Password must be at least 8 characters long!' })
		.optional()
		.or(z.literal('')),
})

export const VitalSignsSchema = z.object({
	patientId: z.string(),
	medicalId: z.string(),
	bodyTemperature: z.coerce.number({
		message: 'Enter recorded body temperature',
	}),
	heartRate: z.string({ message: 'Enter recorded heartbeat rate' }),
	systolic: z.coerce.number({
		message: 'Enter recorded systolic blood pressure',
	}),
	diastolic: z.coerce.number({
		message: 'Enter recorded diastolic blood pressure',
	}),
	respiratoryRate: z.coerce.number().optional(),
	oxygenSaturation: z.coerce.number().optional(),
	weight: z.coerce.number({ message: 'Enter recorded weight (Kg)' }),
	height: z.coerce.number({ message: 'Enter recorded height (Cm)' }),
})

export const DiagnosisSchema = z.object({
	patientId: z.string(),
	medicalId: z.string(),
	doctorId: z.string(),
	symptoms: z.string({ message: 'Symptoms required' }),
	diagnosis: z.string({ message: 'Diagnosis required' }),
	notes: z.string().optional(),
	prescribedMedications: z.string().optional(),
	followUpPlan: z.string().optional(),
})

export const PaymentSchema = z.object({
	id: z.string(),
	// patientId: z.string(),
	// appointmentId: z.string(),
	billDate: z.coerce.date(),
	// paymentDate: z.string(),
	discount: z.string({ message: 'discount' }),
	totalAmount: z.string(),
	// amountPaid: z.string(),
})

export const PatientBillSchema = z.object({
	billId: z.string(),
	serviceId: z.string(),
	serviceDate: z.string(),
	appointmentId: z.string(),
	quantity: z.string({ message: 'Quantity is required' }),
	unitCost: z.string({ message: 'Unit cost is required' }),
	totalCost: z.string({ message: 'Total cost is required' }),
})

export const ServicesSchema = z.object({
	serviceName: z.string({ message: 'Service name is required' }),
	price: z.number({ message: 'Service price is required' }),
	description: z.string({ message: 'Service description is required' }),
})
