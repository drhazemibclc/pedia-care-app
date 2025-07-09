import { format } from 'date-fns'
import { BriefcaseBusiness } from 'lucide-react'

import { Table } from '@/components/tables/table'
import { auth } from '@/lib/auth'

const columns = [
	{
		header: 'user ID',
		key: 'id',
		className: 'hidden lg:table-cell',
	},
	{
		header: 'Name',
		key: 'name',
	},
	{
		header: 'Email',
		key: 'email',
		className: 'hidden md:table-cell',
	},
	{
		header: 'Role',
		key: 'role',
	},
	{
		header: 'Status',
		key: 'status',
	},
	{
		header: 'Last Login',
		key: 'last_login',
		className: 'hidden xl:table-cell',
	},
]

interface UserProps {
	id: string
	firstName: string
	lastName: string
	emailAddresses: { emailAddress: string }[]
	publicMetadata: { role: string }
	lastSignInAt: number | string
}
const UserPage = async () => {
	const { users, total } = await auth.api.listUsers({
		query: {
			sortBy: '-created_at',
		},
	})

	if (!users) return null

	// Define the expected user type from the API
	type ApiUser = {
		id: string
		firstName?: string
		lastName?: string
		emailAddresses?: { emailAddress: string }[]
		email?: string
		publicMetadata?: { role?: string }
		lastSignInAt?: number | string
	}

	// Map the API users to UserProps
	const mappedUsers: UserProps[] = users.map((user: ApiUser) => ({
		id: user.id,
		firstName: user.firstName ?? '',
		lastName: user.lastName ?? '',
		emailAddresses: user.emailAddresses ?? [{ emailAddress: user.email ?? '' }],
		publicMetadata: { role: user.publicMetadata?.role ?? '' },
		lastSignInAt: user.lastSignInAt ?? '',
	}))

	const renderRow = (item: UserProps) => (
		<tr
			className="border-gray-200 border-b text-base even:bg-slate-50 hover:bg-slate-50"
			key={item.id}
		>
			<td className="hidden items-center lg:table-cell">{item?.id}</td>
			<td className="table-cell py-2 xl:py-4">
				{item?.firstName} {item?.lastName}
			</td>
			<td className="table-cell">{item?.emailAddresses[0].emailAddress}</td>
			<td className="table-cell capitalize">{item?.publicMetadata.role}</td>
			<td className="hidden capitalize md:table-cell">Active</td>
			<td className="hidden capitalize md:table-cell">
				{format(item?.lastSignInAt, 'yyyy-MM-dd h:mm:ss')}
			</td>
		</tr>
	)
	return (
		<div className="rounded-xl bg-white p-2 md:p-4 2xl:p-6">
			<div className="flex items-center justify-between">
				<div className="hidden items-center gap-1 lg:flex">
					<BriefcaseBusiness
						className="text-gray-500"
						size={20}
					/>

					<p className="font-semibold text-2xl">{total}</p>
					<span className="text-gray-600 text-sm xl:text-base">total users</span>
				</div>
			</div>

			<div>
				<Table
					columns={columns}
					data={mappedUsers}
					renderRow={renderRow}
				/>
			</div>
		</div>
	)
}

export default UserPage
