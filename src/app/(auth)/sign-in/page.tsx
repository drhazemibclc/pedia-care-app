import type { Metadata } from 'next'
import { Suspense } from 'react'

import { Spinner } from '@/components/ui/spinner'

import LoginForm from '../_components/login-form'

export const metadata: Metadata = {
	title: 'Login',
	description: 'Login into your account',
}

export default function LoginPage() {
	return (
		<main className="flex flex-col gap-6">
			<div className="flex flex-col items-center gap-2 text-center">
				<h1 className="font-bold text-2xl">Login to your account</h1>
				<p className="text-balance text-muted-foreground text-sm">
					Enter your email below to login to your account
				</p>
			</div>
			<Suspense fallback={<Spinner />}>
				<LoginForm />
			</Suspense>
		</main>
	)
}
