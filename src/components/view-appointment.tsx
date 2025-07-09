import { format } from 'date-fns'
import { Calendar, Phone } from 'lucide-react'

import { getSession } from '@/lib/auth'
import { calculateAge, formatDateTime } from '@/utils'
import { checkRole } from '@/utils/roles'
import { getAppointmentById } from '@/utils/services/appointment'

import { AppointmentAction } from './appointment-action'
import { AppointmentStatusIndicator } from './appointment-status-indicator'
import { ProfileImage } from './profile-image'
import { Button } from './ui/button'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from './ui/dialog'

export const ViewAppointment = async ({ id }: { id: number | undefined }) => {
	const response = await getAppointmentById(Number(id ?? 0))
	const session = await getSession()
	const userId = session?.user.id

	if (!('data' in response)) return null
	const { data } = response

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button
					className="flex items-center justify-center rounded-full bg-blue-500/10 px-1.5 py-1 text-blue-600 text-xs hover:underline md:text-sm"
					variant="outline"
				>
					View
				</Button>
			</DialogTrigger>

			<DialogContent className="max-h-[95%] max-w-[425px] overflow-y-auto p-8 md:max-w-2xl 2xl:max-w-3xl">
				<DialogHeader>
					<DialogTitle>Patient Appointment</DialogTitle>
					<DialogDescription>
						This appointment was booked on the {formatDateTime(data?.createdAt.toString())}
					</DialogDescription>
				</DialogHeader>

				{data?.status === 'CANCELLED' && (
					<div className="mt-4 rounded-md bg-yellow-100 p-4">
						<span className="font-semibold text-sm">This appointment has been cancelled</span>
						<p className="text-sm">
							<strong>Reason</strong>: {data?.reason}
						</p>
					</div>
				)}

				<div className="grid gap-4 py-4">
					<p className="w-fit rounded bg-blue-100 py-1 text-blue-600 text-xs md:text-sm">
						Personal Information
					</p>

					<div className="mb-16 flex flex-col gap-6 md:flex-row">
						<div className="flex w-full gap-1 md:w-1/2">
							<ProfileImage
								className="size-20 bg-blue-500"
								name={`${data?.patient?.firstName} ${data?.patient?.lastName}`}
								textClassName="text-2xl"
								url={data?.patient?.img ?? ''}
							/>

							<div className="space-y-0.5">
								<h2 className="font-semibold text-lg uppercase md:text-xl">
									{`${data?.patient?.firstName} ${data?.patient?.lastName}`}
								</h2>

								<p className="flex items-center gap-2 text-gray-600">
									<Calendar
										className="text-gray-500"
										size={20}
									/>
									{calculateAge(data?.patient?.dateOfBirth)}
								</p>

								<span className="flex items-center gap-2 text-sm">
									<Phone
										className="text-gray-500"
										size={16}
									/>
									{data?.patient?.phone}
								</span>
							</div>
						</div>

						<div>
							<span className="text-gray-500 text-sm">Address</span>
							<p className="text-gray-600 capitalize">{data?.patient?.address}</p>
						</div>
					</div>

					<p className="w-fit rounded bg-blue-100 py-1 text-blue-600 text-xs md:text-sm">
						Appointment Information
					</p>

					<div className="grid grid-cols-3 gap-10">
						<div>
							<span className="text-gray-500 text-sm">Date</span>
							<p className="text-gray-600 text-sm">
								{format(data?.appointmentDate, 'MMM dd, yyyy')}
							</p>
						</div>
						<div>
							<span className="text-gray-500 text-sm">Time</span>
							<p>{data?.time}</p>
						</div>
						<div>
							<span className="text-gray-500 text-sm">Status</span>
							<AppointmentStatusIndicator status={data?.status} />
						</div>
					</div>

					{data?.note && (
						<div>
							<span className="text-gray-500 text-sm">Note from Patient</span>
							<p>{data?.note}</p>
						</div>
					)}

					<p className="mt-16 w-fit rounded bg-blue-100 px-2 py-1 text-blue-600 text-xs md:text-sm">
						Physician Information
					</p>
					<div className="mb-8 flex w-full flex-col gap-8 md:flex-row">
						<div className="flex gap-3">
							<ProfileImage
								className="bg-emerald-600 xl:size-20"
								name={data?.doctor?.name}
								textClassName="xl:text-2xl"
								url={data?.doctor?.img ?? ''}
							/>
							<div className="">
								<h2 className="font-medium text-lg uppercase">{data?.doctor?.name}</h2>
								<p className="flex items-center gap-2 text-gray-600 capitalize">
									{data?.doctor?.specialization}
								</p>
							</div>
						</div>
					</div>

					{((await checkRole('ADMIN')) || data?.doctorId === userId) && (
						<>
							<p className="mt-4 w-fit rounded bg-blue-100 px-2 py-1 text-blue-600 text-xs md:text-sm">
								Perform Action
							</p>
							<AppointmentAction
								id={data.id}
								status={data?.status}
							/>
						</>
					)}
				</div>
			</DialogContent>
		</Dialog>
	)
}
