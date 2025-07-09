import Link from 'next/link'

import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

export const SettingsQuickLinks = () => {
	return (
		<Card className="w-full rounded-xl bg-white shadow-none">
			<CardHeader>
				<CardTitle className="text-gray-500 text-lg">Quick Links</CardTitle>
			</CardHeader>

			<CardContent className="flex flex-wrap gap-4 font-normal text-sm">
				<Link
					className="rounded-lg bg-gray-100 px-4 py-2 text-gray-600"
					href="?cat=services"
				>
					Services
				</Link>
				<Link
					className="rounded-lg bg-violet-100 px-4 py-2 text-violet-600"
					href="?cat=appointment"
				>
					Payment Methods
				</Link>

				<Link
					className="rounded-lg bg-rose-100 px-4 py-2 text-rose-600"
					href="?cat=medical-history"
				>
					Medical History
				</Link>
			</CardContent>
		</Card>
	)
}
