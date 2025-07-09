'use client'

import { UserButton } from '@daveyplate/better-auth-ui'
import { Bell } from 'lucide-react'
import { usePathname } from 'next/navigation'

import { useAuth } from '@/lib/auth/use-auth'

export const Navbar = () => {
	const user = useAuth()
	const pathname = usePathname()

	function formatPathName(pathname: string | null): string {
		if (!pathname) return 'Overview'

		const splitRoute = pathname.split('/')
		const lastIndex = splitRoute.length - 1 > 2 ? 2 : splitRoute.length - 1

		const pathName = splitRoute[lastIndex]

		const formattedPath = pathName.replace(/-/g, ' ')

		return formattedPath
	}

	const path = formatPathName(pathname)

	return (
		<div className="flex justify-between bg-white p-5">
			<h1 className="font-medium text-gray-500 text-xl capitalize">{path || 'Overview'}</h1>

			<div className="flex items-center gap-4">
				<div className="relative">
					<Bell />
					<p className="-top-3 absolute right-1 size-4 rounded-full bg-red-600 text-center text-[10px] text-white">
						2
					</p>
				</div>

				{user.user?.id && <UserButton />}
			</div>
		</div>
	)
}
