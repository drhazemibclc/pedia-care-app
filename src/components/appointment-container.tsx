import { getDoctors } from '@/utils/services/doctor'
import { getPatientById } from '@/utils/services/patient'

import { BookAppointment } from './forms/book-appointment'

export const AppointmentContainer = async ({ id }: { id: string }) => {
	const { data } = await getPatientById(id)
	const { data: doctors } = await getDoctors()

	return (
		<div>
			{data && doctors && (
				<BookAppointment
					data={data}
					doctors={doctors}
				/>
			)}
		</div>
	)
}
