import { motion } from 'framer-motion'
import {
	ArrowRight,
	Baby, // Specifically for pediatrics
	CalendarDays,
	HeartPulse, // Good for health/vitality
	Shield,
	Syringe, // Represents vaccinations/medical history
	UserPlus, // Represents patient registration
	Wallet, // Represents billing
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation' // Correct import for client-side redirect if needed after async operations

import FloatingAnimation from '@/components/floating-animation'
import { Button } from '@/components/ui/button'
import { appRoutes, siteMetadata } from '@/config' // Ensure siteMetadata and appRoutes are imported
// Server-side imports (these will run on the server if `Home` is `async`)
import { getSession } from '@/lib/auth'
import { getRole } from '@/utils/roles'

// Define the features relevant to a pediatric clinic management system
// Consolidated and refined for a clinic's core offerings
const clinicFeatures = [
	{
		title: 'Secure Patient Records',
		description:
			'Ensure the highest level of privacy and security for all patient data, compliant with health regulations.',
		icon: Shield,
	},
	{
		title: 'Effortless Appointments',
		description:
			'Manage bookings, send automated reminders, and integrate with calendars for seamless scheduling.',
		icon: CalendarDays,
	},
	{
		title: 'Streamlined Registration',
		description: 'Simplify patient intake with easy-to-use forms and quick record creation.',
		icon: UserPlus,
	},
	{
		title: 'Comprehensive Vaccinations',
		description:
			'Track and manage vaccination schedules effortlessly, ensuring timely immunizations.',
		icon: Syringe,
	},
	{
		title: 'Integrated Billing & Payments',
		description:
			'Handle all financial transactions, insurance claims, and billing with clarity and ease.',
		icon: Wallet,
	},
	{
		title: 'Pediatric Growth Tracking',
		description: 'Monitor child development with intuitive growth charts and milestones tracking.',
		icon: Baby, // Using Baby icon for pediatric focus
	},
]

export default async function Home() {
	const session = await getSession()
	const userId = session?.user.id
	const role = userId ? await getRole() : null // Only try to get role if userId exists

	// Redirect authenticated users to their respective dashboards
	if (userId && role) {
		redirect(`/${role}`)
	}

	return (
		<div className="flex min-h-screen flex-col">
			{/* Hero Section */}
			<section className="relative overflow-hidden px-4 py-20 md:px-6 md:py-28 lg:px-8">
				{/* Background Gradient & Animated Grid Pattern */}
				<div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-950 dark:to-gray-800" />
				<div className="absolute inset-0 z-0 opacity-10">
					<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
				</div>

				{/* Floating Elements for visual depth */}
				<div className="absolute inset-0 overflow-hidden">
					<FloatingAnimation
						className="-top-10 -translate-x-1/2 absolute left-1/4 transform"
						delay={0.5}
						duration={5}
					>
						<div className="h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
					</FloatingAnimation>
					<FloatingAnimation
						className="absolute top-1/3 right-1/4 translate-x-1/2 transform"
						delay={1.5}
						duration={7}
					>
						<div className="h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
					</FloatingAnimation>
					<FloatingAnimation
						className="-translate-x-1/2 absolute bottom-1/4 left-1/5 transform"
						delay={1.8}
						duration={6}
					>
						<div className="h-48 w-48 rounded-full bg-accent/5 blur-3xl" />
					</FloatingAnimation>
				</div>

				<div className="container relative z-10 mx-auto">
					<div className="flex flex-col items-center space-y-8 text-center">
						<motion.div
							animate={{ opacity: 1, y: 0 }}
							className="space-y-4"
							initial={{ opacity: 0, y: 20 }}
							transition={{ duration: 0.5 }}
						>
							<div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 font-medium text-primary text-sm">
								<span className="flex items-center gap-2">
									<HeartPulse className="h-4 w-4" />
									Caring for Every Child, Every Step
								</span>
							</div>
							<h1 className="font-extrabold text-4xl text-foreground leading-tight tracking-tight md:text-6xl">
								Welcome to <span className="text-primary-500">{siteMetadata.name}</span>
								<br />
								<span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
									Modern Pediatric Clinic Management
								</span>
							</h1>
							{/* Clinic Description - corrected, not nested in h1 */}
							<p className="mt-4 text-gray-700 text-lg leading-relaxed sm:text-xl dark:text-gray-300">
								{siteMetadata.description}
							</p>
						</motion.div>

						<motion.div
							animate={{ opacity: 1, y: 0 }}
							className="mt-8 flex flex-col gap-4 sm:flex-row"
							initial={{ opacity: 0, y: 20 }}
							transition={{ duration: 0.5, delay: 0.2 }}
						>
							{userId ? (
								// Render dashboard button if logged in
								<Link
									href={`/${role}`}
									passHref
								>
									<Button
										asChild
										className="w-full transform rounded-full bg-primary-600 px-8 py-3 font-semibold text-lg text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-primary-700 hover:shadow-lg sm:w-auto"
										size="lg"
									>
										<span>Go to Dashboard</span> <ArrowRight className="ml-2 h-5 w-5" />
									</Button>
								</Link>
							) : (
								// Render Login and Register buttons if not logged in
								<>
									<Link
										href={appRoutes.login}
										passHref
									>
										<Button
											asChild
											className="w-full transform rounded-full bg-primary-600 px-8 py-3 font-semibold text-lg text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-primary-700 hover:shadow-lg sm:w-auto"
											size="lg"
										>
											<span>Log In to Patient Portal</span> <ArrowRight className="ml-2 h-5 w-5" />
										</Button>
									</Link>
									<Link
										href="/register"
										passHref
									>
										<Button
											className="w-full transform rounded-full border-primary-600 px-8 py-3 font-semibold text-lg text-primary-600 shadow-md transition-all duration-300 hover:scale-105 hover:bg-primary-50 hover:shadow-lg sm:w-auto dark:hover:bg-gray-700"
											size="lg"
											variant="outline"
										>
											New Patient Registration
										</Button>
									</Link>
								</>
							)}
						</motion.div>

						<motion.div
							animate={{ opacity: 1, y: 0 }}
							className="mt-16 w-full max-w-5xl overflow-hidden rounded-xl border border-border shadow-lg"
							initial={{ opacity: 0, y: 40 }}
							transition={{ duration: 0.7, delay: 0.4 }}
						>
							<div className="relative">
								<div className="absolute top-0 right-0 left-0 flex h-8 items-center border-border border-b bg-muted px-4">
									<div className="flex space-x-2">
										<div className="h-3 w-3 rounded-full bg-red-400" />
										<div className="h-3 w-3 rounded-full bg-yellow-400" />
										<div className="h-3 w-3 rounded-full bg-green-400" />
									</div>
								</div>
								<div className="bg-card p-4 pt-8">
									{/* Clinic Image with refined styling */}
									<div className="relative aspect-video w-full overflow-hidden rounded-lg border border-gray-200 shadow-inner dark:border-gray-700">
										<Image
											alt="Smart Clinic welcoming interior with modern design and friendly atmosphere"
											className="rounded-lg"
											layout="fill"
											objectFit="cover"
											priority
											src="/images/clinic-interior-hero.jpg" // Make sure this image exists in your public/images folder
										/>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="relative bg-gray-50 px-4 py-20 md:px-6 lg:px-8 dark:bg-gray-900">
				<div className="absolute inset-0 overflow-hidden">
					<FloatingAnimation
						className="-translate-x-1/2 absolute bottom-1/4 left-1/3 transform"
						delay={0.8}
						duration={6}
					>
						<div className="h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
					</FloatingAnimation>
				</div>

				<div className="container relative mx-auto">
					<div className="mb-16 text-center">
						<motion.h2
							className="mb-4 font-bold text-3xl text-foreground md:text-4xl"
							initial={{ opacity: 0, y: 20 }}
							transition={{ duration: 0.5 }}
							viewport={{ once: true }}
							whileInView={{ opacity: 1, y: 0 }}
						>
							Comprehensive Care & Management Features
						</motion.h2>
						<motion.p
							className="mx-auto max-w-2xl text-muted-foreground text-xl"
							initial={{ opacity: 0, y: 20 }}
							transition={{ duration: 0.5, delay: 0.1 }}
							viewport={{ once: true }}
							whileInView={{ opacity: 1, y: 0 }}
						>
							Everything your family needs for a healthier future, supported by efficient clinic
							operations.
						</motion.p>
					</div>

					<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
						{clinicFeatures.map((feature, index) => (
							<motion.div
								className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm"
								initial={{ opacity: 0, y: 20 }}
								key={feature.title}
								transition={{ duration: 0.4, delay: 0.1 * index }}
								viewport={{ once: true }}
								whileHover={{
									y: -5,
									boxShadow:
										'0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
									transition: { duration: 0.2 },
								}}
								whileInView={{ opacity: 1, y: 0 }}
							>
								<div className="mb-4 w-fit rounded-full bg-primary/10 p-3">
									<feature.icon className="h-6 w-6 text-primary" />
								</div>
								<h3 className="mb-2 font-bold text-xl">{feature.title}</h3>
								<p className="text-muted-foreground">{feature.description}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Call to Action Section (before footer) */}
			<section className="relative overflow-hidden bg-primary-600 px-4 py-20 text-white md:px-6 lg:px-8">
				<div className="absolute inset-0 overflow-hidden">
					<FloatingAnimation
						className="absolute top-1/2 right-1/5 translate-x-1/2 transform"
						delay={1.2}
						duration={5}
					>
						<div className="h-64 w-64 rounded-full bg-white/10 blur-3xl" />
					</FloatingAnimation>
				</div>

				<div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
					<motion.div
						className="mx-auto max-w-3xl text-center"
						initial={{ opacity: 0, y: 20 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
						whileInView={{ opacity: 1, y: 0 }}
					>
						<h2 className="mb-4 font-bold text-3xl md:text-4xl">
							Ready to Prioritize Your Family's Health?
						</h2>
						<p className="mb-8 text-lg opacity-90">
							Experience compassionate pediatric care and seamless clinic management. Book an
							appointment or register today.
						</p>
						<div className="flex flex-col justify-center gap-4 sm:flex-row">
							<Button
								asChild
								className="bg-white text-primary-600 shadow-lg hover:bg-gray-100 hover:text-primary-700"
								size="lg"
							>
								<Link href={appRoutes.scheduleAppointment}>
									Book Appointment <CalendarDays className="ml-2 h-4 w-4" />
								</Link>
							</Button>
							<Button
								asChild
								className="border-white text-white shadow-lg hover:bg-white hover:text-primary-600"
								size="lg"
								variant="outline"
							>
								<Link href="/contact">
									Contact Us <ArrowRight className="ml-2 h-4 w-4" />
								</Link>
							</Button>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Ensure Footer is NOT here. It's in RootLayout.tsx */}
		</div>
	)
}
