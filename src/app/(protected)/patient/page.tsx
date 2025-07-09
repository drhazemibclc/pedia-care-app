import { Briefcase, BriefcaseBusiness, BriefcaseMedical } from 'lucide-react'
import Link from 'next/link'
import { redirect } from 'next/navigation'

import { AvailableDoctors } from '@/components/available-doctor'
import { AppointmentChart } from '@/components/charts/appointment-chart'
import { StatSummary } from '@/components/charts/stat-summary'
import { PatientRatingContainer } from '@/components/patient-rating-container'
import { StatCard } from '@/components/stat-card'
import { RecentAppointments } from '@/components/tables/recent-appointment'
import { Button } from '@/components/ui/button'
import { getSession } from '@/lib/auth'
import type { AvailableDoctorProps } from '@/types/data-types'
import { getPatientDashboardStatistics } from '@/utils/services/patient'

const PatientDashboard = async () => {
	const session = await getSession()
	const user = session?.user
	const { data, appointmentCounts, last5Records, totalAppointments, availableDoctor, monthlyData } =
		user?.id
			? await getPatientDashboardStatistics(user.id)
			: {
					data: null,
					appointmentCounts: null,
					last5Records: [],
					totalAppointments: 0,
					availableDoctor: [],
					monthlyData: [],
				}

	if (user && !data) {
		redirect('/patient/registration')
	}

	if (!data) return null

	const cardData = [
		{
			title: 'appointments',
			value: totalAppointments,
			icon: Briefcase,
			className: 'bg-blue-600/15',
			iconClassName: 'bg-blue-600/25 text-blue-600',
			note: 'Total appointments',
		},
		{
			title: 'cancelled',
			value: appointmentCounts?.CANCELLED,
			icon: Briefcase,
			className: 'bg-rose-600/15',
			iconClassName: 'bg-rose-600/25 text-rose-600',
			note: 'Cancelled Appointments',
		},
		{
			title: 'pending',
			value: (appointmentCounts?.PENDING ?? 0) + (appointmentCounts?.SCHEDULED ?? 0),
			icon: BriefcaseBusiness,
			className: 'bg-yellow-600/15',
			iconClassName: 'bg-yellow-600/25 text-yellow-600',
			note: 'Pending Appointments',
		},
		{
			title: 'completed',
			value: appointmentCounts?.COMPLETED,
			icon: BriefcaseMedical,
			className: 'bg-emerald-600/15',
			iconClassName: 'bg-emerald-600/25 text-emerald-600',
			note: 'Successfully appointments',
		},
	]

	return (
		<div className="flex flex-col gap-6 rounded-xl px-3 py-6 xl:flex-row">
			{/* LEFT */}
			<div className="w-full xl:w-[69%]">
				<div className="mb-8 rounded-xl bg-white p-4">
					<div className="mb-4 flex items-center justify-between">
						<h1 className="font-semibold text-lg xl:text-2xl">
							Welcome {data?.first_name || user?.name}
						</h1>

						<div className="space-x-2">
							<Button size={'sm'}>{new Date().getFullYear()}</Button>
							<Button
								className="hover:underline"
								size="sm"
								variant="outline"
							>
								<Link href="/patient/self">View Profile</Link>
							</Button>
						</div>
					</div>

					<div className="flex w-full flex-wrap gap-5">
						{cardData?.map(el => (
							<StatCard
								key={el}
								{...el}
								link="#"
							/>
						))}
					</div>
				</div>

				<div className="h-[500px]">
					<AppointmentChart data={monthlyData} />
				</div>

				<div className="mt-8 rounded-xl bg-white p-4">
					<RecentAppointments data={last5Records} />
				</div>
			</div>

			{/* RIGHT */}
			<div className="w-full xl:w-[30%]">
				<div className="mb-8 h-[450px] w-full">
					<StatSummary
						data={appointmentCounts}
						total={totalAppointments}
					/>
				</div>

				<AvailableDoctors data={availableDoctor as AvailableDoctorProps} />

				<PatientRatingContainer />
			</div>
		</div>
	)
}

export default PatientDashboard
