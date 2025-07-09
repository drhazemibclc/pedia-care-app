import { betterAuth } from 'better-auth'
import { prismaAdapter } from 'better-auth/adapters/prisma'
import { admin } from 'better-auth/plugins'
import { headers } from 'next/headers'
import { cache } from 'react'

import { env } from '@/env'

import db from '../db'
import { ac, allRoles } from './roles'

export const auth = betterAuth({
	socialProviders: {
		google: {
			clientId: env.GOOGLE_CLIENT_ID as string,
			clientSecret: env.GOOGLE_CLIENT_SECRET as string,
		},
	},
	database: prismaAdapter(db, {
		provider: 'postgresql',
	}),
	secret: env.BETTER_AUTH_SECRET,
	emailAndPassword: {
		enabled: true,
		autoSignIn: true,
		requireEmailVerification: false,
	},
	user: {
		changeEmail: {
			enabled: true,
		},
		deleteUser: {
			enabled: true,
		},
	},
	rateLimit: {
		enabled: true,
		storage: 'database',
	},
	trustedOrigins: [env.BETTER_AUTH_URL as string],
	plugins: [
		admin({
			ac,
			roles: allRoles,
		}),
	],
})

// Memoized session retrieval (used in layouts, middlewares, etc.)
export const getSession = cache(async () => {
	return await auth.api.getSession({
		headers: await headers(),
	})
})

export type Session = typeof auth.$Infer.Session
export type User = Session['user']
export type Role = User['role']
