import type React from 'react'

interface TableProps<T> {
	columns: { header: string; key: string; className?: string }[]
	renderRow: (item: T) => React.ReactNode
	data: T[]
}

export const Table = <T extends {}>({ columns, renderRow, data }: TableProps<T>) => {
	return (
		<table className="mt-4 w-full">
			<thead>
				<tr className="text-left text-gray-500 text-sm lg:uppercase">
					{columns.map(({ header, key, className }) => (
						<th
							className={className}
							key={key}
						>
							{header}
						</th>
					))}
				</tr>
			</thead>

			<tbody>
				{data?.length < 1 && (
					<tr className="py-10 text-base text-gray-400">
						<td>No Data Found</td>
					</tr>
				)}

				{data?.length > 0 &&
					data?.map((item, id) => renderRow({ ...(item as object), index: id } as unknown as T))}
			</tbody>
		</table>
	)
}
