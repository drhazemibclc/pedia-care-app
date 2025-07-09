'use client'

import * as DialogPrimitive from '@radix-ui/react-dialog'
import { cva, type VariantProps } from 'class-variance-authority'
import { X } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/lib/utils'

const ResponsiveModal = DialogPrimitive.Root

const ResponsiveModalTrigger = DialogPrimitive.Trigger

const ResponsiveModalClose = DialogPrimitive.Close

const ResponsiveModalPortal = DialogPrimitive.Portal

const ResponsiveModalOverlay = React.forwardRef<
	React.ElementRef<typeof DialogPrimitive.Overlay>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
	<DialogPrimitive.Overlay
		className={cn(
			'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=closed]:animate-out data-[state=open]:animate-in',
			className,
		)}
		{...props}
		ref={ref}
	/>
))
ResponsiveModalOverlay.displayName = DialogPrimitive.Overlay.displayName

const ResponsiveModalVariants = cva(
	cn(
		'fixed z-50 gap-4 overflow-y-auto bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=closed]:duration-300 data-[state=open]:duration-500',
		'lg:data-[state=closed]:fade-out-0 lg:data-[state=open]:fade-in-0 lg:data-[state=closed]:zoom-out-95 lg:data-[state=open]:zoom-in-95 lg:data-[state=closed]:slide-out-to-left-1/2 lg:data-[state=closed]:slide-out-to-top-[48%] lg:data-[state=open]:slide-in-from-left-1/2 lg:data-[state=open]:slide-in-from-top-[48%] lg:top-[50%] lg:left-[50%] lg:grid lg:w-full lg:max-w-lg lg:translate-x-[-50%] lg:translate-y-[-50%] lg:rounded-xl lg:border lg:duration-200 lg:data-[state=closed]:animate-out lg:data-[state=open]:animate-in',
	),
	{
		variants: {
			side: {
				top: 'data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 max-h-[90%] rounded-b-xl border-b lg:h-fit',
				bottom:
					'data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 max-h-[90%] rounded-t-xl border-t lg:h-fit',
				left: 'data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 rounded-r-xl border-r sm:max-w-sm lg:h-fit',
				right:
					'data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 rounded-l-xl border-l sm:max-w-sm lg:h-fit',
			},
		},
		defaultVariants: {
			side: 'bottom',
		},
	},
)

interface ResponsiveModalContentProps
	extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>,
		VariantProps<typeof ResponsiveModalVariants> {}

const ResponsiveModalContent = React.forwardRef<
	React.ElementRef<typeof DialogPrimitive.Content>,
	ResponsiveModalContentProps
>(({ side = 'bottom', className, children, ...props }, ref) => (
	<ResponsiveModalPortal>
		<ResponsiveModalOverlay />
		<DialogPrimitive.Content
			className={cn(ResponsiveModalVariants({ side }), className)}
			ref={ref}
			{...props}
		>
			{children}
			<ResponsiveModalClose className="absolute top-4 right-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
				<X className="h-4 w-4" />
				<span className="sr-only">Close</span>
			</ResponsiveModalClose>
		</DialogPrimitive.Content>
	</ResponsiveModalPortal>
))
ResponsiveModalContent.displayName = DialogPrimitive.Content.displayName

const ResponsiveModalHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
	<div
		className={cn('flex flex-col space-y-2 text-center sm:text-left', className)}
		{...props}
	/>
)
ResponsiveModalHeader.displayName = 'ResponsiveModalHeader'

const ResponsiveModalFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
	<div
		className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)}
		{...props}
	/>
)
ResponsiveModalFooter.displayName = 'ResponsiveModalFooter'

const ResponsiveModalTitle = React.forwardRef<
	React.ElementRef<typeof DialogPrimitive.Title>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
	<DialogPrimitive.Title
		className={cn('font-semibold text-foreground text-lg', className)}
		ref={ref}
		{...props}
	/>
))
ResponsiveModalTitle.displayName = DialogPrimitive.Title.displayName

const ResponsiveModalDescription = React.forwardRef<
	React.ElementRef<typeof DialogPrimitive.Description>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
	<DialogPrimitive.Description
		className={cn('text-muted-foreground text-sm', className)}
		ref={ref}
		{...props}
	/>
))
ResponsiveModalDescription.displayName = DialogPrimitive.Description.displayName

export {
	ResponsiveModal,
	ResponsiveModalPortal,
	ResponsiveModalOverlay,
	ResponsiveModalTrigger,
	ResponsiveModalClose,
	ResponsiveModalContent,
	ResponsiveModalHeader,
	ResponsiveModalFooter,
	ResponsiveModalTitle,
	ResponsiveModalDescription,
}
