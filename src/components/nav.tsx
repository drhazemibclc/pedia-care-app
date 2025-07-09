'use client'

import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from '@/components/ui/drawer'
import { siteMetadata } from '@/config' // Import siteMetadata for the clinic name
import { cn } from '@/lib/utils' // Assuming you have a utility for class names like cn

// Define the shape of a single navigation item as expected from config.ts
interface NavItem {
	title: string
	href: string
	highlight?: boolean // Optional property for highlighted links
}

// Define the props interface for the Nav component
interface NavProps {
	navItems: NavItem[]
}

export default function Nav({ navItems }: NavProps) {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false)

	// Consider using usePathname if you want to highlight the active link
	// import { usePathname } from 'next/navigation';
	// const pathname = usePathname();

	return (
		<nav className="mb-8 flex flex-row items-center justify-between">
			<Link href="/">
				{/* Use siteMetadata for the clinic name */}
				<h1 className="font-extrabold text-2xl tracking-tight">{siteMetadata.name}</h1>
			</Link>

			{/* Desktop navigation */}
			<div className="hidden items-center sm:flex">
				{navItems.map(link => (
					<Link
						href={link.href}
						key={link.href}
						prefetch={true}
					>
						<Button
							className={cn(
								// Add active link styling if you import usePathname
								// { 'font-semibold text-primary': pathname === link.href },
								{
									'rounded-md bg-primary px-3 py-1 text-white hover:bg-primary/90': link.highlight,
								}, // Apply highlight style
							)}
							variant="link"
						>
							{link.title}
						</Button>
					</Link>
				))}
				<ThemeToggle />
			</div>

			{/* Mobile navigation */}
			<div className="flex items-center sm:hidden">
				<ThemeToggle />
				<Drawer
					onOpenChange={setIsDrawerOpen}
					open={isDrawerOpen}
				>
					<DrawerTrigger asChild>
						<Button
							className="ml-1"
							size="icon"
							variant="ghost"
						>
							<Menu className="h-5 w-5" />
							<span className="sr-only">Menu</span>
						</Button>
					</DrawerTrigger>
					<DrawerContent>
						<DrawerHeader hidden={true}>
							<DrawerTitle>Navigation</DrawerTitle>
						</DrawerHeader>
						<div className="flex flex-col items-center gap-4 p-4">
							{navItems.map(link => (
								<Link
									className="w-full"
									href={link.href}
									key={link.href}
									prefetch={true}
								>
									<Button
										className={cn(
											'w-full justify-center text-lg',
											{
												'rounded-md bg-primary px-3 py-1 text-white hover:bg-primary/90':
													link.highlight,
											}, // Apply highlight style
										)}
										onClick={() => setIsDrawerOpen(false)}
										variant="link"
									>
										{link.title}
									</Button>
								</Link>
							))}
						</div>
						<DrawerFooter>
							<DrawerClose asChild>
								<Button variant="ghost">
									<X className="mr-2 h-4 w-4" />
									Close
								</Button>
							</DrawerClose>
						</DrawerFooter>
					</DrawerContent>
				</Drawer>
			</div>
		</nav>
	)
}
