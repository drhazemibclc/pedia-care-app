import Link from 'next/link'
import type React from 'react' // Import React

import { daysOfWeek } from '@/utils'

import { ProfileImage } from './profile-image'
import { Button } from './ui/button'
import { Card } from './ui/card'

const getToday = () => {
	const today = new Date().getDay()
	// Ensure daysOfWeek is correctly indexed, assuming Monday is 1, Sunday is 0
	// If your daysOfWeek array starts with Sunday at index 0, then `new Date().getDay()` works directly.
	// E.g., ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
	return daysOfWeek[today]?.toLowerCase() // Ensure it's always lowercase for comparison
}

const todayDay = getToday() // This will be calculated once when the module is loaded

interface DaySchedule {
	id: number // Added based on your previous error messages indicating this structure
	createdAt: Date
	updatedAt: Date
	doctorId: string
	day: string
	startTime: string
	closeTime: string
}

// This utility function should not be exported as a component directly.
// It's a helper function that returns a string.
export const availableDays = ({ data }: { data: DaySchedule[] | undefined | null }) => {
	// Add checks for data being undefined or null
	if (!data) {
		return 'Not Available'
	}
	const isTodayWorkingDay = data.find(dayObj => dayObj?.day?.toLowerCase() === todayDay)

	return isTodayWorkingDay
		? `${isTodayWorkingDay.startTime} - ${isTodayWorkingDay.closeTime}`
		: 'Not Available'
}

// Define the type for a single doctor item as received by this component
interface DoctorDataItem {
	id: string
	name: string
	specialization: string
	img: string | null
	colorCode: string | null
	workingDays: DaySchedule[] // Use the defined DaySchedule interface
}

// Define the props for the AvailableDoctor component
interface AvailableDoctorComponentProps {
	data: DoctorDataItem[] // The 'data' prop is an array of DoctorDataItem
	isAdmin: boolean // Add an isAdmin prop to be passed from the parent Server Component
}

// Make AvailableDoctor a standard React functional component (client component)
export const AvailableDoctor: React.FC<AvailableDoctorComponentProps> = ({ data, isAdmin }) => {
	return (
		<div className="rounded-xl bg-white p-4">
			<div className="mb-6 flex items-center justify-between">
				<h1 className="font-semibold text-lg">Available Doctors</h1>

				{/* Use the isAdmin prop directly */}
				{isAdmin && (
					<Button
						asChild
						className="disabled:cursor-not-allowed disabled:text-gray-200"
						disabled={data?.length === 0}
						variant={'outline'}
					>
						<Link href="/record/doctors">View all</Link>
					</Button>
				)}
			</div>

			<div className="flex w-full flex-col space-y-5 md:flex-row md:flex-wrap md:gap-6 md:space-y-0">
				{data?.map(
					(
						doc, // Removed _Id as it's not used, doc.id is the key
					) => (
						<Card
							className=" flex min-h-28 w-full gap-4 border-none p-4 odd:bg-emerald-600/5 even:bg-yellow-600/5 md:w-[300px] xl:w-full"
							key={doc.id}
						>
							<ProfileImage
								bgColor={doc?.colorCode ?? '#000000'} // Provide a default hex color
								className={'min-h-14 min-w-14 md:flex md:min-h-16 md:min-w-16'}
								name={doc?.name}
								textClassName="text-2xl font-semibold text-black"
								url={doc?.img ?? ''}
							/>
							<div>
								<h2 className="font-semibold text-lg md:text-xl">{doc?.name}</h2>
								<p className="text-base text-gray-600 capitalize">{doc?.specialization}</p>
								<p className="flex items-center text-sm">
									<span className="hidden lg:flex">Available Time:</span>
									{/* Call the helper function `availableDays` */}
									{availableDays({ data: doc?.workingDays })}
								</p>
							</div>
						</Card>
					),
				)}
			</div>
		</div>
	)
}
