// app/components/layout/header.tsx
import { Bell, Search, User } from 'lucide-react'
import { Link } from 'react-router'

import { Button } from '../ui/button'

export function Header() {
	return (
		<header className="flex h-16 items-center justify-between border-gray-200 border-b px-6 dark:border-gray-800">
			<div className="flex w-full max-w-md items-center">
				<Search className="mr-2 h-4 w-4 text-gray-500 dark:text-gray-400" />
				<input
					className="w-full border-none bg-transparent focus:outline-none"
					placeholder="Search..."
					type="text"
				/>
			</div>

			<div className="flex items-center space-x-4">
				<Button
					size="icon"
					variant="ghost"
				>
					<Bell className="h-5 w-5" />
				</Button>

				<Link to="/profile">
					<div className="flex items-center space-x-2">
						<div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white">
							<User className="h-4 w-4" />
						</div>
						<span className="hidden font-medium text-sm md:block">Dr. Hazem</span>
					</div>
				</Link>
			</div>
		</header>
	)
}
