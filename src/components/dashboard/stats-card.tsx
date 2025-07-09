'use client'

import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'

import { cn, formatNumber } from '@/lib/utils'

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card'

export type StatCardColor = 'blue' | 'green' | 'yellow' | 'red' | 'purple' | 'violet' | 'default'

interface StatCardProps {
	title: string
	value: number | string
	icon: LucideIcon
	note?: string
	description?: string
	color?: StatCardColor
	className?: string
	iconClassName?: string
	animated?: boolean
}

/**
 * A responsive stat card with optional animation, description, and footer note.
 */
export const StatCard = ({
	title,
	value,
	icon: Icon,
	note,
	description,
	color = 'violet',
	className,
	iconClassName,
	animated = true,
}: StatCardProps) => {
	const colorVariants: Record<StatCardColor, string> = {
		blue: 'bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400',
		green: 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400',
		yellow: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400',
		red: 'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400',
		purple: 'bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-400',
		violet: 'bg-violet-100 text-violet-700 dark:bg-violet-900/20 dark:text-violet-400',
		default: 'bg-muted text-muted-foreground',
	}

	const Wrapper = animated ? motion.div : 'div'

	return (
		<Wrapper
			animate={animated ? { opacity: 1, y: 0 } : undefined}
			className={cn('w-full md:w-[330px] 2xl:w-[250px]', className)}
			initial={animated ? { opacity: 0, y: 12 } : undefined}
			transition={animated ? { duration: 0.3 } : undefined}
		>
			<Card>
				<CardHeader className="flex flex-row items-center justify-between pb-2">
					<CardTitle className="font-medium text-sm capitalize">{title}</CardTitle>
					<div className={cn('rounded-full p-2', colorVariants[color], iconClassName)}>
						<Icon className="h-4 w-4" />
					</div>
				</CardHeader>

				<CardContent>
					<div className="font-bold text-2xl">
						{typeof value === 'number' ? formatNumber(value) : value}
					</div>
					{description && (
						<p className="mt-1 text-gray-500 text-xs dark:text-gray-400">{description}</p>
					)}
				</CardContent>

				{note && (
					<CardFooter className="pt-0 pb-3">
						<p className="text-muted-foreground text-sm">{note}</p>
					</CardFooter>
				)}
			</Card>
		</Wrapper>
	)
}
