import type React from 'react'

import { Navbar } from '@/components/navbar'
import { Sidebar } from '@/components/sidebar'

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex h-screen w-full bg-gray-200">
			<div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%]">
				<Sidebar />
			</div>

			<div className="flex w-[86%] flex-col bg-[#F7F8FA] md:w-[92%] lg:w-[84%] xl:w-[86%]">
				<Navbar />

				<div className="h-full w-full overflow-y-scroll p-2">{children}</div>
			</div>
		</div>
	)
}

export default ProtectedLayout
