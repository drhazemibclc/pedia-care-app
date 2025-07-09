import Image from 'next/image'
import type React from 'react'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex h-screen w-full items-center justify-center">
			<div className="flex h-full w-1/2 items-center justify-center">{children}</div>
			<div className="relative hidden h-full w-1/2 md:flex">
				<Image
					alt="Smart Clinic Waiting Area with Kids" // Update alt text for better accessibility
					className="h-full w-full object-cover"
					// Use the local WebP image from the public directory
					height={1000}
					// Next.js Image component handles optimization for local images automatically
					// You don't need to specify height/width for local images if they are known,
					// but it's good practice for layout shift prevention.
					// Let's use the aspect ratio of your image, which seems roughly 1:1, but can be adjusted.
					priority // Set a reasonable width, Next.js will optimize responsive sizes
					src="/clinic.webp" // Set a reasonable height, maintaining aspect ratio. Adjust if needed.
					width={1000} // Add priority if this image is above the fold for faster loading
				/>
				<div className="absolute top-0 z-10 flex h-full w-full flex-col items-center justify-center bg-black bg-opacity-40">
					{/* You previously had "Kinda HMS". Let's update it to "Smart Clinic" based on your image. */}
					<h1 className="font-bold text-3xl text-white 2xl:text-5xl">Smart Clinic</h1>
					<p className="text-base text-blue-500">Your Health, Our Priority</p>{' '}
					{/* Updated tagline */}
				</div>
			</div>
		</div>
	)
}

export default AuthLayout
