import { adminClient, inferAdditionalFields, twoFactorClient } from 'better-auth/client/plugins'
import { createAuthClient } from 'better-auth/react'
import { toast } from 'sonner'

import type { auth } from '.'
import { ac, allRoles } from './roles'

export const authClient = createAuthClient({
	fetchOptions: {
		onError: e => {
			if (e.error.status === 429) {
				toast.error('Too many requests. Please try again later.')
			} else {
				toast.error(e.error.message || 'An unknown error occurred.')
			}
		},
	},
	plugins: [
		adminClient({
			ac,
			roles: allRoles,
		}),
		twoFactorClient(),
		inferAdditionalFields<typeof auth>(),
	],
})

export type Session = typeof authClient.$Infer.Session

export const {
	signIn,
	signOut,
	signUp,
	updateUser,
	changePassword,
	changeEmail,
	deleteUser,
	useSession,
	revokeSession,
	getSession,
	resetPassword,
	sendVerificationEmail,
	linkSocial,
	forgetPassword,
	verifyEmail,
	listAccounts,
	listSessions,
	revokeOtherSessions,
	revokeSessions,
} = authClient

export function useUser() {
	const session = useSession()
	return session.data?.user
}

export function useRole() {
	const session = useSession()
	return session.data?.user?.role
}

export function useIsAdmin() {
	const role = useRole()
	return role === 'admin'
}
