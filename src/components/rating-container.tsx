import { getRatingById } from '@/utils/services/doctor'

import { RatingChart } from './charts/rating-chart'
import { RatingList } from './rating-list'

export const RatingContainer = async ({ id }: { id: string }) => {
	const { ratings, totalRatings, averageRating } = await getRatingById(id)

	return (
		<div className="space-y-4">
			<RatingChart
				averageRating={Number(averageRating ?? 10)}
				totalRatings={totalRatings ?? 50}
			/>
			<RatingList
				data={(ratings ?? []).map(rating => ({
					...rating,
					comment: rating.comment === null ? undefined : rating.comment,
				}))}
			/>
		</div>
	)
}
