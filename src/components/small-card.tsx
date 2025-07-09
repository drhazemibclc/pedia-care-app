import { cn } from '@/lib/utils'

export const SmallCard = ({
	label,
	value,
	className,
}: {
	label: string
	value: string
	className?: string
}) => {
	return (
		<div className="w-full md:w-1/3">
			<span className="text-gray-500 text-sm">{label}</span>
			<p className={cn('text-sm md:text-base', className)}>{value}</p>
		</div>
	)
}
