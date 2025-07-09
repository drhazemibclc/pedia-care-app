import db from '@/lib/db'

import { MedicalHistory } from './medical-history'

interface DataProps {
	id?: number | string
	patientId: string
}

export const MedicalHistoryContainer = async ({ patientId }: DataProps) => {
	const data = await db.medicalRecords.findMany({
		where: { patientId: patientId },
		include: {
			diagnosis: { include: { doctor: true } },
			labTest: true,
		},

		orderBy: { createdAt: 'desc' },
	})
	return (
		<MedicalHistory
			data={data}
			isShowProfile={false}
		/>
	)
}
