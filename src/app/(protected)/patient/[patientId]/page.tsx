import { format } from 'date-fns'
import Link from 'next/link'

import { MedicalHistoryContainer } from '@/components/medical-history-container'
import { PatientRatingContainer } from '@/components/patient-rating-container'
import { ProfileImage } from '@/components/profile-image'
import { Card } from '@/components/ui/card'
import { getSession } from '@/lib/auth'
import { getPatientFullDataById } from '@/utils/services/patient'

interface ParamsProps {
	params: Promise<{ patientId: string }>
	searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

const SmallCard = ({ label, value }: { label: string; value: string }) => (
	<div className="w-full md:w-1/3">
		<span className="text-gray-500 text-sm">{label}</span>
		<p className="text-sm capitalize md:text-base">{value}</p>
	</div>
)

async function resolvePatientId(params: Promise<{ patientId: string }>) {
	const resolvedParams = await params
	let id = resolvedParams.patientId
	if (id === 'self') {
		const session = await getSession()
		const user = session?.user
		const userId = user?.id
		if (!userId) {
			throw new Error('User ID not found in session.')
		}
		id = userId
	}
	return id
}

const QuickLinks = ({ id, patientId }: { id: string; patientId: string }) => (
	<div className="mb-8 rounded-md bg-white p-4">
		<h1 className="font-semibold text-xl">Quick Links</h1>
		<div className="mt-4 flex flex-wrap gap-4 text-gray-500 text-xs">
			<Link
				className="rounded-md bg-yellow-50 p-3 hover:underline"
				href={`/record/appointments?id=${id}`}
			>
				Patient&apos;s Appointments
			</Link>
			<Link
				className="rounded-md bg-purple-50 p-3 hover:underline"
				href="?cat=medical-history"
			>
				Medical Records
			</Link>
			<Link
				className="rounded-md bg-violet-100 p-3"
				href={'?cat=payments'}
			>
				Medical Bills
			</Link>
			<Link
				className="rounded-md bg-pink-50 p-3"
				href={'/'}
			>
				Dashboard
			</Link>
			<Link
				className="rounded-md bg-rose-100 p-3"
				href={'#'}
			>
				Lab Test & Result
			</Link>
			{patientId === 'self' && (
				<Link
					className="rounded-md bg-black/10 p-3"
					href={'/patient/registration'}
				>
					Edit Information
				</Link>
			)}
		</div>
	</div>
)

const PatientProfile = async (props: ParamsProps) => {
	const searchParams = await props.searchParams
	const params = await props.params

	const id = await resolvePatientId(props.params)
	const patientId = (await params).patientId
	const cat = searchParams?.cat || 'medical-history'

	const { data } = await getPatientFullDataById(id)

	return (
		<div className="flex h-full flex-col gap-6 rounded-xl bg-gray-100/60 px-3 py-6 lg:flex-row 2xl:p-6">
			<div className="w-full xl:w-3/4">
				<div className="flex w-full flex-col gap-4 lg:flex-row">
					<Card className="flex w-full flex-col items-center rounded-xl border-none bg-white p-4 lg:w-[30%]">
						<ProfileImage
							bgColor={data?.colorCode ?? '0000'}
							className="h-20 w-20 md:flex"
							name={`${data?.first_name} ${data?.last_name}`}
							textClassName="text-3xl"
							url={data?.img ?? ''}
						/>
						<h1 className="mt-2 font-semibold text-2xl">
							{`${data?.first_name} ${data?.last_name}`}
						</h1>
						<span className="text-gray-500 text-sm">{data?.email}</span>

						<div className="mt-4 flex w-full items-center justify-center gap-2">
							<div className="w-1/2 space-y-1 text-center">
								<p className="font-medium text-xl">{data?.totalAppointments}</p>
								<span className="text-gray-500 text-xs">Appointments</span>
							</div>
						</div>
					</Card>

					<Card className="w-full space-y-6 rounded-xl border-none bg-white p-6 lg:w-[70%]">
						<div className="flex flex-col gap-y-4 md:flex-row md:flex-wrap md:items-center md:gap-x-0 xl:justify-between">
							<SmallCard
								label={'Gender'}
								value={data?.gender?.toLowerCase() ?? 'male'}
							/>
							<SmallCard
								label="Date of Birth"
								value={data?.date_of_birth ? format(data.date_of_birth, 'yyyy-MM-dd') : 'N/A'}
							/>
							<SmallCard
								label={'Phone Number'}
								value={data?.phone ?? '0000000000'}
							/>
						</div>

						<div className="flex flex-col gap-y-4 md:flex-row md:flex-wrap md:items-center md:gap-x-0 xl:justify-between">
							<SmallCard
								label="Marital Status"
								value={data?.marital_status ?? 'single'}
							/>
							<SmallCard
								label="Blood Group"
								value={data?.blood_group ?? 'A'}
							/>
							<SmallCard
								label="Address"
								value={data?.address ?? 'hurghada'}
							/>
						</div>

						<div className="flex flex-col gap-y-4 md:flex-row md:flex-wrap md:items-center md:gap-x-0 xl:justify-between">
							<SmallCard
								label="Contact Person"
								value={data?.emergency_contact_name ?? 'N/A'}
							/>
							<SmallCard
								label="Emergency Contact"
								value={data?.emergency_contact_number ?? '0000000000'}
							/>
							<SmallCard
								label="Last Visit"
								value={
									data?.lastVisit ? format(data?.lastVisit ?? 'N/A', 'yyyy-MM-dd') : 'No last visit'
								}
							/>
						</div>
					</Card>
				</div>

				<div className="mt-10">
					{cat === 'medical-history' && <MedicalHistoryContainer patientId={id} />}

					{/* {cat === "payments" && <Payments patientId={id!} />} */}
				</div>
			</div>

			<div className="w-full xl:w-1/3">
				<QuickLinks
					id={id}
					patientId={patientId}
				/>
				<PatientRatingContainer id={id ?? 'N/A'} />
			</div>
		</div>
	)
}

export default PatientProfile
