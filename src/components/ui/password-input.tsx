'use client'

import { EyeClosedIcon, EyeIcon } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/lib/utils'

const PasswordInput = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
	({ className, type, ...props }, ref) => {
		const [showPassword, setShowPassword] = React.useState(false)
		const [showEye, setShowEye] = React.useState(false)

		React.useEffect(() => {
			if (!props.value) {
				setShowPassword(false)
				setShowEye(false)
			} else {
				setShowEye(true)
			}
		}, [props.value])

		const togglePasswordVisibility = () => {
			setShowPassword(!showPassword)
		}
		const inputType = type === 'password' && showPassword ? 'text' : type

		return (
			<div className="relative">
				<input
					className={cn(
						'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:font-medium file:text-foreground file:text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
						className,
					)}
					ref={ref}
					type={inputType}
					{...props}
				/>
				{type === 'password' && showEye && (
					<button
						className="-translate-y-1/2 absolute top-1/2 right-3"
						onClick={togglePasswordVisibility}
						tabIndex={-1}
						type="button"
					>
						{showPassword ? (
							<EyeIcon className="h-4 w-4 text-gray-500" />
						) : (
							<EyeClosedIcon className="h-4 w-4 text-gray-500" />
						)}
					</button>
				)}
			</div>
		)
	},
)

PasswordInput.displayName = 'PasswordInput'

export { PasswordInput }
