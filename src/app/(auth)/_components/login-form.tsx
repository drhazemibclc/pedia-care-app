'use client'

import type { ErrorContext } from '@better-fetch/fetch'
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
import { signIn } from '@/lib/auth/client'
import { signInSchema } from '@/lib/auth/schema'

export default function LoginForm() {
	const searchParams = useSearchParams()
	const callbackUrl = searchParams.get('callbackUrl')
	const encodedCallbackUrl = encodeURIComponent(callbackUrl ?? '')

	const router = useRouter()
	const [isPending, startTransition] = useTransition()

	const form = useForm<z.infer<typeof signInSchema>>({
		resolver: zodResolver(signInSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	})

	const openSignUpPage = () => {
		if (!callbackUrl) {
			router.push('/sign-up')
		} else {
			router.push(`/sign-up?callbackUrl=${encodedCallbackUrl}`)
		}
	}

	const handleCredentialsSignIn = async (values: z.infer<typeof signInSchema>) => {
		startTransition(async () => {
			await signIn.email(
				{
					email: values.email,
					password: values.password,
				},
				{
					onRequest: () => {
						toast.loading('Signing in...', { id: 'signInToast' })
					},
					onSuccess: async () => {
						toast.success('Signed in successfully', { id: 'signInToast' })
						router.push(callbackUrl ?? AUTHENTICATED_URL)
						router.refresh()
					},
					onError: (ctx: ErrorContext) => {
						toast.error(ctx.error.message ?? 'Something went wrong.', {
							id: 'signInToast',
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
					onSubmit={form.handleSubmit(handleCredentialsSignIn)}
				>
					<FormField
						control={form.control}
						name="email"
						render={({ field: fieldProps }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input
										autoComplete="email"
										placeholder="Enter your emaill"
										type="email"
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
										placeholder="Enter your password"
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
						Sign in
					</LoadingButton>
				</form>
			</Form>
			<div className="mt-4 text-center text-sm">
				<Button
					className="text-primary hover:underline"
					onClick={openSignUpPage}
					variant="link"
				>
					Don&apos;t have an account? Sign up
				</Button>
			</div>
		</>
	)
}
