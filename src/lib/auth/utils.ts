// lib/auth-role.ts

import type { UserRoles } from '@/types/globals'
import { auth } from '@/utils/auth/server' // BetterAuth instance

interface SessionContext {
	headers: Headers
}

// Check if the current user has the specified role
export const checkRole = async (role: UserRoles, opts: SessionContext): Promise<boolean> => {
	const session = await auth.api.getSession({ headers: opts.headers })
	const userRole = session?.user?.role?.toLowerCase()
	return userRole === role.toLowerCase()
}

// Get current user's role, defaulting to 'patient'
export const getRole = async (opts: SessionContext): Promise<UserRoles> => {
	const session = await auth.api.getSession({ headers: opts.headers })
	return (session?.user?.role?.toLowerCase() as UserRoles) ?? 'patient'
}

// Get current user object
export const getUser = async (opts: SessionContext) => {
	const session = await auth.api.getSession({ headers: opts.headers })
	return session?.user ?? null
}

// Get current user ID
export const getUserId = async (opts: SessionContext): Promise<string | null> => {
	const session = await auth.api.getSession({ headers: opts.headers })
	return session?.user?.id ?? null
}

// Get current user email
export const getUserEmail = async (opts: SessionContext): Promise<string | null> => {
	const session = await auth.api.getSession({ headers: opts.headers })
	return session?.user?.email ?? null
}

// Get current user name
export const getUserName = async (opts: SessionContext): Promise<string | null> => {
	const session = await auth.api.getSession({ headers: opts.headers })
	return session?.user?.name ?? null
}

// Get current user role (raw)
export const getUserRole = async (opts: SessionContext): Promise<string | null> => {
	const session = await auth.api.getSession({ headers: opts.headers })
	return session?.user?.role ?? null
}
