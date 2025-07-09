import { getSession } from '@/lib/auth'
import db from '@/lib/db'

import { RatingList } from './rating-list'

export const PatientRatingContainer = async ({ id }: { id?: string }) => {
	const session = await getSession()
	const userId = session?.user.id

	const data = await db.rating.findMany({
		take: 10,

		where: { patientId: id ? id : (userId ?? 'N/A') },
		include: { patient: { select: { lastName: true, firstName: true } } },
		orderBy: { createdAt: 'desc' },
	})

	if (!data) return null

	return (
		<div>
			<RatingList data={data} />
		</div>
	)
}
