'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Plus } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import type { z } from 'zod'

import { addNewService } from '@/app/actions/admin'
import { ServicesSchema } from '@/lib/schema'

import { CustomInput } from '../custom-input'
import { Button } from '../ui/button'
import { CardDescription, CardHeader } from '../ui/card'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Form } from '../ui/form'

export const AddService = () => {
	const [isLoading, setIsLoading] = useState(false)
	const router = useRouter()

	const form = useForm<z.infer<typeof ServicesSchema>>({
		resolver: zodResolver(ServicesSchema),
		defaultValues: {
			serviceName: undefined,
			price: undefined,
			description: undefined,
		},
	})

	const handleOnSubmit = async (values: z.infer<typeof ServicesSchema>) => {
		try {
			setIsLoading(true)
			const resp = await addNewService(values)

			if (resp.success) {
				toast.success('Service added successfully!')

				router.refresh()

				form.reset()
			} else if (resp.error) {
				toast.error(resp.msg)
			}
		} catch (error) {
			console.log(error)
			toast.error('Something went wrong. Please try again.')
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button
					className="font-normal text-sm"
					size="sm"
				>
					<Plus
						className="text-gray-500"
						size={22}
					/>{' '}
					Add New Service
				</Button>
			</DialogTrigger>
			<DialogContent>
				<CardHeader className="px-0">
					<DialogTitle>Add New Service</DialogTitle>
					<CardDescription>
						Ensure accurate readings are perform as this may affect the diagnosis and other medical
						processes.
					</CardDescription>
				</CardHeader>

				<Form {...form}>
					<form
						className="space-y-8"
						onSubmit={form.handleSubmit(handleOnSubmit)}
					>
						<CustomInput
							control={form.control}
							label="Service Name"
							name="serviceName"
							placeholder=""
							type="input"
						/>

						<CustomInput
							control={form.control}
							label="Service Price"
							name="price"
							placeholder=""
							type="input"
						/>
						<div className="flex items-center gap-4">
							<CustomInput
								control={form.control}
								label="Service Description"
								name="description"
								placeholder=""
								type="textarea"
							/>
						</div>

						<Button
							className="w-full bg-blue-600"
							disabled={isLoading}
							type="submit"
						>
							Submit
						</Button>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	)
}
