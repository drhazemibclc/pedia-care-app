'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter, useSearchParams } from 'next/navigation'
import { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import type { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { LoadingButton } from '@/components/ui/loading-button'
import { PasswordInput } from '@/components/ui/password-input'
import { AUTHENTICATED_URL } from '@/constant'
import { signUp } from '@/lib/auth/client'
import { signUpSchema } from '@/lib/auth/schema'

export default function SignUpForm() {
	const searchParams = useSearchParams()
	const callbackUrl = searchParams.get('callbackUrl')
	const encodedCallbackUrl = encodeURIComponent(callbackUrl ?? '')

	const [isPending, startTransition] = useTransition()
	const router = useRouter()

	const openLoginPage = () => {
		if (!callbackUrl) {
			router.push('/login')
		} else {
			router.push(`/login?callbackUrl=${encodedCallbackUrl}`)
		}
	}

	const form = useForm<z.infer<typeof signUpSchema>>({
		resolver: zodResolver(signUpSchema),
		defaultValues: {
			name: '',
			email: '',
			password: '',
			confirmPassword: '',
		},
	})

	const onSubmit = (values: z.infer<typeof signUpSchema>) => {
		startTransition(async () => {
			await signUp.email(
				{
					email: values.email,
					password: values.password,
					name: values.name,
				},
				{
					onRequest: () => {
						toast.loading('Creating account...', { id: 'signUpToast' })
					},
					onSuccess: () => {
						toast.success('Email verification sent.', {
							id: 'signUpToast',
							description: 'Please check your email to verify your account.',
							duration: Number.POSITIVE_INFINITY,
						})
						router.push(callbackUrl ?? AUTHENTICATED_URL)
					},
					onError: ctx => {
						toast.error(ctx.error.message ?? 'Something went wrong.', {
							id: 'signUpToast',
						})
						console.log('error', ctx)
					},
				},
			)
		})
	}

	return (
		<>
			<Form {...form}>
				<form
					className="space-y-6"
					onSubmit={form.handleSubmit(onSubmit)}
				>
					<FormField
						control={form.control}
						name="name"
						render={({ field: fieldProps }) => (
							<FormItem>
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input
										autoComplete="name"
										placeholder="John doe"
										type="text"
										{...fieldProps}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="email"
						render={({ field: fieldProps }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input
										autoComplete="email"
										placeholder="your@email.com"
										type="text"
										{...fieldProps}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="password"
						render={({ field: fieldProps }) => (
							<FormItem>
								<FormLabel>Password</FormLabel>
								<FormControl>
									<PasswordInput
										autoComplete="password"
										type="password"
										{...fieldProps}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="confirmPassword"
						render={({ field: fieldProps }) => (
							<FormItem>
								<FormLabel>Confirm Password</FormLabel>
								<FormControl>
									<PasswordInput
										autoComplete="off"
										type="password"
										{...fieldProps}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<LoadingButton
						className="w-full"
						loading={isPending}
					>
						Sign up
					</LoadingButton>
				</form>
			</Form>
			<div className="mt-4 text-center text-sm">
				<Button
					className="text-primary hover:underline"
					onClick={openLoginPage}
					variant="link"
				>
					Already have an account? Sign In
				</Button>
			</div>
		</>
	)
}
