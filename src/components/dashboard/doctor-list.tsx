// app/components/dashboard/doctor-list.tsx
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '../ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

interface Doctor {
	id: string
	name: string
	specialization: string
	img?: string | null
	colorCode?: string | null
}

interface DoctorListProps {
	doctors: Doctor[]
	title?: string
}

export function DoctorList({ doctors, title = 'Doctors' }: DoctorListProps) {
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	}

	const item = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0 },
	}

	return (
		<Card>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
			</CardHeader>
			<CardContent>
				<motion.div
					animate="show"
					className="space-y-4"
					initial="hidden"
					variants={container}
				>
					{doctors.length === 0 ? (
						<p className="py-4 text-center text-gray-500 dark:text-gray-400">
							No doctors available
						</p>
					) : (
						doctors.map(doctor => (
							<motion.div
								className="flex items-center justify-between rounded-lg border p-4"
								key={doctor.id}
								variants={item}
							>
								<div className="flex items-center space-x-4">
									<div
										className="flex h-10 w-10 items-center justify-center rounded-full text-white"
										style={{ backgroundColor: doctor.colorCode || '#6366F1' }}
									>
										{doctor.img ? (
											<Image
												alt={doctor.name}
												className="h-full w-full rounded-full object-cover"
												src={doctor.img}
											/>
										) : (
											<span>{doctor.name.charAt(0)}</span>
										)}
									</div>
									<div>
										<h3 className="font-medium">{doctor.name}</h3>
										<p className="text-gray-500 text-sm dark:text-gray-400">
											{doctor.specialization}
										</p>
									</div>
								</div>

								<Link href={`/doctor/${doctor.id}`}>
									<Button
										size="sm"
										variant="outline"
									>
										View Profile
									</Button>
								</Link>
							</motion.div>
						))
					)}
				</motion.div>
			</CardContent>
		</Card>
	)
}
