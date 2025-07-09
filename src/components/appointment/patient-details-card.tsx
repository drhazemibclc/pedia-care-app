import type { Patient } from '@prisma/client'
import { format } from 'date-fns'
import { Calendar, Home, Info, Mail, Phone } from 'lucide-react'
import Image from 'next/image'

import { calculateAge } from '@/utils'

import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

export const PatientDetailsCard = ({ data }: { data: Patient }) => {
	return (
		<Card className="bg-white shadow-none">
			<CardHeader>
				<CardTitle>Patient Details</CardTitle>
				<div className="relative size-20 overflow-hidden rounded-full xl:size-24">
					<Image
						alt={data?.firstName}
						className="rounded-full"
						height={100}
						src={data.img || '/user.jpg'}
						width={100}
					/>
				</div>

				<div>
					<h2 className="font-semibold text-lg">
						{data?.firstName} {data?.lastName}
					</h2>
					<p className="text-gray-500 text-sm">
						{data?.email} - {data?.phone}
					</p>
					<p className="text-gray-500 text-sm">
						{data?.gender} - {calculateAge(data?.dateOfBirth)}
					</p>
				</div>
			</CardHeader>

			<CardContent className="mt-4 space-y-4">
				<div className="flex items-start gap-3">
					<Calendar
						className="text-0gray-400"
						size={22}
					/>
					<div>
						<p className="text-gray-500 text-sm">Date of Birth</p>
						<p className="font-medium text-base text-muted-foreground">
							{format(new Date(data?.dateOfBirth), 'MMM d, yyyy')}
						</p>
					</div>
				</div>
				<div className="flex items-start gap-3">
					<Home
						className="text-0gray-400"
						size={22}
					/>
					<div>
						<p className="text-gray-500 text-sm">Address</p>
						<p className="font-medium text-base text-muted-foreground">{data?.address}</p>
					</div>
				</div>
				<div className="flex items-start gap-3">
					<Mail
						className="text-0gray-400"
						size={22}
					/>
					<div>
						<p className="text-gray-500 text-sm">Email</p>
						<p className="font-medium text-base text-muted-foreground">{data?.email}</p>
					</div>
				</div>
				<div className="flex items-start gap-3">
					<Phone
						className="text-0gray-400"
						size={22}
					/>
					<div>
						<p className="text-gray-500 text-sm">Phone</p>
						<p className="font-medium text-base text-muted-foreground">{data?.phone}</p>
					</div>
				</div>
				<div className="flex items-start gap-3">
					<Info
						className="text-0gray-400"
						size={22}
					/>
					<div>
						<p className="text-gray-500 text-sm">Physician</p>
						<p className="font-medium text-base text-muted-foreground">Dr Codewave, MBBS, FCPS</p>
					</div>
				</div>
				<div className="flex items-start gap-3">
					<div>
						<p className="text-gray-500 text-sm">Active Conditions</p>
						<p className="font-medium text-base text-muted-foreground">
							{data?.medical_conditions}
						</p>
					</div>
				</div>
				<div className="flex items-start gap-3">
					<div>
						<p className="text-gray-500 text-sm">Allergies</p>
						<p className="font-medium text-base text-muted-foreground">{data?.allergies}</p>
					</div>
				</div>
			</CardContent>
		</Card>
	)
}
