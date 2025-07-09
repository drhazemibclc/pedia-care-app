// app/components/layout/sidebar.tsx

import { motion } from 'framer-motion'
import { Calendar, DollarSign, FileText, Home, LogOut, Settings, Users } from 'lucide-react'
import { Link, useLocation } from 'react-router'

import { cn } from '@/lib/utils'

import { Button } from '../ui/button'

const navItems = [
	{ icon: Home, label: 'Dashboard', path: '/' },
	{ icon: Users, label: 'Patients', path: '/patients' },
	{ icon: Calendar, label: 'Appointments', path: '/appointments' },
	{ icon: FileText, label: 'Medical Records', path: '/records' },
	{ icon: DollarSign, label: 'Payments', path: '/payments' },
	{ icon: Settings, label: 'Settings', path: '/settings' },
]

export function Sidebar() {
	const location = useLocation()

	return (
		<div className="flex h-screen w-64 flex-col border-gray-200 border-r bg-white dark:border-gray-800 dark:bg-gray-900">
			<div className="border-gray-200 border-b p-4 dark:border-gray-800">
				<h1 className="font-bold text-xl">Pediatric Clinic</h1>
			</div>

			<nav className="flex-1 space-y-1 p-4">
				{navItems.map(item => {
					const isActive = location.pathname === item.path

					return (
						<Link
							className="relative block"
							key={item.path}
							to={item.path}
						>
							<Button
								className={cn('w-full justify-start', isActive && 'bg-slate-100 dark:bg-slate-800')}
								variant="ghost"
							>
								<item.icon className="mr-2 h-4 w-4" />
								{item.label}
							</Button>

							{isActive && (
								<motion.div
									animate={{ opacity: 1 }}
									className="absolute top-0 left-0 h-full w-1 bg-blue-500"
									initial={{ opacity: 0 }}
									layoutId="sidebar-indicator"
									transition={{ duration: 0.2 }}
								/>
							)}
						</Link>
					)
				})}
			</nav>

			<div className="border-gray-200 border-t p-4 dark:border-gray-800">
				<Button
					className="w-full justify-start text-red-500"
					variant="ghost"
				>
					<LogOut className="mr-2 h-4 w-4" />
					Logout
				</Button>
			</div>
		</div>
	)
}
