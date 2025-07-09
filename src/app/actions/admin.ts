'use server'

import { auth, getSession } from '@/lib/auth'
import db from '@/lib/db'
import { DoctorSchema, ServicesSchema, StaffSchema, WorkingDaysSchema } from '@/lib/schema'
import type { DoctorInput, ServiceInput, StaffInput, WorkScheduleInput } from '@/types/data-types'
import { generateRandomColor } from '@/utils'
import { checkRole } from '@/utils/roles'

export async function createNewStaff(data: StaffInput) {
	try {
		const session = await getSession()
		const userId = session?.user?.id

		if (!userId || !(await checkRole('ADMIN'))) {
			return { success: false, msg: 'Unauthorized' }
		}

		const result = StaffSchema.safeParse(data)
		if (!result.success) {
			return { success: false, errors: true, message: 'Please provide all required info' }
		}

		const { password, name, ...rest } = result.data
		const [firstName, ...restName] = name.trim().split(' ')
		const lastName = restName.join(' ')

		const user = await auth.api.createUser({
			body: {
				email: rest.email,
				password: password ?? '',
				name: `${firstName} ${lastName}`,
				role: 'doctor',
			},
		})

		await db.staff.create({
			data: {
				...rest,
				userId: user.user.id,
				name,
				id: user.user.id,
				colorCode: generateRandomColor(),
				status: 'ACTIVE',
			},
		})

		return { success: true, message: 'Doctor added successfully', error: false }
	} catch (error) {
		console.error(error)
		return { error: true, success: false, message: 'Something went wrong' }
	}
}

export async function createNewDoctor(data: DoctorInput & { workSchedule: WorkScheduleInput }) {
	try {
		const doctorResult = DoctorSchema.safeParse(data)
		const workScheduleResult = WorkingDaysSchema.safeParse(data?.workSchedule)

		if (!doctorResult.success || !workScheduleResult.success) {
			return {
				success: false,
				errors: true,
				message: 'Please provide all required info',
			}
		}

		const { password, name, ...doctorData } = doctorResult.data
		const workSchedule = workScheduleResult.data
		const [firstName, ...restName] = name.trim().split(' ')
		const lastName = restName.join(' ')

		const user = await auth.api.createUser({
			body: {
				email: doctorData.email,
				password: password ?? '',
				name: `${firstName} ${lastName}`,
				role: 'doctor',
			},
		})

		const doctor = await db.doctor.create({
			data: {
				...doctorData,
				id: user.user.id,
				userId: user.user.id,
				name,
			},
		})

		if (workSchedule) {
			await Promise.all(
				workSchedule.map(el =>
					db.workingDays.create({
						data: { ...el, doctorId: doctor.id },
					}),
				),
			)
		}

		return { success: true, message: 'Doctor added successfully', error: false }
	} catch (error) {
		console.error(error)
		return { error: true, success: false, message: 'Something went wrong' }
	}
}

export async function addNewService(data: ServiceInput) {
	try {
		const result = ServicesSchema.safeParse(data)
		if (!result.success) {
			return { success: false, msg: 'Invalid data' }
		}

		const { price, ...rest } = result.data

		await db.services.create({
			data: { ...rest, price: Number(price) },
		})

		return { success: true, error: false, msg: 'Service added successfully' }
	} catch (error) {
		console.error(error)
		return { success: false, msg: 'Internal Server Error' }
	}
}
