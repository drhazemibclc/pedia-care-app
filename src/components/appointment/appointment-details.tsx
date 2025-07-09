import { format } from 'date-fns'

import { SmallCard } from '../small-card'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

interface AppointmentDetailsProps {
	id: number | string
	patientId: string
	appointmentDate: Date
	time: string
	notes?: string
}
export const AppointmentDetails = ({
	id,
	appointmentDate,
	time,
	notes,
}: AppointmentDetailsProps) => {
	return (
		<Card className="shadow-none">
			<CardHeader>
				<CardTitle>Appointment Information</CardTitle>
			</CardHeader>

			<CardContent className="space-y-4">
				<div className="flex ">
					<SmallCard
						label="Appointment #"
						value={`# ${id}`}
					/>
					<SmallCard
						label="Date"
						value={format(appointmentDate, 'MMM d, yyyy')}
					/>
					<SmallCard
						label="Time"
						value={time}
					/>
				</div>

				<div>
					<span className="font-medium text-sm">Additional Notes</span>
					<p className="text-gray-500 text-sm">{notes || 'No notes'}</p>
				</div>
			</CardContent>
		</Card>
	)
}
