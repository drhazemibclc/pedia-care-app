import type React from 'react'
import type { Control, ControllerRenderProps, FieldValues } from 'react-hook-form'

import { Checkbox } from './ui/checkbox'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Switch } from './ui/switch'
import { Textarea } from './ui/textarea'

interface InputProps<T extends FieldValues> {
	type: 'input' | 'select' | 'checkbox' | 'switch' | 'radio' | 'textarea'
	control: Control<T>
	name: keyof T & string
	label?: string
	placeholder?: string
	inputType?: 'text' | 'email' | 'password' | 'date'
	selectList?: { label: string; value: string }[]
	defaultValue?: string
}

const RenderInput = <T extends FieldValues>({
	field,
	props,
}: {
	field: ControllerRenderProps<T>
	props: InputProps<T>
}) => {
	switch (props.type) {
		case 'input':
			return (
				<FormControl>
					<Input
						placeholder={props.placeholder}
						type={props.inputType}
						{...field}
					/>
				</FormControl>
			)

		case 'select':
			return (
				<Select
					onValueChange={field.onChange}
					value={field.value}
				>
					<FormControl>
						<SelectTrigger>
							<SelectValue placeholder={props.placeholder} />
						</SelectTrigger>
					</FormControl>
					<SelectContent>
						{props.selectList?.map(i => (
							<SelectItem
								key={i.value}
								value={i.value}
							>
								{i.label}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			)

		case 'checkbox':
			return (
				<div className="items-top flex space-x-2">
					<Checkbox
						checked={!!field.value}
						id={props.name}
						onCheckedChange={e => field.onChange(e === true)}
					/>
					<div className="grid gap-1.5 leading-none">
						<label
							className="cursor-pointer font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
							htmlFor={props.name}
						>
							{props.label}
						</label>
						<p className="text-muted-foreground text-sm">{props.placeholder}</p>
					</div>
				</div>
			)

		case 'radio':
			return (
				<div className="w-full">
					<FormLabel>{props.label}</FormLabel>
					<RadioGroup
						className="flex gap-4"
						defaultValue={props.defaultValue}
						onValueChange={field.onChange}
						value={field.value}
					>
						{props.selectList?.map(i => (
							<div
								className="flex w-full items-center"
								key={i.value}
							>
								<RadioGroupItem
									className="peer sr-only"
									id={i.value}
									value={i.value}
								/>
								<Label
									className="flex flex-1 items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-blue-500 peer-data-[state=checked]:text-blue-600"
									htmlFor={i.value}
								>
									{i.label}
								</Label>
							</div>
						))}
					</RadioGroup>
				</div>
			)

		case 'textarea':
			return (
				<FormControl>
					<Textarea
						placeholder={props.placeholder}
						{...field}
					/>
				</FormControl>
			)

		case 'switch':
			// If you want to support 'switch' here, add implementation or remove from InputProps.type
			return null

		default:
			return null
	}
}

export const CustomInput = <T extends FieldValues>(props: InputProps<T>) => {
	const { name, label, control, type } = props

	return (
		<FormField
			control={control as unknown as Control<FieldValues>} // Cast here
			name={name}
			render={({ field }) => (
				<FormItem className="w-full">
					{type !== 'radio' && type !== 'checkbox' && <FormLabel>{label}</FormLabel>}
					<RenderInput
						field={field}
						props={props as InputProps<FieldValues>}
					/>
					<FormMessage />
				</FormItem>
			)}
		/>
	)
}
type Day = {
	day: string
	startTime?: string
	closeTime?: string
}

interface SwitchProps {
	data: { label: string; value: string }[]
	setWorkSchedule: React.Dispatch<React.SetStateAction<Day[]>>
}

export const SwitchInput = ({ data, setWorkSchedule }: SwitchProps) => {
	// field is keyof Day or boolean true for toggle on/off
	const handleChange = (day: string, field: keyof Day | true, value?: string) => {
		setWorkSchedule(prevDays => {
			const dayExist = prevDays.find(d => d.day === day)

			if (dayExist) {
				// Update existing day
				if (field === true) {
					// Toggle off: remove the day
					return prevDays.filter(d => d.day !== day)
				}
				return prevDays.map(d => (d.day === day ? { ...d, [field]: value } : d))
			}

			// Add new day if toggled on
			if (field === true) {
				return [...prevDays, { day, startTime: '09:00', closeTime: '17:00' }]
			}

			// Add new day with specific field update
			return [...prevDays, { day, [field]: value }]
		})
	}

	return (
		<div>
			{data?.map(el => (
				<div
					className="flex w-full items-center space-y-3 border-t border-t-gray-200 py-3"
					key={el.label}
				>
					<Switch
						className="peer data-[state=checked]:bg-blue-600"
						id={el.value}
						onCheckedChange={checked => handleChange(el.value, true, checked ? '09:00' : undefined)}
					/>
					<Label
						className="w-20 capitalize"
						htmlFor={el.value}
					>
						{el.value}
					</Label>

					<Label className="pl-10 font-normal text-gray-400 italic peer-data-[state=checked]:hidden">
						Not working on this day
					</Label>

					<div className="hidden items-center gap-2 pl-6 peer-data-[state=checked]:flex">
						<Input
							defaultValue="09:00"
							name={`${el.label}.startTime`}
							onChange={e => handleChange(el.value, 'startTime', e.target.value)}
							type="time"
						/>
						<Input
							defaultValue="17:00"
							name={`${el.label}.closeTime`}
							onChange={e => handleChange(el.value, 'closeTime', e.target.value)}
							type="time"
						/>
					</div>
				</div>
			))}
		</div>
	)
}
