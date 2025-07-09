import { faker } from '@faker-js/faker'
import {
	AppointmentStatus,
	Gender,
	JOBTYPE,
	MeasurementType,
	PaymentMethod,
	PaymentStatus,
	type Prisma,
	PrismaClient,
	Role, // Make sure Role is imported if used
	ServiceCategory,
	Status, // Make sure Status is imported if used
} from '@prisma/client'
import { withAccelerate } from '@prisma/extension-accelerate'

// Initialize Prisma Client with Accelerate
const prisma = new PrismaClient().$extends(withAccelerate())

// Helper function to get random enum value
function getRandomEnumValue<T extends Record<string, string>>(enumObject: T): T[keyof T] {
	const enumValues = Object.values(enumObject)
	const randomIndex = faker.number.int({ min: 0, max: enumValues.length - 1 })
	return enumValues[randomIndex] as T[keyof T]
}

async function main() {
	console.log('Start seeding...')

	// --- Clear existing data (optional, for development) ---
	// Clear in reverse order of dependencies
	// await prisma.auditLog.deleteMany()
	// await prisma.rating.deleteMany()
	await prisma.payment.deleteMany()
	await prisma.patientBills.deleteMany()
	await prisma.labTest.deleteMany()
	await prisma.prescription.deleteMany()
	await prisma.diagnosis.deleteMany()
	await prisma.vitalSigns.deleteMany()
	await prisma.medicalRecords.deleteMany()
	await prisma.appointment.deleteMany()
	await prisma.workingDays.deleteMany()
	await prisma.doctor.deleteMany()
	await prisma.staff.deleteMany()
	await prisma.patient.deleteMany()
	await prisma.services.deleteMany()
	await prisma.wHOGrowthStandard.deleteMany()
	// Clear User table last if Patient, Doctor, Staff depend on it
	await prisma.user.deleteMany() // IMPORTANT: Uncomment this if User is an internal model you manage

	// --- Configuration for Data Generation ---
	const NUM_USERS_TO_GENERATE = 70 // Total users to create for linking to profiles
	const NUM_PATIENTS = 40
	const NUM_DOCTORS = 10
	const NUM_STAFF = 15
	const NUM_SERVICES = 20
	const NUM_APPOINTMENTS = 100
	const NUM_MEDICAL_RECORDS_PROBABILITY = 0.8
	const NUM_LAB_TESTS_PROBABILITY = 0.3
	const NUM_PRESCRIPTIONS_PROBABILITY = 0.7
	const NUM_DIAGNOSES_PROBABILITY = 0.7
	const NUM_VITAL_SIGNS_PROBABILITY = 0.9
	const NUM_RATINGS = 50
	const NUM_VACCINATIONS_PROBABILITY = 0.2
	const NUM_WORKING_DAYS_PER_DOCTOR = faker.number.int({ min: 3, max: 7 })
	const NUM_WHO_GROWTH_STANDARDS = 100

	// Define options for custom enums if they are not directly from PrismaClient
	const maritalStatusOptions = ['SINGLE', 'MARRIED', 'DIVORCED', 'WIDOWED', 'SEPARATED'] as const
	const nutritionalStatusOptions = ['NORMAL', 'WASTED', 'STUNTED', 'MALNOURISHED', 'OBESE'] as const

	// Ensure these are 'let' because they are reassigned by createManyAndReturn
	const patients: Prisma.PatientGetPayload<true>[] = []
	const doctors: Prisma.DoctorGetPayload<true>[] = []
	const staff: Prisma.StaffGetPayload<true>[] = []
	let services: Prisma.ServicesGetPayload<true>[] = []
	let appointments: Prisma.AppointmentGetPayload<true>[] = []
	let medicalRecords: Prisma.MedicalRecordsGetPayload<true>[] = []
	let internalUsers: Prisma.UserGetPayload<true>[] = []

	// --- Seed Internal Users FIRST ---
	console.log('Generating internal users...')
	const usersToCreate: Prisma.UserCreateManyInput[] = Array.from({
		length: NUM_USERS_TO_GENERATE,
	}).map(() => ({
		id: faker.string.uuid(), // This will be the ID referenced by Patient/Doctor/Staff's userId
		email: faker.internet.email(),
		name: faker.person.fullName(),
		emailVerified: faker.datatype.boolean(),
		createdAt: faker.date.anytime(),
		updatedAt: faker.date.recent(),
		// Assign a temporary default role, will be updated when profile is created
		role: getRandomEnumValue(Role), // Assign a random initial role, or a default 'USER'
		// password: 'password123', // Uncomment if your User model has a password field
	}))
	internalUsers = await prisma.user.createManyAndReturn({ data: usersToCreate })
	console.log(`Created ${internalUsers.length} internal users.`)

	// Create a pool of user IDs to assign to profiles, ensuring uniqueness
	const availableUserIds = faker.helpers.shuffle([...internalUsers.map(u => u.id)])

	// --- Seed Services ---
	const servicesData: Prisma.ServicesCreateInput[] = Array.from({ length: NUM_SERVICES }).map(
		() => ({
			serviceName: faker.commerce.productName(),
			description: faker.commerce.productDescription(),
			price: Number.parseFloat(faker.commerce.price({ min: 10, max: 500, dec: 2 })),
			category: getRandomEnumValue(ServiceCategory),
			duration: faker.number.int({ min: 15, max: 120 }),
			isAvailable: faker.datatype.boolean(),
		}),
	)
	services = await prisma.services.createManyAndReturn({ data: servicesData })
	console.log(`Created ${services.length} services.`)

	// --- Seed Patients ---
	console.log('Generating patients...')
	const patientsToCreateData: Prisma.PatientCreateInput[] = []
	const numPatientsToCreate = Math.min(NUM_PATIENTS, availableUserIds.length) // Ensure we don't exceed available users

	for (let i = 0; i < numPatientsToCreate; i++) {
		const userIdForProfile = availableUserIds.pop() // Take one ID from the pool
		if (!userIdForProfile) {
			console.warn('Ran out of available user IDs for patients. Breaking.')
			break
		}

		patientsToCreateData.push({
			id: faker.string.uuid(), // This is the @id for the Patient profile
			// REMOVE THIS LINE: userId: userIdForProfile, // <--- REMOVE THIS LINE
			user: { connect: { id: userIdForProfile } }, // Keep this, it correctly connects the User relation

			firstName: faker.person.firstName(),
			lastName: faker.person.lastName(),
			email: faker.internet.email(), // Should be unique
			dateOfBirth: faker.date.past({ years: 60, refDate: '2005-01-01T00:00:00.000Z' }),
			gender: getRandomEnumValue(Gender),
			phone: faker.phone.number(),
			maritalStatus: faker.helpers.arrayElement(maritalStatusOptions),
			nutritionalStatus: faker.helpers.arrayElement(nutritionalStatusOptions),
			address: faker.location.streetAddress({ useFullAddress: true }),
			emergencyContactName: faker.person.fullName(),
			emergencyContactNumber: faker.phone.number(),
			relation: faker.helpers.arrayElement(['Parent', 'Sibling', 'Spouse', 'Friend']),
			bloodGroup: faker.helpers.arrayElement(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
			allergies: faker.lorem.sentence(),
			medicalConditions: faker.lorem.sentence(),
			medicalHistory: faker.lorem.paragraph(),
			insuranceProvider: faker.company.name(),
			insuranceNumber: faker.finance.accountNumber(),
			privacyConsent: faker.datatype.boolean(),
			serviceConsent: faker.datatype.boolean(),
			medicalConsent: faker.datatype.boolean(),
			img: faker.image.avatar(),
			colorCode: faker.color.rgb(),
		})
	}
	for (const data of patientsToCreateData) {
		patients.push(await prisma.patient.create({ data }))
		// You can still access userId from the *created* `patient` object, or the `userIdForProfile`
		// if you need to update the User's role based on this profile.
		await prisma.user.update({
			where: { id: data.user.connect?.id }, // Access the ID through the connect object, or store userIdForProfile
			data: { role: Role.PATIENT },
		})
	}
	console.log(`Created ${patients.length} patients.`)

	// --- Seed Doctors ---
	console.log('Generating doctors...')
	const doctorsToCreateData: Prisma.DoctorCreateInput[] = []
	const numDoctorsToCreate = Math.min(NUM_DOCTORS, availableUserIds.length)

	for (let i = 0; i < numDoctorsToCreate; i++) {
		const userIdForProfile = availableUserIds.pop()
		if (!userIdForProfile) {
			console.warn('Ran out of available user IDs for doctors. Breaking.')
			break
		}

		doctorsToCreateData.push({
			id: faker.string.uuid(),
			// REMOVE THIS LINE: userId: userIdForProfile, // <--- REMOVE THIS LINE
			user: { connect: { id: userIdForProfile } }, // Keep this

			email: faker.internet.email(),
			name: faker.person.fullName({ sex: 'male' }),
			specialization: faker.person.jobTitle(),
			licenseNumber: faker.string.alphanumeric(10),
			phone: faker.phone.number(),
			address: faker.location.streetAddress(),
			department: faker.commerce.department(),
			img: faker.image.avatar(),
			colorCode: faker.color.rgb(),
			availabilityStatus: faker.helpers.arrayElement(['Available', 'Busy', 'On Leave']),
			type: getRandomEnumValue(JOBTYPE),
		})
	}
	for (const data of doctorsToCreateData) {
		doctors.push(await prisma.doctor.create({ data }))
		await prisma.user.update({
			where: { id: data.user.connect?.id }, // Access the ID through the connect object
			data: { role: Role.DOCTOR },
		})
	}
	console.log(`Created ${doctors.length} doctors.`)

	// --- Seed Staff ---
	console.log('Generating staff...')
	const staffToCreateData: Prisma.StaffCreateInput[] = []
	const numStaffToCreate = Math.min(NUM_STAFF, availableUserIds.length)

	for (let i = 0; i < numStaffToCreate; i++) {
		const userIdForProfile = availableUserIds.pop()
		if (!userIdForProfile) {
			console.warn('Ran out of available user IDs for staff. Breaking.')
			break
		}

		staffToCreateData.push({
			id: faker.string.uuid(),
			// REMOVE THIS LINE: userId: userIdForProfile, // <--- REMOVE THIS LINE
			user: { connect: { id: userIdForProfile } }, // Keep this

			email: faker.internet.email(),
			name: faker.person.fullName(),
			phone: faker.phone.number(),
			address: faker.location.streetAddress(),
			department: faker.commerce.department(),
			img: faker.image.avatar(),
			licenseNumber: faker.string.alphanumeric(10),
			colorCode: faker.color.rgb(),
			hireDate: faker.date.past({ years: 10 }),
			salary: Number.parseFloat(faker.finance.amount({ min: 30000, max: 100000, dec: 2 })),
			role: getRandomEnumValue(Role),
			status: getRandomEnumValue(Status),
		})
	}
	for (const data of staffToCreateData) {
		staff.push(await prisma.staff.create({ data }))
		await prisma.user.update({
			where: { id: data.user.connect?.id }, // Access the ID through the connect object
			data: { role: data.role },
		})
	}
	console.log(`Created ${staff.length} staff members.`)

	// --- Seed WorkingDays for Doctors ---
	const workingDaysData: Prisma.WorkingDaysCreateManyInput[] = []
	doctors.forEach(doctor => {
		Array.from({ length: NUM_WORKING_DAYS_PER_DOCTOR }).forEach(() => {
			workingDaysData.push({
				doctorId: doctor.id,
				day: faker.date.weekday(),
				startTime: faker.date
					.recent()
					.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }),
				closeTime: faker.date
					.soon()
					.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }),
			})
		})
	})
	const workingDays = await prisma.workingDays.createMany({ data: workingDaysData })
	console.log(`Created ${workingDays.count} working days.`)

	// --- Seed Appointments ---
	const appointmentsData: Prisma.AppointmentCreateManyInput[] = [] // Change the type here
	for (let i = 0; i < NUM_APPOINTMENTS; i++) {
		const randomPatient = faker.helpers.arrayElement(patients)
		const randomDoctor = faker.helpers.arrayElement(doctors)
		const randomService = faker.helpers.arrayElement(services)
		const appointmentDate = faker.date.future({ years: 1, refDate: new Date() })

		// Construct the object with direct foreign keys for createMany
		appointmentsData.push({
			patientId: randomPatient.id, // Directly assign the foreign key ID
			doctorId: randomDoctor.id, // Directly assign the foreign key ID
			serviceId: randomService.id, // Directly assign the foreign key ID
			appointmentDate: appointmentDate,
			time: faker.date
				.recent()
				.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }),
			status: getRandomEnumValue(AppointmentStatus),
			type: faker.helpers.arrayElement(['Consultation', 'Check-up', 'Follow-up']),
			note: faker.lorem.sentence(),
			reason: faker.lorem.sentence(),
		})
	}

	appointments = await prisma.appointment.createManyAndReturn({ data: appointmentsData })
	console.log(`Created ${appointments.length} appointments.`)
	const medicalRecordsData: Prisma.MedicalRecordsCreateManyInput[] = [] // Changed type to CreateManyInput
	for (const appointment of appointments) {
		if (faker.datatype.boolean({ probability: NUM_MEDICAL_RECORDS_PROBABILITY })) {
			// These random selections are problematic. A MedicalRecord should be linked
			// to the specific patient and doctor involved in the `appointment` being iterated over.
			// Remove these and use the patientId and doctorId from the `appointment` object.
			// const randomPatient = faker.helpers.arrayElement(patients); // REMOVE
			// const randomDoctor = faker.helpers.arrayElement(doctors);   // REMOVE
			// const randomAppointment = faker.helpers.arrayElement(services); // REMOVE - this was a service, not an appointment!

			// Find the specific patient and doctor linked to this current `appointment`
			const patient = patients.find(p => p.id === appointment.patientId)
			const doctor = doctors.find(d => d.id === appointment.doctorId)

			// It's good to check if `patient` and `doctor` are found before pushing
			if (patient && doctor) {
				// Only proceed if both related entities are found
				medicalRecordsData.push({
					// Use direct foreign key IDs here for CreateManyInput
					patientId: patient.id, // Correct: direct ID from the linked patient
					doctorId: doctor.id, // Correct: direct ID from the linked doctor
					appointmentId: appointment.id, // Correct: direct ID from the current appointment
					prescriptions: faker.lorem.sentence(),
					labRequest: faker.lorem.sentence(),
					notes: faker.lorem.paragraph(),
					treatmentPlan: faker.lorem.paragraph(), // Make sure this matches your schema if it's required
				})
			}
		}
	}
	// Ensure `medicalRecords` is declared with `let` at the top level
	medicalRecords = await prisma.medicalRecords.createManyAndReturn({ data: medicalRecordsData })
	console.log(`Created ${medicalRecords.length} medical records.`)

	// --- Seed VitalSigns ---
	// This section looks mostly fine, just ensuring the float precision is explicit for faker.
	const vitalSignsData: Prisma.VitalSignsCreateManyInput[] = []
	medicalRecords.forEach(record => {
		if (faker.datatype.boolean({ probability: NUM_VITAL_SIGNS_PROBABILITY })) {
			vitalSignsData.push({
				patientId: record.patientId,
				medicalId: record.id,
				bodyTemperature: Number.parseFloat(
					faker.number.float({ min: 36, max: 40, fractionDigits: 2 }).toFixed(1),
				), // Added precision
				systolic: faker.number.int({ min: 90, max: 140 }),
				diastolic: faker.number.int({ min: 60, max: 90 }),
				heartRate: faker.number.int({ min: 60, max: 100 }).toString(),
				respiratoryRate: faker.number.int({ min: 12, max: 20 }),
				oxygenSaturation: faker.number.int({ min: 95, max: 100 }),
				weight: Number.parseFloat(
					faker.number.float({ min: 40, max: 100, fractionDigits: 2 }).toFixed(1),
				), // Added precision
				height: Number.parseFloat(
					faker.number.float({ min: 150, max: 190, fractionDigits: 2 }).toFixed(1),
				), // Added precision
			})
		}
	})
	const vitalSigns = await prisma.vitalSigns.createMany({ data: vitalSignsData })
	console.log(`Created ${vitalSigns.count} vital signs records.`)

	// --- Seed Diagnosis ---
	// This section also looks fine as it's correctly using direct foreign keys for CreateManyInput.
	const diagnosisData: Prisma.DiagnosisCreateManyInput[] = []
	medicalRecords.forEach(record => {
		if (faker.datatype.boolean({ probability: NUM_DIAGNOSES_PROBABILITY })) {
			const doctor = doctors.find(d => d.id === record.doctorId)
			if (doctor) {
				diagnosisData.push({
					patientId: record.patientId,
					medicalId: record.id,
					doctorId: doctor.id,
					symptoms: faker.lorem.sentence(),
					diagnosis: faker.lorem.sentence(),
					notes: faker.lorem.paragraph(),
					prescribedMedications: faker.lorem.sentence(),
					followUpPlan: faker.lorem.sentence(),
				})
			}
		}
	})
	const diagnosis = await prisma.diagnosis.createMany({ data: diagnosisData })
	console.log(`Created ${diagnosis.count} diagnoses.`)

	// --- Seed Payments ---
	// Similar to MedicalRecords, `paymentsData` type needs to be `CreateManyInput`
	const paymentsData: Prisma.PaymentCreateManyInput[] = [] // Changed type to CreateManyInput
	for (const appointment of appointments) {
		const service = services.find(s => s.id === appointment.serviceId)
		const amount = service
			? service.price
			: faker.number.float({ min: 50, max: 500, fractionDigits: 2 }) // Added precision
		const discount = faker.number.float({ min: 0, max: amount * 0.2, fractionDigits: 2 }) // Added precision
		const totalAmount = amount
		const amountPaid = Number.parseFloat(
			faker.number.float({ min: amount * 0.5, max: amount, fractionDigits: 2 }).toFixed(2),
		) // Added precision

		paymentsData.push({
			patientId: appointment.patientId, // ADDED: Patient ID is typically required for Payment
			appointmentId: appointment.id, // Corrected typo from `appointmentd` and used direct ID
			billDate: faker.date.recent(),
			paymentDate: faker.date.recent(),
			discount: discount,
			totalAmount: totalAmount,
			amountPaid: amountPaid,
			paymentMethod: getRandomEnumValue(PaymentMethod),
			status: getRandomEnumValue(PaymentStatus),
		})
	}
	// Ensure `payments` is declared with `let` at the top level
	const payments = await prisma.payment.createManyAndReturn({ data: paymentsData })
	console.log(`Created ${payments.length} payments.`)

	// --- Seed PatientBills (assuming each payment corresponds to one service bill for simplicity) ---
	// This section looks correct.
	const patientBillsData: Prisma.PatientBillsCreateManyInput[] = []
	for (const payment of payments) {
		const appointment = appointments.find(a => a.id === payment.appointmentId)
		const service = services.find(s => s.id === appointment?.serviceId)

		if (service) {
			patientBillsData.push({
				billId: payment.id,
				serviceId: service.id,
				serviceDate: payment.billDate,
				quantity: 1,
				unitCost: service.price,
				totalCost: service.price,
			})
		}
	}
	const patientBills = await prisma.patientBills.createMany({ data: patientBillsData })
	console.log(`Created ${patientBills.count} patient bills.`)

	// --- Seed LabTests ---
	// This section also needs to use `CreateManyInput` and direct IDs.
	const labTestsData: Prisma.LabTestCreateManyInput[] = [] // Changed type to CreateManyInput
	for (const record of medicalRecords) {
		if (faker.datatype.boolean({ probability: NUM_LAB_TESTS_PROBABILITY })) {
			const randomServiceForLab = faker.helpers.arrayElement(
				services.filter(s => s.category === ServiceCategory.LAB_TEST),
			)
			if (!randomServiceForLab) {
				console.warn('No LAB_TEST service found. Skipping some LabTest entries.')
				continue
			}

			// Check using direct foreign keys, as `CreateManyInput` uses them
			const existingLabTestForService = labTestsData.some(
				lt => lt.recordId === record.id && lt.serviceId === randomServiceForLab.id,
			)

			if (!existingLabTestForService) {
				labTestsData.push({
					recordId: record.id, // Use direct ID
					testDate: faker.date.recent(),
					result: faker.lorem.paragraph(),
					status: faker.helpers.arrayElement(['Pending', 'Completed', 'Canceled']),
					notes: faker.lorem.sentence(),
					serviceId: randomServiceForLab.id, // Use direct ID
				})
			}
		}
	}
	// Ensure `labTests` is declared with `let` at the top level
	const labTests = await prisma.labTest.createManyAndReturn({ data: labTestsData }) // Changed to createManyAndReturn if you need the IDs
	console.log(`Created ${labTests.length} lab tests.`) // Use .length for createManyAndReturn result

	// --- Seed Prescriptions ---
	// This section looks correct, already using CreateManyInput and direct IDs.
	const prescriptionsData: Prisma.PrescriptionCreateManyInput[] = []
	for (const record of medicalRecords) {
		if (faker.datatype.boolean({ probability: NUM_PRESCRIPTIONS_PROBABILITY })) {
			const doctor = doctors.find(d => d.id === record.doctorId)
			const patient = patients.find(p => p.id === record.patientId)
			if (doctor && patient) {
				prescriptionsData.push({
					medicalRecordId: record.id,
					doctorId: doctor.id,
					patientId: patient.id,
					medicationName: faker.commerce.productName(),
					dosage: faker.helpers.arrayElement(['250mg', '500mg', '1 tablet', '10ml']),
					frequency: faker.helpers.arrayElement(['Once a day', 'Twice a day', 'Every 4 hours']),
					duration: faker.helpers.arrayElement(['7 days', 'Until finished', '1 month']),
					instructions: faker.lorem.sentence(),
					issuedDate: faker.date.recent({ days: 30 }),
					endDate: faker.date.future(), // Added explicit days for future date
					status: faker.helpers.arrayElement(['active', 'completed', 'cancelled']),
				})
			}
		}
	}
	const prescriptions = await prisma.prescription.createMany({ data: prescriptionsData })
	console.log(`Created ${prescriptions.count} prescriptions.`)
	// --- Seed Vaccinations ---
	const vaccinationsData: Prisma.VaccinationCreateManyInput[] = []
	for (const patient of patients) {
		if (faker.datatype.boolean({ probability: NUM_VACCINATIONS_PROBABILITY })) {
			const adminStaff = faker.helpers.arrayElement(staff.filter(s => s.role === Role.NURSE)) // Only nurses administer
			if (adminStaff) {
				vaccinationsData.push({
					patientId: patient.id,
					administeredBy: adminStaff.id,
					vaccineName: faker.helpers.arrayElement(['MMR', 'DTP', 'Flu Shot', 'COVID-19']),
					vaccineBatchNo: faker.string.alphanumeric(8),
					administrationRoute: faker.helpers.arrayElement(['Intramuscular', 'Subcutaneous']),
					siteOfInjection: faker.helpers.arrayElement(['Left deltoid', 'Right deltoid']),
					administeredDate: faker.date.past({ years: 2 }),
					nextDueDate: faker.date.future({ years: 1 }),
					notes: faker.lorem.sentence(),
				})
			}
		}
	}
	const vaccinations = await prisma.vaccination.createMany({ data: vaccinationsData })
	console.log(`Created ${vaccinations.count} vaccinations.`)

	// --- Seed AuditLog ---
	const auditLogsData: Prisma.AuditLogCreateManyInput[] = []
	patients.forEach(patient => {
		auditLogsData.push({
			userId: patient.userId,
			recordId: patient.id,
			action: 'CREATE',
			details: `Patient ${patient.firstName} ${patient.lastName} created.`,
			model: 'Patient',
		})
	})
	appointments.forEach(appointment => {
		auditLogsData.push({
			userId: appointment.patientId, // or doctorId, depending on who initiated
			recordId: appointment.id.toString(),
			action: 'CREATE',
			details: `Appointment ${appointment.id} scheduled.`,
			model: 'Appointment',
		})
	})
	const auditLogs = await prisma.auditLog.createMany({ data: auditLogsData })
	console.log(`Created ${auditLogs.count} audit logs.`)

	// --- Seed Rating ---
	const ratingsData: Prisma.RatingCreateManyInput[] = []
	for (let i = 0; i < NUM_RATINGS; i++) {
		const randomPatient = faker.helpers.arrayElement(patients)
		const randomDoctor = faker.helpers.arrayElement(doctors)
		ratingsData.push({
			patientId: randomPatient.id,
			staffId: randomDoctor.id, // Assuming staffId can link to Doctor
			rating: faker.number.int({ min: 1, max: 5 }),
			comment: faker.lorem.sentence(),
		})
	}
	const ratings = await prisma.rating.createMany({ data: ratingsData })
	console.log(`Created ${ratings.count} ratings.`)

	// --- Seed WHOGrowthStandard ---
	const whoGrowthStandardData: Prisma.WHOGrowthStandardCreateManyInput[] = Array.from({
		length: NUM_WHO_GROWTH_STANDARDS,
	}).map(() => ({
		ageInMonths: faker.number.int({ min: 0, max: 60 }),
		gender: getRandomEnumValue(Gender),
		measurementType: getRandomEnumValue(MeasurementType),
		lValue: Number.parseFloat(faker.number.float({ min: -3, max: 3 }).toFixed(4)),
		mValue: Number.parseFloat(faker.number.float({ min: 0, max: 20 }).toFixed(4)),
		sValue: Number.parseFloat(faker.number.float({ min: 0.1, max: 0.5 }).toFixed(4)),
		sd0: Number.parseFloat(faker.number.float({ min: -5, max: 5 }).toFixed(4)),
		sd1neg: Number.parseFloat(faker.number.float({ min: -5, max: 0 }).toFixed(4)),
		sd1pos: Number.parseFloat(faker.number.float({ min: 0, max: 5 }).toFixed(4)),
		sd2neg: Number.parseFloat(faker.number.float({ min: -5, max: 0 }).toFixed(4)),
		sd2pos: Number.parseFloat(faker.number.float({ min: 0, max: 5 }).toFixed(4)),
		sd3neg: Number.parseFloat(faker.number.float({ min: -5, max: 0 }).toFixed(4)),
		sd3pos: Number.parseFloat(faker.number.float({ min: 0, max: 5 }).toFixed(4)),
		sd4neg: faker.datatype.boolean()
			? Number.parseFloat(faker.number.float({ min: -5, max: 0 }).toFixed(4))
			: null,
		sd4pos: faker.datatype.boolean()
			? Number.parseFloat(faker.number.float({ min: 0, max: 5 }).toFixed(4))
			: null,
	}))
	const whoGrowthStandard = await prisma.wHOGrowthStandard.createMany({
		data: whoGrowthStandardData,
	})
	console.log(`Created ${whoGrowthStandard.count} WHO Growth Standards records.`)

	console.log('Seeding finished.')
}

main()
	.catch(e => {
		console.error(e)
		process.exit(1)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})
