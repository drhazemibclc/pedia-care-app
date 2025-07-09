// src/components/footer.tsx

import Link from 'next/link'

// Import only the specific icon components you need
import { GitHub, GMail, Instagram, LinkedIn, YouTube } from '@/components/icons'
// Import siteMetadata from config.ts
import { siteMetadata } from '@/config'

// --- Interface Definitions ---
// Define the shape of a single social link item
interface SocialLink {
	name: string // e.g., "Instagram", "GitHub", "LinkedIn", "Email", "YouTube"
	href: string
}

// Define the props interface for the Footer component
interface FooterProps {
	socialLinks: SocialLink[]
}

// --- Icon Mapping ---
// Map social link names to their corresponding icon components.
// Ensure these names match the 'name' property in your navLinks.socialLinks array in config.ts.
const iconMap: { [key: string]: React.ElementType } = {
	Instagram: Instagram,
	GitHub: GitHub,
	LinkedIn: LinkedIn,
	Email: GMail, // Using 'Email' as the name for mailto links in config.ts
	YouTube: YouTube,
	// If you have Facebook or Twitter in your config.ts, you'd need to import their icons here
	// e.g., Facebook: FaFacebook, Twitter: FaTwitter
}

// --- Footer Component ---
export default function Footer({ socialLinks }: FooterProps) {
	const currentYear = new Date().getFullYear()

	return (
		<footer className="flex flex-col items-center justify-between py-8 text-gray-500 text-sm md:flex-row">
			{/* Copyright Section */}
			<div className="mb-4 text-center md:mb-0 md:text-left">
				<Link
					className="transition-colors hover:text-primary"
					href="/"
					target="_self"
				>
					{' '}
					{/* Use target="_self" for internal links */}
					<p className="tracking-tight">
						&copy; {currentYear} {siteMetadata.name}. All rights reserved.
					</p>
				</Link>
				{/* Optional: Add clinic contact info here from siteMetadata */}
				{siteMetadata.contactEmail && (
					<p className="mt-1">
						Email:{' '}
						<a
							className="text-gray-600 hover:underline dark:text-gray-400"
							href={`mailto:${siteMetadata.contactEmail}`}
						>
							{siteMetadata.contactEmail}
						</a>
					</p>
				)}
				{siteMetadata.contactPhone && (
					<p className="mt-1">
						Phone:{' '}
						<a
							className="text-gray-600 hover:underline dark:text-gray-400"
							href={`tel:${siteMetadata.contactPhone}`}
						>
							{siteMetadata.contactPhone}
						</a>
					</p>
				)}
				{siteMetadata.address && (
					<p className="mt-1">
						Address:{' '}
						<a
							className="text-gray-600 hover:underline dark:text-gray-400"
							href={siteMetadata.googleMapsLink}
							rel="noopener noreferrer"
							target="_blank"
						>
							{siteMetadata.address}
						</a>
					</p>
				)}
			</div>

			{/* Social Links Section */}
			<div className="flex gap-4 fill-foreground">
				{socialLinks.map(link => {
					const IconComponent = iconMap[link.name]
					if (!IconComponent) {
						console.warn(
							`No icon component mapped for social link: ${link.name}. Please check iconMap in footer.tsx.`,
						)
						return null // Don't render link if no icon is mapped
					}

					return (
						<Link
							aria-label={`Link to ${link.name}`}
							className="transition-colors hover:text-primary"
							href={link.href}
							key={link.name}
							rel="noopener noreferrer"
							target="_blank"
						>
							<IconComponent
								height={20}
								width={20}
							/>
						</Link>
					)
				})}
			</div>
		</footer>
	)
}
