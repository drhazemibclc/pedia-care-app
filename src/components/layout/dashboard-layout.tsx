// app/components/layout/dashboard-layout.tsx
import { Outlet } from 'react-router'

import { Toaster } from '../ui/sonner'
import { Header } from './header'
import { Sidebar } from './sidebar'

export function DashboardLayout() {
	return (
		<div className="flex h-screen bg-gray-50 dark:bg-gray-900">
			<Sidebar />

			<div className="flex flex-1 flex-col overflow-hidden">
				<Header />

				<main className="flex-1 overflow-y-auto p-6">
					<Outlet />
				</main>
			</div>

			<Toaster />
		</div>
	)
}
