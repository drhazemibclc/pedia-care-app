import { z } from 'zod'

export const AppointmentScalarFieldEnumSchema = z.enum([
	'id',
	'patientId',
	'doctorId',
	'serviceId',
	'appointmentDate',
	'time',
	'status',
	'type',
	'note',
	'reason',
	'createdAt',
	'updatedAt',
])

export default AppointmentScalarFieldEnumSchema
