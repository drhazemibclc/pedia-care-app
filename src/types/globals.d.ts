import { auth } from '@/lib/auth' // Your Better-Auth instance
import { Roles } from '@/types/globals'

export const checkRole = async (_role: Roles): Promise<boolean> => {
	const session = await auth.api.getSession()

	// Assuming Better-Auth stores user metadata in session.user.publicMetadata
	const userRole = session?.user?.publicMetadata?.role?.toLowerCase()

	return userRole === role.toLowerCase()
}

export const getRole = async (): Promise<string> => {
	const session = await getSession()

	// Default to "patient" if role is missing
	const role = session?.user?.publicMetadata?.role?.toLowerCase() || 'patient'

	return role
}
export { Roles }
