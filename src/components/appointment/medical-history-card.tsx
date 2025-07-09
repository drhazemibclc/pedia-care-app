import type { Diagnosis, Doctor } from '@prisma/client'

import { Card } from '../ui/card'
import { Separator } from '../ui/separator'

interface ExtendedMedicalRecord extends Diagnosis {
	doctor: Doctor
}
export const MedicalHistoryCard = ({
	record,
	index,
}: {
	record: ExtendedMedicalRecord
	index: number
}) => {
	return (
		<Card className="shadow-none">
			<div className="space-y-6 pt-4">
				<div className="flex justify-between gap-x-6">
					<div>
						<span className="text-gray-500 text-sm">Appointment ID</span>
						<p className="font-medium text-xl"># {record.id}</p>
					</div>
					{index === 0 && (
						<div className="h-8 rounded-full bg-blue-100 px-4 text-center font-semibold text-blue-600">
							<span>Recent</span>
						</div>
					)}

					<div>
						<span className="text-gray-500 text-sm">Date</span>
						<p className="font-medium text-xl">{record.createdAt.toLocaleDateString()}</p>
					</div>
				</div>

				<Separator />

				<div>
					<span className="text-gray-500 text-sm">Diagnosis</span>
					<p className="text-lg text-muted-foreground">{record.diagnosis}</p>
				</div>
				<Separator />

				<div>
					<span className="text-gray-500 text-sm">Symptoms</span>
					<p className="text-lg text-muted-foreground">{record.symptoms}</p>
				</div>

				<Separator />

				<div>
					<span className="text-gray-500 text-sm">Additional Note</span>
					<p className="text-lg text-muted-foreground">{record.notes}</p>
				</div>

				<Separator />

				<div>
					<span className="text-gray-500 text-sm">Doctor</span>
					<div>
						<p className="text-lg text-muted-foreground">{record.doctor.name}</p>
						<span>{record.doctor.specialization}</span>
					</div>
				</div>
			</div>
		</Card>
	)
}
