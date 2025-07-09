import type { Diagnosis, LabTest, MedicalRecords, Patient } from '@prisma/client'
import { BriefcaseBusiness } from 'lucide-react'

import { formatDateTime } from '@/utils'

import { ViewAction } from './action-options'
import { MedicalHistoryDialog } from './medical-history-dialog'
import { ProfileImage } from './profile-image'
import { Table } from './tables/table'

export interface ExtendedMedicalHistory extends MedicalRecords {
	patient?: Patient
	diagnosis: Diagnosis[]
	labTest: LabTest[]
	index?: number
}

interface DataProps {
	data: ExtendedMedicalHistory[]
	isShowProfile?: boolean
}

export const MedicalHistory = ({ data, isShowProfile }: DataProps) => {
	const columns = [
		{
			header: 'No',
			key: 'no',
		},
		{
			header: 'Info',
			key: 'name',
			className: isShowProfile ? 'table-cell' : 'hidden',
		},
		{
			header: 'Date & Time',
			key: 'medicalDate',
			className: '',
		},
		{
			header: 'Doctor',
			key: 'doctor',
			className: 'hidden xl:table-cell',
		},
		{
			header: 'Diagnosis',
			key: 'diagnosis',
			className: 'hidden md:table-cell',
		},
		{
			header: 'Lab Test',
			key: 'labTest',
			className: 'hidden 2xl:table-cell',
		},
	]

	const renderRow = (item: ExtendedMedicalHistory) => {
		return (
			<tr
				className="border-gray-200 border-b text-sm even:bg-slate-50 hover:bg-slate-50"
				key={item.id}
			>
				<td className="py-2 xl:py-6"># {item?.id}</td>

				{isShowProfile && (
					<td className="flex items-center gap-2 py-2 xl:py-4 2xl:gap-4">
						<ProfileImage
							name={`${item?.patient?.firstName} ${item?.patient?.lastName}`}
							url={item?.patient?.img ?? ''}
						/>
						<div>
							<h3 className="font-semibold">
								{`${item?.patient?.firstName} ${item?.patient?.lastName}`}
							</h3>
							<span className="hidden text-xs capitalize md:flex">
								{item?.patient?.gender.toLowerCase()}
							</span>
						</div>
					</td>
				)}

				<td className="">{formatDateTime(item?.createdAt.toString())}</td>

				<td className="hidden items-center py-2 xl:table-cell">{item?.doctorId}</td>
				<td className="hidden lg:table-cell">
					{item?.diagnosis?.length === 0 ? (
						<span className="text-gray-500 text-sm italic">No diagnosis found</span>
					) : (
						<MedicalHistoryDialog
							doctorId={item?.doctorId}
							id={item?.appointmentId}
							label={
								<div className="flex items-center gap-x-2 text-lg">
									{item?.diagnosis?.length}

									<span className="text-sm">Found</span>
								</div>
							}
							patientId={item?.patientId}
						/>
					)}
				</td>
				<td className="hidden 2xl:table-cell">
					{item?.labTest?.length === 0 ? (
						<span className="text-gray-500 text-sm italic">No lab test found</span>
					) : (
						<div className="flex items-center gap-x-2 text-lg">
							{item?.labTest?.length}

							<span className="text-sm">Found</span>
						</div>
					)}
				</td>

				<td>
					<ViewAction href={`/record/appointments/${item?.appointmentId}`} />
				</td>
			</tr>
		)
	}

	return (
		<div className="rounded-xl bg-white p-2 2xl:p-6">
			<div className="">
				<h1 className="font-semibold text-xl">Medical History (All)</h1>
				<div className="hidden items-center gap-1 lg:flex">
					<BriefcaseBusiness
						className="text-gray-500"
						size={20}
					/>
					<p className="font-semibold text-2xl">{data?.length}</p>
					<span className="text-gray-600 text-sm xl:text-base">total records</span>
				</div>
			</div>
			<Table
				columns={columns}
				data={data}
				renderRow={renderRow}
			/>
		</div>
	)
}
