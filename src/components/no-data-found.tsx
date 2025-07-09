import { FaMagnifyingGlassChart } from 'react-icons/fa6'

export const NoDataFound = ({ note }: { note?: string }) => {
	return (
		<div className="flex h-full w-full flex-col items-center justify-center py-0">
			<FaMagnifyingGlassChart
				className="text-gray-600"
				size={80}
			/>
			<span className="mt-2 font-medium text-gray-500 text-xl">{note || 'No Record Found'}</span>
		</div>
	)
}
