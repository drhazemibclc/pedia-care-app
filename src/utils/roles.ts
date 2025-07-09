import { getSession } from '@/lib/auth' // Your Better-Auth instance
import type { Roles } from '@/types/globals'

export const checkRole = async (role: Roles): Promise<boolean> => {
	const session = await getSession()

	// Assuming Better-Auth stores user metadata in session.user.publicMetadata
	const userRole = session?.user?.role?.toLowerCase()

	return userRole === role.toLowerCase()
}

export const getRole = async (): Promise<string> => {
	const session = await getSession()

	// Default to "patient" if role is missing
	const role = session?.user?.role?.toLowerCase() || 'patient'

	return role
}
