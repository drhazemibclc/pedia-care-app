import { Star } from 'lucide-react'

interface DataProps {
	id: number
	staffId: string
	rating: number
	comment?: string
	createdAt: Date | string
	patient: { lastName: string; firstName: string }
}

export const RatingList = ({ data }: { data: DataProps[] }) => {
	return (
		<div className="rounded-lg bg-white">
			<div className="flex items-center justify-between p-4">
				<h1 className="font-semibold text-xl">Patient Reviews</h1>
			</div>

			<div className="space-y-2 p-2">
				{data?.map((rate, _Id) => (
					<div
						className="rounded p-3 even:bg-gray-50"
						key={rate?.id}
					>
						<div className="flex justify-between">
							<div className="flex items-center gap-4">
								<p className="font-medium text-base">
									{`${rate?.patient?.firstName} ${rate?.patient?.lastName}`}
								</p>
								<span className="text-gray-500 text-sm">
									{new Date(rate?.createdAt).toLocaleDateString()}
								</span>
							</div>

							<div className="flex flex-col items-center">
								<div className="flex items-center text-yellow-600">
									{Array.from({ length: rate.rating }, _ => (
										<Star
											className="text-lg"
											key={rate.id}
										/>
									))}

									{/* <div className="flex items-center">
                    <Star className="text-lg" />
                    <span>{rate.rating}</span>
                  </div> */}
								</div>
								<span className="">{rate.rating.toFixed(1)}</span>
							</div>
						</div>
					</div>
				))}

				{data?.length === 0 && (
					<div className="px-2 text-gray-600">
						<p>No Reviews</p>
					</div>
				)}
			</div>
		</div>
	)
}
