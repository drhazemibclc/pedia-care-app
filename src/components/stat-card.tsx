// app/components/dashboard/stat-card.tsx
// No 'use client' directive needed for React Router applications

import type { LucideIcon } from 'lucide-react'
import React from 'react' // Import React for React.memo
import { Link } from 'react-router-dom' // Import Link from react-router-dom

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { cn, formatNumber } from '@/lib/utils' // Assuming these are correctly set up and optimized

interface StatCardProps {
	title: string
	icon: LucideIcon
	note: string
	value: number
	link: string // This will now be a React Router path
	className?: string
	iconClassName?: string
}

export const StatCard = React.memo(
	({
		title,
		icon: Icon, // Destructure and rename 'icon' to 'Icon' for component rendering
		note,
		value,
		link,
		className,
		iconClassName,
	}: StatCardProps) => {
		// You might want to memoize formatNumber(value) if `value` changes very frequently
		// and formatNumber is computationally expensive, but for simple number formatting,
		// it's usually not necessary.
		// const formattedValue = React.useMemo(() => formatNumber(value), [value]);

		return (
			<Card className={cn('w-full md:w-[330px] 2xl:w-[250px]', className)}>
				<CardHeader className="flex flex-row items-center justify-between py-3 capitalize">
					<CardTitle className="font-medium text-sm">{title}</CardTitle>
					<Button
						asChild // This correctly passes the Link component as a child to Button
						className="h-auto px-2 py-0 text-xs hover:underline"
						size="sm"
						variant="ghost"
					>
						{/* Use React Router's Link component */}
						<Link to={link}>See details</Link>
					</Button>
				</CardHeader>

				<CardContent>
					<div className="flex items-center gap-4">
						<div
							className={cn(
								'flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 text-violet-600 dark:bg-violet-900/20 dark:text-violet-400',
								iconClassName,
							)}
						>
							{/* Render the LucideIcon component */}
							<Icon className="h-5 w-5" />
						</div>
						<h2 className="font-semibold text-2xl 2xl:text-3xl">
							{formatNumber(value)} {/* or formattedValue if memoized */}
						</h2>
					</div>
				</CardContent>

				<CardFooter className="pb-3">
					<p className="text-muted-foreground text-sm">{note}</p>
				</CardFooter>
			</Card>
		)
	},
)

// Optional: Add a display name for easier debugging in React DevTools
StatCard.displayName = 'StatCard'
