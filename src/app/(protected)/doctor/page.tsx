import { BriefcaseBusiness, BriefcaseMedical, User, Users } from 'lucide-react'
import Link from 'next/link'

import { AvailableDoctor } from '@/components/available-doctor' // Correct import for the component
import { AppointmentChart } from '@/components/charts/appointment-chart'
import { emptyAppointmentCounts, StatSummary } from '@/components/charts/stat-summary'
import { StatCard } from '@/components/stat-card'
import { RecentAppointments } from '@/components/tables/recent-appointment'
import { Button } from '@/components/ui/button'
import { getSession } from '@/lib/auth'
// Ensure checkRole is imported, as it's used in this server component
import { checkRole } from '@/utils/roles'
// Keep both imports if both functions truly serve different purposes,
// but be mindful of which one provides data for AvailableDoctor.
// For this fix, I'll assume getAvailableDoctor is for the component.
import { getAvailableDoctors, getDoctorDashboardStats } from '@/utils/services/doctor'

const DoctorDashboard = async () => {
	const session = await getSession()
	const user = session?.user

	// Determine isAdmin status here in the Server Component
	const isAdmin = await checkRole('ADMIN')

	// Remove or clarify the purpose of this line if it's not directly used by the UI.
	// If getDoctors() and getAvailableDoctor() return the same data for the same component,
	// choose one. For clarity, I'm using getAvailableDoctor for the component.
	// const doctorsDataResponse = await getDoctors();

	const {
		totalPatient,
		totalNurses,
		totalAppointment,
		appointmentCounts,
		monthlyData,
		last5Records,
	} = await getDoctorDashboardStats()

	// Fetch available doctors data for the component
	const availableDoctorResponse = await getAvailableDoctors()

	// Safely extract the array of doctors, providing a fallback empty array
	const doctorsForAvailableDoctorComponent =
		availableDoctorResponse.success && availableDoctorResponse.data
			? availableDoctorResponse.data
			: []

	const cardData = [
		{
			title: 'Patients',
			value: totalPatient,
			icon: Users,
			className: 'bg-blue-600/15',
			iconClassName: 'bg-blue-600/25 text-blue-600',
			note: 'Total patients',
			link: '/record/patients',
		},
		{
			title: 'Nurses',
			value: totalNurses,
			icon: User,
			className: 'bg-rose-600/15',
			iconClassName: 'bg-rose-600/25 text-rose-600',
			note: 'Total nurses',
			link: '', // maybe add link if you have
		},
		{
			title: 'Appointments',
			value: totalAppointment,
			icon: BriefcaseBusiness,
			className: 'bg-yellow-600/15',
			iconClassName: 'bg-yellow-600/25 text-yellow-600',
			note: 'Total appointments',
			link: '/record/appointments',
		},
		{
			title: 'Consultation',
			value: appointmentCounts?.COMPLETED ?? 0,
			icon: BriefcaseMedical,
			className: 'bg-emerald-600/15',
			iconClassName: 'bg-emerald-600/25 text-emerald-600',
			note: 'Total consultation',
			link: '/record/appointments',
		},
	]

	return (
		<div className="flex flex-col gap-6 rounded-xl px-3 py-6 xl:flex-row">
			{/* LEFT */}
			<div className="w-full xl:w-[69%]">
				<div className="mb-8 rounded-xl bg-white p-4">
					<div className="mb-6 flex items-center justify-between">
						<h1 className="font-semibold text-lg xl:text-2xl">Welcome, Dr. {user?.name}</h1>
						<Button
							asChild
							size="sm"
							variant="outline"
						>
							<Link href={`/record/doctors/${user?.id}`}>View profile</Link>
						</Button>
					</div>

					<div className="flex w-full flex-wrap gap-2">
						{cardData.map(el => (
							<StatCard
								className={el.className}
								icon={el.icon}
								iconClassName={el.iconClassName}
								key={el.title}
								link={el.link}
								note={el.note}
								title={el.title}
								value={el.value ?? 0}
							/>
						))}
					</div>
				</div>

				<div className="h-[500px]">
					<AppointmentChart data={monthlyData ?? []} />
				</div>

				<div className="mt-8 rounded-xl bg-white p-4">
					<RecentAppointments data={last5Records ?? []} />
				</div>
			</div>

			{/* RIGHT */}
			<div className="w-full xl:w-[30%]">
				<div className="h-[450px] w-full">
					<StatSummary
						data={appointmentCounts ?? emptyAppointmentCounts}
						total={totalAppointment ?? 0}
					/>
				</div>

				{/* Corrected: Use uppercase for the component name and pass the isAdmin prop */}
				<AvailableDoctor
					data={doctorsForAvailableDoctorComponent}
					isAdmin={isAdmin}
				/>
			</div>
		</div>
	)
}

export default DoctorDashboard
